import { ElementCreator } from "../../../core/utils/element-creator";

const button = (text: string, className: string) => {
  const button = ElementCreator.createElement(
    "div",
    `btn-default ${className}`
  );

  button.innerHTML = text;

  return button;
};

export default button;
