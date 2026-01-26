import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type Keycloak from "keycloak-js";
import type { KeycloakProfile, KeycloakTokenParsed } from "keycloak-js";

interface UserProfile extends KeycloakProfile {
  roles?: string[];
}

export const useAuthStore = defineStore("auth", () => {
  const keycloak = ref<Keycloak | null>(null);
  const isAuthenticated = ref(false);
  const user = ref<UserProfile | null>(null);
  const token = ref<string | undefined>(undefined);
  const isInitialized = ref(false);

  const userRoles = computed(() => {
    if (!keycloak.value?.tokenParsed) return [];
    const parsed = keycloak.value.tokenParsed as KeycloakTokenParsed & {
      realm_access?: { roles: string[] };
    };
    return parsed.realm_access?.roles ?? [];
  });

  const hasRole = (role: string): boolean => {
    return userRoles.value.includes(role);
  };

  const hasAnyRole = (roles: string[]): boolean => {
    return roles.some((role) => userRoles.value.includes(role));
  };

  const setKeycloak = (kc: Keycloak) => {
    keycloak.value = kc;
  };

  const setAuthenticated = (authenticated: boolean) => {
    isAuthenticated.value = authenticated;
  };

  const setToken = (newToken: string | undefined) => {
    token.value = newToken;
  };

  const setUser = (profile: UserProfile | null) => {
    user.value = profile;
  };

  const setInitialized = (initialized: boolean) => {
    isInitialized.value = initialized;
  };

  const login = async () => {
    if (keycloak.value) {
      await keycloak.value.login();
    }
  };

  const logout = async () => {
    if (keycloak.value) {
      await keycloak.value.logout();
    }
  };

  const updateToken = async (minValidity = 30): Promise<boolean> => {
    if (!keycloak.value) return false;

    try {
      const refreshed = await keycloak.value.updateToken(minValidity);
      if (refreshed) {
        setToken(keycloak.value.token);
      }
      return true;
    } catch {
      setAuthenticated(false);
      setUser(null);
      setToken(undefined);
      return false;
    }
  };

  const getToken = async (): Promise<string | undefined> => {
    await updateToken();
    return token.value;
  };

  return {
    keycloak,
    isAuthenticated,
    isInitialized,
    user,
    token,
    userRoles,
    hasRole,
    hasAnyRole,
    setKeycloak,
    setAuthenticated,
    setToken,
    setUser,
    setInitialized,
    login,
    logout,
    updateToken,
    getToken,
  };
});
