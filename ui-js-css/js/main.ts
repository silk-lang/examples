import "./app.css";
import { createBox, createText, mount, type Node, type Text } from "@silkui/core";

let count = 0;
let dark = false;

function box(className: string, ...children: Node[]) {
  const node = createBox({}, ...children);
  node.className = className;
  return node;
}

function button(className: string, label: Text, onClick: () => void) {
  const node = box(className, label);
  node.tabIndex = 0;
  node.setAttribute("role", "button");
  node.addEventListener("click", onClick);
  return node;
}

const shown = createText("0");
const themeLabel = createText("Dark theme");

function render() {
  shown.data = `${count}`;
  themeLabel.data = dark ? "Light theme" : "Dark theme";
  page.className = dark ? "page dark" : "page";
}

const page = box(
  "page",
  box(
    "card",
    box("title", createText("Counter")),
    box("count", shown),
    box(
      "actions",
      button("button", createText("-"), () => { count -= 1; render(); }),
      button("button primary", createText("+"), () => { count += 1; render(); }),
      button("button", createText("Reset"), () => { count = 0; render(); }),
    ),
    button("button", themeLabel, () => { dark = !dark; render(); }),
  ),
);
mount(page);
