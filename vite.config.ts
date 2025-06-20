import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

const isLocalDev = process.env.DEV === "local";

if (isLocalDev) {
  console.warn("Running in local dev mode");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["docs/**"],
  resolve: {
    alias: {
      ...(isLocalDev
        ? {
            // This can be usefull to test the local version of the vue component annotated text before release
            // to use this, you need to symlink the vue_component_annotated_text root folder to the root of this project
            "@ghentcdh/vue-component-annotated-text/style.css": fileURLToPath(
              new URL("./link/]vue_component_annotated_text/dist/style.css", import.meta.url),
            ),
            "@ghentcdh/vue-component-annotated-text": fileURLToPath(
              new URL("./link/vue_component_annotated_text/src/index.ts", import.meta.url),
            ),
          }
        : {}),
      "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
  server: {
    proxy: {
      // string shorthand
      // with options
      "/text": {
        target: "http://localhost:8080",
        // target: "https://dev.evwrit.ugent.be",
        changeOrigin: true,
      },
      "/annotation": {
        target: "http://localhost:8080",
        // target: "https://dev.evwrit.ugent.be",
        changeOrigin: true,
      },
      "/health": {
        target: "http://localhost:8080",
        // target: "https://dev.evwrit.ugent.be",
        changeOrigin: true,
      },
    },
  },
});
