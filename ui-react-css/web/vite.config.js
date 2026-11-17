import { defineConfig } from "vite";
import silk from "@silkui/vite";
import react from "@silkui/react/vite";

// `silk task dev` runs `vite` and `silk task build` runs `vite build`: no host to name here.
export default defineConfig({ plugins: [silk({ entry: "src/main.tsx" }), react()] });
