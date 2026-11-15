import { createBox, createText, mount } from "@silkui/core";

const label = createText("Clicked 0 times");
const button = createBox(
  { paddingTop: 12, paddingBottom: 12, paddingLeft: 20, paddingRight: 20, borderRadius: 10, backgroundColor: "rgb(37, 99, 235)", color: "white", fontSize: 18 },
  label,
);
button.tabIndex = 0;
button.look("hover").set({ backgroundColor: "rgb(59, 130, 246)" });

let clicks = 0;
button.addEventListener("click", () => {
  clicks += 1;
  label.data = `Clicked ${clicks} time${clicks === 1 ? "" : "s"}`;
});

mount(
  createBox(
    { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(250, 250, 250)", fontFamily: "sans-serif" },
    button,
  ),
);
