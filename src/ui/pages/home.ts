import { StorageService } from "../../core/services/storage.service";
import { ElementCreator } from "../../core/utils/element-creator";
import { ContactDropdown } from "../components/contact-dropdown/contact-dropdown";

export class HomePage {
  private main;
  private contactsList;
  private textMessage;
  constructor() {
    this.main = ElementCreator.createElement("main", "main");
    this.textMessage = ElementCreator.createElement(
      "span",
      "main__message-text"
    );
    this.textMessage.innerHTML = "Список контактов пуст";
    //this.main.appendChild(this.textMessage);

    this.contactsList = ElementCreator.createElement("div", "contacts-list");

    this.main.appendChild(this.contactsList);

    this.loadContacts();
  }

  public getElement() {
    return this.main;
  }

  loadContacts() {
    const data = StorageService.loadData();

    data.groups.map((el) => {
      const contact = new ContactDropdown(el.name, el.id);
      this.contactsList.appendChild(contact.getContactDropdown());
    });
  }
}
