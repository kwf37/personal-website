import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), mdx()],
  output: "server",
  adapter: vercel()
});