import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

let alias = { "@": fileURLToPath(new URL("./src", import.meta.url)) };

if (process.env.DEV === "local") {
  // This can be usefull to test the local version of the vue component annotated text before release
  // to use this, you need to symlink the vue_component_annotated_text root folder to the root of this project
  alias = {
    ...alias,
    "@ghentcdh/vue-component-annotated-text/style.css": fileURLToPath(
      new URL("./vue_component_annotated_text/dist/style.css", import.meta.url),
    ),
    "@ghentcdh/vue-component-annotated-text": fileURLToPath(
      new URL("./vue_component_annotated_text/src/index.ts", import.meta.url),
    ),
  };
  console.warn("WARN using the local vue component annotated text");
}
console.log(alias);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  server: {
    proxy: {
      // string shorthand
      // with options
      "/text": {
        target: "https://dev.evwrit.ugent.be",
        changeOrigin: true,
      },
    },
  },
});
