#!/usr/bin/env bash
# Schedule on the VPS (cron): renew certs and reload container nginx.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

docker compose run --rm certbot renew --quiet --webroot -w /var/www/certbot
docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
