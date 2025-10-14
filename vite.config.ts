import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["docs/**"],
  resolve: {
    // preserveSymlinks: true,  // Important for pnpm links
    alias: {
      "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["@ghentcdh/annotated-text"], // Add all your linked packages here
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
