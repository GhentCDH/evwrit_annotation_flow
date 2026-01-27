#!/bin/sh
set -e

# Generate runtime config from environment variables
cat > /srv/config.json <<EOF
{
  "KEYCLOAK_URL": "${VITE_KEYCLOAK_URL:-}",
  "KEYCLOAK_REALM": "${VITE_KEYCLOAK_REALM:-}",
  "KEYCLOAK_CLIENT_ID": "${VITE_KEYCLOAK_CLIENT_ID:-}"
}
EOF

echo "Generated /srv/config.json with runtime configuration"

# Start Caddy
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile