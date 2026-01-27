import type { App } from "vue";
import keycloak from "../config/keycloak";
import { useAuthStore } from "../stores/auth.store";

export interface KeycloakPluginOptions {
  onInitError?: (error: unknown) => void;
}

export async function initKeycloak(
  app: App,
  options: KeycloakPluginOptions = {},
): Promise<boolean> {
  const authStore = useAuthStore();

  authStore.setKeycloak(keycloak);

  try {
    const authenticated = await keycloak.init({
      onLoad: "login-required",
      checkLoginIframe: false,
      pkceMethod: "S256",
    });

    authStore.setAuthenticated(authenticated);
    authStore.setInitialized(true);

    if (authenticated) {
      authStore.setToken(keycloak.token);

      try {
        const profile = await keycloak.loadUserProfile();
        console.log(profile);
        authStore.setUser(profile);
      } catch (profileError) {
        console.warn("Failed to load user profile:", profileError);
      }

      keycloak.onTokenExpired = () => {
        authStore.updateToken(30).catch(() => {
          console.warn("Token refresh failed, redirecting to login");
          keycloak.login();
        });
      };

      keycloak.onAuthRefreshError = () => {
        console.warn("Auth refresh error, redirecting to login");
        keycloak.login();
      };
    }

    app.config.globalProperties.$keycloak = keycloak;

    return authenticated;
  } catch (error) {
    console.error("Keycloak initialization failed:", error);
    authStore.setInitialized(true);
    options.onInitError?.(error);
    return false;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $keycloak: typeof keycloak;
  }
}
