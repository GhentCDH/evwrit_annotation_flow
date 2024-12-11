import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";

console.log(process.env);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return {
    base: env.base ?? `annotation_flow/`,
    plugins: [vue()],
    assetsInclude: ["docs/**"],
    resolve: {
      alias: {
        "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
      },
    },
  };
});
