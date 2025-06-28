import { ElementCreator } from "../../../core/utils/element-creator";

export class InputField {
  private inputField;

  constructor() {
    this.inputField = ElementCreator.createElement(
      "input",
      "input-field"
    ) as HTMLInputElement;
    this.inputField.placeholder = "Введите название";
    this.inputField.addEventListener("input", (e) => {
      if (e.type === "InputEvent") {
        const event = e as InputEvent;

        event.inputType === "insertText"
          ? (this.inputField.value = this.inputField.value + event.data)
          : (this.inputField.value = this.inputField.value.substring(
              0,
              this.inputField.value.length - 1
            ));
      }
      console.log(this.inputField.value);
    });
  }

  public getInputField() {
    return this.inputField;
  }

  public setKey(id: string) {
    this.inputField.id = id;
  }

  public getKey() {
    return this.inputField.id;
  }
}
