import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: `annotation_flow/`,
    plugins: [vue()],
    assetsInclude: ["docs/**"],
    resolve: {
      alias: {
        "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
      },
    },
  };
});
