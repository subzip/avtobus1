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

let isOpen = false;

const toggleMenu = () => {
  //const overlay = document.getElementById("app-overlay")!;
  const sidebar = document.getElementById("add-contact-menu")!;
  if (sidebar.classList.contains("add-contact-menu-opened")) {
    isOpen = true;
  } else {
    isOpen = false;
  }
  console.log(sidebar);
  isOpen = !isOpen;
  sidebar.classList.toggle("add-contact-menu-opened", isOpen);
  //overlay.classList.toggle("active", isOpen);

  // Плавная анимация через requestAnimationFrame
  requestAnimationFrame(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden";
    }
  });
};

addContact.addEventListener("click", toggleMenu);

export { addContact };
