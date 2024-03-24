/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default getViteConfig({
  plugins: [solidPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["node_modules/@testing-library/jest-dom/vitest"],
    include: ["src/**/*.test.tsx"],
  },
});
