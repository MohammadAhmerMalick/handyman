#!/usr/bin/env bash
# Start the Docker stack (HTTP), obtain a Let's Encrypt cert, and enable HTTPS.
#
# Usage:
#   CERTBOT_EMAIL=you@example.com ./deploy/setup-ssl.sh
#   CERTBOT_EMAIL=you@example.com CERTBOT_DOMAIN=example.com ./deploy/setup-ssl.sh
#
# Options:
#   --skip-build   docker compose up -d (no image rebuild)
#   --cert-only    Skip compose; run certbot + enable-docker-ssl only (stack must be up)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

DOMAIN="${CERTBOT_DOMAIN:-beiruttobeirut.uroojperfumes.com}"
SKIP_BUILD=0
CERT_ONLY=0

usage() {
  sed -n '2,10p' "$0" | sed 's/^# \?//'
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-build) SKIP_BUILD=1 ;;
    --cert-only) CERT_ONLY=1 ;;
    -h | --help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
  shift
done

if [[ -z "${CERTBOT_EMAIL:-}" ]]; then
  echo "Set CERTBOT_EMAIL (Let's Encrypt expiry notices)." >&2
  echo "Example: CERTBOT_EMAIL=you@example.com $0" >&2
  exit 1
fi

mkdir -p certbot/www certbot/conf

if [[ "$CERT_ONLY" != 1 ]]; then
  if [[ "$SKIP_BUILD" == 1 ]]; then
    docker compose up -d
  else
    docker compose up -d --build
  fi

  echo "Waiting for nginx on http://127.0.0.1/ ..."
  ready=0
  for _ in $(seq 1 45); do
    if curl -sf -o /dev/null --connect-timeout 2 http://127.0.0.1/; then
      ready=1
      break
    fi
    sleep 2
  done
  if [[ "$ready" != 1 ]]; then
    echo "Nginx did not respond on port 80. Check: docker compose ps" >&2
    exit 1
  fi

  mkdir -p certbot/www/.well-known/acme-challenge
  echo ok >certbot/www/.well-known/acme-challenge/ping
  if ! curl -sf "http://127.0.0.1/.well-known/acme-challenge/ping" | grep -q ok; then
    echo "Warning: ACME webroot check on localhost failed (Certbot may still work via public DNS)." >&2
  fi
fi

export CERTBOT_DOMAIN="$DOMAIN"
"$ROOT/deploy/certbot-issue.sh"

echo ""
echo "Done. Quick check:"
curl -sI "https://$DOMAIN/" | head -5 || echo "(If this fails, wait for DNS or open https://$DOMAIN/ in a browser.)"
