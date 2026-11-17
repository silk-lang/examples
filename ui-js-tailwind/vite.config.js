import { defineConfig } from "vite";
import silk from "@silkui/vite";
import tailwind from "@tailwindcss/vite";

// `silk task dev` runs `vite` and `silk task build` runs `vite build`: no host to name here.
export default defineConfig({ plugins: [tailwind(),silk({ entry: "js/main.ts" })] });
