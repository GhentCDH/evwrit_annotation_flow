import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  base: `annotation_flow/`,
  plugins: [vue()],
  resolve: {
    alias: {
      "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
  server: {
    // proxy: {
    //   // string shorthand
    //   // with options
    //   "/text": {
    //     target: "https://dev.evwrit.ugent.be",
    //     changeOrigin: true,
    //   },
    //   "/annotation": {
    //     target: "https://dev.evwrit.ugent.be",
    //     changeOrigin: true,
    //   },
    // },
  },
});
