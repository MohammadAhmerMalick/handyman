#!/usr/bin/env bash
# Turn on HTTPS in container nginx after certbot/conf contains a live cert.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

DOMAIN="${CERTBOT_DOMAIN:-beiruttobeirut.uroojperfumes.com}"
LIVE="$ROOT/certbot/conf/live/$DOMAIN"

if [[ ! -f "$LIVE/fullchain.pem" || ! -f "$LIVE/privkey.pem" ]]; then
  echo "Missing certificate under certbot/conf/live/$DOMAIN/" >&2
  exit 1
fi

cp nginx/conf.d/20-ssl.conf.example nginx/conf.d/20-ssl.conf
cp nginx/conf.d/10-http-redirect.conf nginx/conf.d/10-http.conf

docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload

echo "HTTPS enabled on container nginx (ports 80 redirect + 443 proxy)."
