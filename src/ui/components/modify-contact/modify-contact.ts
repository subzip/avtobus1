import { ElementCreator } from "../../../core/utils/element-creator";
import modifySVG from "../../../assets/img/menu/modify-button.svg";

export const modifyButton = () => {
  const modifyBtn = ElementCreator.createElement(
    "div",
    "contacts-list__dropdown-modify modify-contact"
  );
  const modifyLogo = ElementCreator.createElement(
    "img",
    "contacts-list__dropdown-modify-logo"
  ) as HTMLImageElement;

  modifyLogo.src = modifySVG;
  modifyBtn.appendChild(modifyLogo);

  return modifyBtn;
};
