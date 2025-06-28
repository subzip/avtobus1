import { ElementCreator } from "../../../core/utils/element-creator";
import button from "../blue-button/blue-button";
import closeButtonSVG from "../../../assets/img/menu/close-button.svg";
import { InputField } from "../input-field/input-field";
import { deleteButton } from "../dekete-contact/delete-contact";
import { StorageService } from "../../../core/services/storage.service";
import { isGroupNameUnique } from "../../../core/utils/validators";

export class MenuBurger {
  private contactsStorage;

  private menuBurger;
  private titleWrapper;
  private title;
  private closeBtn;
  private inputWrapper;
  private inputs: Array<HTMLElement>;
  private btnsWrapper;
  private addbtn;
  private savebtn;

  constructor() {
    this.contactsStorage = StorageService.loadData();

    this.menuBurger = document.createElement("aside");
    this.menuBurger.setAttribute("id", "burger-menu");
    this.menuBurger.setAttribute("class", "burger-menu burger-menu-closed");

    this.titleWrapper = ElementCreator.createElement(
      "div",
      "burger-menu__title-wrapper"
    );
    this.title = ElementCreator.createElement("span", "burger-menu__title");
    this.closeBtn = ElementCreator.createElement(
      "img",
      "burger-menu__btn-close"
    ) as HTMLImageElement;
    this.closeBtn.addEventListener("click", () => this.closeContacts());

    this.closeBtn.src = closeButtonSVG;
    this.title.innerHTML = "Группы контактов";

    this.inputWrapper = ElementCreator.createElement(
      "div",
      "burger-menu__contacts-wrapper"
    );

    this.inputs = [];

    this.btnsWrapper = ElementCreator.createElement(
      "div",
      "burger-menu__btns-wrapper"
    );
    this.addbtn = button("Добавить", "burger-menu__btn-add");
    this.addbtn.addEventListener("click", () => {
      this.addContact();
    });
    this.savebtn = button("Сохранить", "burger-menu__btn-save");
    this.savebtn.addEventListener("click", () => this.saveContactsGroup());

    this.titleWrapper.appendChild(this.title);
    this.titleWrapper.appendChild(this.closeBtn);
    this.btnsWrapper.appendChild(this.addbtn);
    this.btnsWrapper.appendChild(this.savebtn);

    this.fillStorage();

    this.menuBurger.appendChild(this.titleWrapper);
    this.menuBurger.appendChild(this.inputWrapper);
    this.menuBurger.appendChild(this.btnsWrapper);
  }

  public fillStorage() {
    this.clearContacts();
    this.contactsStorage = StorageService.loadData();

    this.contactsStorage.groups.map((el) => {
      const wrapper = ElementCreator.createElement(
        "div",
        "burger-menu__input-wrapper"
      );
      const input = new InputField();
      const deleteBtn = deleteButton();
      input.setKey(el.id);
      input.getInputField().value = el.name;

      deleteBtn.addEventListener("click", () => {
        StorageService.deleteGroup(el.id);
        // this.inputWrapper.removeChild(wrapper);
        // const temp = this.inputs.filter((el) => el !== wrapper);
        // this.inputs = temp;
        this.fillStorage();
      });

      wrapper.appendChild(input.getInputField());
      wrapper.appendChild(deleteBtn);

      this.inputs.push(wrapper);

      this.fillContacts();
    });
  }

  public addContact() {
    const wrapper = ElementCreator.createElement(
      "div",
      "burger-menu__input-wrapper"
    );
    const input = new InputField();
    const deleteBtn = deleteButton();
    input.setKey(crypto.randomUUID());

    deleteBtn.addEventListener("click", () => {
      //delete wrapper -> input from localStorage
      this.inputWrapper.removeChild(wrapper);
      const temp = this.inputs.filter((el) => el !== wrapper);
      this.inputs = temp;
      this.fillContacts();
    });

    wrapper.appendChild(input.getInputField());
    wrapper.appendChild(deleteBtn);

    this.inputs.push(wrapper);

    this.fillContacts();
  }

  fillContacts() {
    this.inputs.map((el) => {
      this.inputWrapper.appendChild(el);
    });
  }

  clearContacts() {
    this.inputs.map((el) => {
      this.inputWrapper.removeChild(el);
    });
    this.inputs = [];
  }

  closeContacts() {
    this.menuBurger.removeAttribute("class");
    this.menuBurger.setAttribute("class", "burger-menu burger-menu-closed");
    this.fillStorage();
  }

  public saveContactsGroup() {
    const storageTemp = {
      contacts: this.contactsStorage.contacts,
      groups: this.contactsStorage.groups,
    };
    this.inputs.map((el) => {
      const group = {
        id: el.getElementsByTagName("input")[0].id,
        name: el.getElementsByTagName("input")[0].value,
      };

      if (isGroupNameUnique(group.name, this.contactsStorage.groups)) {
        //delete if id is exist
        storageTemp.groups = [...storageTemp.groups, group];
      } else {
        //el.getElementsByTagName("input")[0] red warning
      }
    });

    StorageService.saveData(storageTemp);
  }

  public getMenu() {
    return this.menuBurger;
  }
}
