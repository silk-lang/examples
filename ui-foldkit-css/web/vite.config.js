import { defineConfig } from "vite";
import silk from "@silkui/vite";
import { provided } from "@silkui/foldkit/apis";

// `silk task dev` runs `vite` and `silk task build` runs `vite build`: no host to name here.
export default defineConfig({
  plugins: [
    silk({
      entry: "src/entry.ts",
      // The document and the DOM classes are there at run time.
      allow: provided,
    }),
  ],
});
