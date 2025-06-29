import { ElementCreator } from "../../../core/utils/element-creator";
import arrowSVG from "../../../assets/img/menu/dropdown-arrow.svg";
import { Contact } from "../contact/contact";
import { StorageService } from "../../../core/services/storage.service";

export class ContactDropdown {
  private contact;
  private title;
  private contactsWrapper;

  constructor(titleF: string, id: string) {
    this.contact = ElementCreator.createElement(
      "div",
      "contacts-list__dropdown"
    );
    this.contact.id = id;
    this.contactsWrapper = ElementCreator.createElement(
      "div",
      "contacts-list__dropdown-contacts-wrapper"
    );

    const titleWrapper = ElementCreator.createElement(
      "div",
      "contacts-list__dropdown-title-wrapper"
    );

    this.title = titleF;
    const title = ElementCreator.createElement(
      "span",
      "contacts-list__dropdown-title"
    );
    title.innerHTML = this.title;
    const arrow = ElementCreator.createElement(
      "img",
      "contacts-list__dropdown-logo"
    ) as HTMLImageElement;
    arrow.src = arrowSVG;

    titleWrapper.addEventListener("click", () => {
      arrow.classList.toggle("dropdown-opened");
      this.contact.classList.toggle("dropdown-visible");
    });

    titleWrapper.appendChild(title);
    titleWrapper.appendChild(arrow);

    this.loadContacts();

    this.contact.appendChild(titleWrapper);
    this.contact.appendChild(this.contactsWrapper);
  }

  public getContactDropdown() {
    return this.contact;
  }

  loadContacts() {
    const data = StorageService.loadData();

    data.contacts.map((el) => {
      if (data.groups.find((elem) => elem.id === el.groupId)) {
        const contact = new Contact(el.name, el.phone);
        this.contactsWrapper.appendChild(contact.getContact());
      }
    });
  }
}
