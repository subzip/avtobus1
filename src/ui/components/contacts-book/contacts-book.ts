import { ElementCreator } from "../../../core/utils/element-creator";
import logoSVG from "../../../assets/img/header/contact-book-logo.svg";

const contactsBook = ElementCreator.createElement("div", "contacts-book");
const logo = ElementCreator.createElement(
  "img",
  "contacts-book__logo"
) as HTMLImageElement;
const text = ElementCreator.createElement("span", "contacts-book__text");

logo.src = logoSVG;
text.innerHTML = "Книга контактов";

contactsBook.appendChild(logo);
contactsBook.appendChild(text);

export { contactsBook };
