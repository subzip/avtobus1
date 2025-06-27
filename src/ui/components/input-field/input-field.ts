import { ElementCreator } from "../../../core/utils/element-creator";

export class InputField {
  private inputField;

  constructor() {
    this.inputField = ElementCreator.createElement(
      "input",
      "input-field"
    ) as HTMLInputElement;
    this.inputField.placeholder = "Введите название";
  }

  public getInputField() {
    return this.inputField;
  }
}
