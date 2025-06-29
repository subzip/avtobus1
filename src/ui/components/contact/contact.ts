import { ElementCreator } from "../../../core/utils/element-creator";
import { deleteButton } from "../dekete-contact/delete-contact";
import { modifyButton } from "../modify-contact/modify-contact";

export class Contact {
  private contact;
  private name;
  private number;

  constructor(nameF: string, numberF: string) {
    this.name = nameF;
    this.number = numberF;
    this.contact = ElementCreator.createElement(
      "div",
      "contacts-list__dropdown-contacts__contact"
    );
    this.name = "Test Test Test";
    this.number = "+7 (434) 434-43-43";
    const name = ElementCreator.createElement(
      "span",
      "contacts-list__dropdown-contacts__contact-name"
    );
    const number = ElementCreator.createElement(
      "span",
      "contacts-list__dropdown-contacts__contact-number"
    );

    const deleteBtn = deleteButton();
    const modifyBtn = modifyButton();

    const numberWrapper = ElementCreator.createElement(
      "div",
      "contacts-list__dropdown-contacts__contact-number-wrapper"
    );

    const btnsWrapper = ElementCreator.createElement(
      "div",
      "contacts-list__dropdown-contacts__contact-number-btns"
    );

    btnsWrapper.appendChild(modifyBtn);
    btnsWrapper.appendChild(deleteBtn);

    numberWrapper.appendChild(number);
    numberWrapper.appendChild(btnsWrapper);

    name.innerHTML = nameF;
    number.innerHTML = numberF;

    this.contact.appendChild(name);
    this.contact.appendChild(numberWrapper);
  }

  public getContact() {
    return this.contact;
  }
}
