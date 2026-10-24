#!/usr/bin/env bash
# Pull code and redeploy the app with minimal downtime.
#
# Builds the new nextjs image while the old container still serves traffic, then
# swaps containers (usually a few seconds; nginx stays up the whole time).
#
# Usage:
#   ./deploy/redeploy.sh
#   ./deploy/redeploy.sh --no-pull
#
# Do NOT run setup-ssl.sh on routine deploys — SSL is already configured.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PULL=1

while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-pull) PULL=0 ;;
    -h | --help)
      sed -n '2,11p' "$0" | sed 's/^# \?//'
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      exit 1
      ;;
  esac
  shift
done

if [[ "$PULL" == 1 ]]; then
  git pull
fi

echo "==> Building nextjs (current site keeps running during this step)..."
docker compose build nextjs

echo "==> Swapping nextjs container..."
docker compose up -d --no-build --force-recreate --wait nextjs

if docker compose exec nginx nginx -t 2>/dev/null; then
  docker compose exec nginx nginx -s reload
fi

echo "==> Deploy finished. nginx stayed on ports 80/443 throughout the build."
