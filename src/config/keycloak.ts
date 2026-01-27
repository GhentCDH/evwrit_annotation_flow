import Keycloak from "keycloak-js";
import { getRuntimeConfig } from "./runtime-config";

let keycloak: Keycloak | null = null;

export function createKeycloak(): Keycloak {
  if (keycloak) {
    return keycloak;
  }

  const config = getRuntimeConfig();

  keycloak = new Keycloak({
    url: config.KEYCLOAK_URL,
    realm: config.KEYCLOAK_REALM,
    clientId: config.KEYCLOAK_CLIENT_ID,
  });

  return keycloak;
}

export function getKeycloak(): Keycloak {
  if (!keycloak) {
    throw new Error("Keycloak not initialized. Call createKeycloak() first.");
  }
  return keycloak;
}
