export class ElementCreator {
  static createElement(type: string, className: string) {
    const el = document.createElement(type);
    el.setAttribute("class", className);
    return el;
  }
}
