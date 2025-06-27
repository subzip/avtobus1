import { ElementCreator } from "../../core/utils/element-creator";

export class HomePage {
  private main;
  private textMessage;
  constructor() {
    this.main = ElementCreator.createElement("main", "main");
    this.textMessage = ElementCreator.createElement(
      "span",
      "main__message-text"
    );
    this.textMessage.innerHTML = "Список контактов пуст";
    this.main.appendChild(this.textMessage);
  }

  public getElement() {
    return this.main;
  }
}
