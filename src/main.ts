import "./styles/style.scss";
import { app } from "./constants/constants";
import { Header } from "./ui/layout/header";
import { HomePage } from "./ui/pages/home";
import { MenuBurger } from "./ui/components/burger-menu/burger-menu";
import { ElementCreator } from "./core/utils/element-creator";

const header = Header();
const main = new HomePage();
const menuBurger = new MenuBurger();

app!.appendChild(menuBurger.getMenu());
app?.appendChild(header);
app?.appendChild(main.getElement());

// const overlay = ElementCreator.createElement("div", "app-overlay");
// overlay.setAttribute("id", "app-overlay");
// app?.appendChild(overlay);
