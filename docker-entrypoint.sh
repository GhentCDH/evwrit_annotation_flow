#!/bin/sh
set -e

# Generate runtime config from environment variables
cat > /srv/config.json <<EOF
{
  "KEYCLOAK_URL": "${KEYCLOAK_URL:-}",
  "KEYCLOAK_REALM": "${KEYCLOAK_REALM:-}",
  "KEYCLOAK_CLIENT_ID": "${KEYCLOAK_CLIENT_ID:-}"
  "EVWRIT_BASE_URL": "${EVWRIT_BASE_URL:-}"
}
EOF

echo "Generated /srv/config.json with runtime configuration"

# Start Caddy
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
