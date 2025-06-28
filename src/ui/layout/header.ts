import { ElementCreator } from "../../core/utils/element-creator";
import { addContact } from "../components/add-contact/add-contact";
import button from "../components/blue-button/blue-button";
import { contactsBook } from "../components/contacts-book/contacts-book";

export const Header = () => {
  const app = document.getElementById("app");
  const header = ElementCreator.createElement("header", "header");
  const wrapper = ElementCreator.createElement("div", "header__btns");

  const btn = button("Группы", "header__btns-group menu-toggle");

  wrapper.appendChild(addContact);
  wrapper.appendChild(btn);

  header.appendChild(contactsBook);
  header.appendChild(wrapper);

  let isOpen = false;

  const toggleMenu = () => {
    //const overlay = document.getElementById("app-overlay")!;
    const sidebar = document.getElementById("burger-menu")!;
    if (sidebar.classList.contains("burger-menu-opened")) {
      isOpen = true;
    } else {
      isOpen = false;
    }
    console.log(sidebar);
    isOpen = !isOpen;
    sidebar.classList.toggle("burger-menu-opened", isOpen);
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
  //   const overlay = ElementCreator.createElement(
  //     "div",
  //     "app-overlay"
  //   ) as HTMLElement;
  btn.addEventListener("click", toggleMenu);
  //overlay.addEventListener("click", toggleMenu);

  return header;
};
