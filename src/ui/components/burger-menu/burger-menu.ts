import { ElementCreator } from "../../../core/utils/element-creator";
import button from "../blue-button/blue-button";
import closeButtonSVG from "../../../assets/img/menu/close-button.svg";
import { InputField } from "../input-field/input-field";

export class MenuBurger {
  private menuBurger;
  private titleWrapper;
  private title;
  private closeBtn;
  private inputWrapper;
  private inputs: Array<HTMLInputElement>;
  private btnsWrapper;
  private addbtn;
  private savebtn;

  constructor() {
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
    this.closeBtn.addEventListener("click", () => this.clearContacts());

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

    this.titleWrapper.appendChild(this.title);
    this.titleWrapper.appendChild(this.closeBtn);
    this.btnsWrapper.appendChild(this.addbtn);
    this.btnsWrapper.appendChild(this.savebtn);

    this.menuBurger.appendChild(this.titleWrapper);
    this.menuBurger.appendChild(this.inputWrapper);
    this.menuBurger.appendChild(this.btnsWrapper);
  }

  public addContact() {
    const input = new InputField();
    this.inputs.push(input.getInputField());

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

  public getMenu() {
    return this.menuBurger;
  }
}

// const menuBurger = document.createElement("aside");
// menuBurger.setAttribute("id", "burger-menu");
// menuBurger.setAttribute("class", "burger-menu burger-menu-closed");

// const titleWrapper = ElementCreator.createElement(
//   "div",
//   "burger-menu__title-wrapper"
// );
// const title = ElementCreator.createElement("span", "burger-menu__title");
// const closeBtn = ElementCreator.createElement(
//   "img",
//   "burger-menu__btn-close"
// ) as HTMLImageElement;

// closeBtn.src = closeButtonSVG;
// title.innerHTML = "Группы контактов";

// const inputWrapper = ElementCreator.createElement(
//   "div",
//   "burger-menu__contacts-wrapper"
// );
// const input = new InputField();
// inputWrapper.appendChild(input.getInputField());

// const btnsWrapper = ElementCreator.createElement(
//   "div",
//   "burger-menu__btns-wrapper"
// );
// const addbtn = button("Добавить", "burger-menu__btn-add");
// const savebtn = button("Сохранить", "burger-menu__btn-save");

// titleWrapper.appendChild(title);
// titleWrapper.appendChild(closeBtn);
// btnsWrapper.appendChild(addbtn);
// btnsWrapper.appendChild(savebtn);

// menuBurger.appendChild(titleWrapper);
// menuBurger.appendChild(inputWrapper);
// menuBurger.appendChild(btnsWrapper);

// export { menuBurger };
