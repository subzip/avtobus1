import { ElementCreator } from "../../../core/utils/element-creator";
import button from "../blue-button/blue-button";
import closeButtonSVG from "../../../assets/img/menu/close-button.svg";
import { InputField } from "../input-field/input-field";
import { deleteButton } from "../dekete-contact/delete-contact";
import { StorageService } from "../../../core/services/storage.service";
import { isGroupNameUnique } from "../../../core/utils/validators";

export class AddContactMenu {
  private contactsStorage;

  private menuBurger;
  private titleWrapper;
  private title;
  private closeBtn;
  private inputWrapper;
  private inputs: Array<HTMLElement>;
  private btnsWrapper;
  private savebtn;

  constructor() {
    this.contactsStorage = StorageService.loadData();

    this.menuBurger = document.createElement("aside");
    this.menuBurger.setAttribute("id", "add-contact-menu");
    this.menuBurger.setAttribute(
      "class",
      "add-contact-menu add-contact-closed"
    );

    this.titleWrapper = ElementCreator.createElement(
      "div",
      "add-contact-menu__title-wrapper"
    );
    this.title = ElementCreator.createElement(
      "span",
      "add-contact-menu__title"
    );
    this.closeBtn = ElementCreator.createElement(
      "img",
      "add-contact-menu__btn-close"
    ) as HTMLImageElement;
    this.closeBtn.src = closeButtonSVG;
    this.title.innerHTML = "Добавление контакта";

    this.inputWrapper = ElementCreator.createElement(
      "div",
      "add-contact-menu__contacts-wrapper"
    );

    this.inputs = [];

    this.btnsWrapper = ElementCreator.createElement(
      "div",
      "add-contact-menu__btns-wrapper"
    );

    this.savebtn = button("Сохранить", "add-contact-menu__btn-save");

    const input1 = new InputField();
    const input2 = new InputField();

    input1.getInputField().placeholder = "Введите ФИО";
    input2.getInputField().placeholder = "Введите номер";

    this.inputWrapper.appendChild(input1.getInputField());
    this.inputWrapper.appendChild(input2.getInputField());

    this.titleWrapper.appendChild(this.title);
    this.titleWrapper.appendChild(this.closeBtn);
    this.btnsWrapper.appendChild(this.savebtn);

    this.menuBurger.appendChild(this.titleWrapper);
    this.menuBurger.appendChild(this.inputWrapper);
    this.menuBurger.appendChild(this.btnsWrapper);

    this.initGroups();
  }

  initGroups() {
    const data = StorageService.loadData();

    const groups = ElementCreator.createElement(
      "select",
      "add-contact-menu__select"
    ) as HTMLSelectElement;

    data.groups.map((el) => {
      const group = ElementCreator.createElement(
        "option",
        "add-contact-menu__select-option"
      ) as HTMLOptionElement;

      group.value = el.id;
      group.text = el.name;

      groups.appendChild(group);
    });

    this.inputWrapper.appendChild(groups);

    console.log(groups.value);
  }

  public getMenu() {
    return this.menuBurger;
  }
}
