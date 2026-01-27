export interface RuntimeConfig {
  KEYCLOAK_URL: string;
  KEYCLOAK_REALM: string;
  KEYCLOAK_CLIENT_ID: string;
}

let cachedConfig: RuntimeConfig | null = null;

export async function loadRuntimeConfig(): Promise<RuntimeConfig> {
  if (cachedConfig) {
    return cachedConfig;
  }

  // In development, use Vite's env variables
  if (import.meta.env.DEV) {
    cachedConfig = {
      KEYCLOAK_URL: import.meta.env.VITE_KEYCLOAK_URL || "",
      KEYCLOAK_REALM: import.meta.env.VITE_KEYCLOAK_REALM || "",
      KEYCLOAK_CLIENT_ID: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || "",
    };
    return cachedConfig;
  }

  // In production, fetch from config.json
  try {
    const response = await fetch("/config.json");
    if (!response.ok) {
      throw new Error(`Failed to load config: ${response.status}`);
    }
    cachedConfig = await response.json();
    return cachedConfig!;
  } catch (error) {
    console.error("Failed to load runtime config:", error);
    // Fallback to build-time env vars if config.json fails
    cachedConfig = {
      KEYCLOAK_URL: import.meta.env.VITE_KEYCLOAK_URL || "",
      KEYCLOAK_REALM: import.meta.env.VITE_KEYCLOAK_REALM || "",
      KEYCLOAK_CLIENT_ID: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || "",
    };
    return cachedConfig;
  }
}

export function getRuntimeConfig(): RuntimeConfig {
  if (!cachedConfig) {
    throw new Error(
      "Runtime config not loaded. Call loadRuntimeConfig() first.",
    );
  }
  return cachedConfig;
}
