import { ElementCreator } from "../../../core/utils/element-creator";
import addContactSVG from "../../../assets/img/header/add-contact.svg";

const addContact = ElementCreator.createElement("div", "add-contact");
const text = ElementCreator.createElement("span", "add-contact__text");
const img = ElementCreator.createElement(
  "img",
  "add-contact__img"
) as HTMLImageElement;

text.innerHTML = "Добавить контакт";
img.src = addContactSVG;

addContact.appendChild(text);
addContact.appendChild(img);

export { addContact };
