#!/usr/bin/env bash
# Issue a certificate (Certbot in Docker). Container nginx must be up on port 80.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

DOMAIN="${CERTBOT_DOMAIN:-beiruttobeirut.uroojperfumes.com}"
EMAIL="${CERTBOT_EMAIL:?Set CERTBOT_EMAIL (e.g. export CERTBOT_EMAIL=you@example.com)}"

mkdir -p certbot/www certbot/conf

docker compose run --rm certbot certonly \
  --webroot -w /var/www/certbot \
  -d "$DOMAIN" \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email

"$ROOT/deploy/enable-docker-ssl.sh"
