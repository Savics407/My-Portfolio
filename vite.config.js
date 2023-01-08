import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from "./tailwind.config.cjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
