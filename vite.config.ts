import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiTarget = env.VITE_API_URL || "http://localhost:8080";

  return {
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
        "/text": {
          target: apiTarget,
          changeOrigin: true,
        },
        "/annotation": {
          target: apiTarget,
          changeOrigin: true,
        },
        "/health": {
          target: apiTarget,
          changeOrigin: true,
        },
      },
    },
  };
});
