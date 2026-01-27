import "@ghentcdh/annotated-text/annotated-text.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./styles/index.scss";
import router from "./router";
import { initKeycloak } from "./plugins/keycloak";
import { loadRuntimeConfig } from "./config/runtime-config";

const app = createApp(App);

app.use(createPinia()).use(router);

// Load runtime config first, then initialize Keycloak
loadRuntimeConfig().then(() => {
  initKeycloak(app).then(() => {
    app.mount("#app");
  });
});
