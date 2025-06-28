import { ElementCreator } from "../../../core/utils/element-creator";
import deleteSVG from "../../../assets/img/menu/delete-button.svg";

export const deleteButton = () => {
  const deleteBtn = ElementCreator.createElement(
    "div",
    "burger-menu__delete-contact delete-contact"
  );
  const deleteLogo = ElementCreator.createElement(
    "img",
    "burger-menu__delete-contact-logo"
  ) as HTMLImageElement;

  deleteLogo.src = deleteSVG;
  deleteBtn.appendChild(deleteLogo);

  return deleteBtn;
};
