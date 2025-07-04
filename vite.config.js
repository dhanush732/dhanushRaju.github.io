import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dhanushRaju.github.io/", // Set base for GitHub Pages
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
});
