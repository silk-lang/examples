import "./app.css";
import { createBox, createText, mount } from "@silkui/core";

const label = createText("Clicked 0 times");
const button = createBox({}, label);
button.className = "counter-button rounded-lg bg-blue-600 px-5 py-3 text-lg text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-blue-500";
button.tabIndex = 0;
button.setAttribute("role", "button");
let clicks = 0;
button.addEventListener("click", () => {
  clicks += 1;
  label.data = `Clicked ${clicks} time${clicks === 1 ? "" : "s"}`;
});

const page = createBox({}, button);
page.className = "absolute inset-0 flex items-center justify-center bg-slate-50 font-sans";
mount(page);
