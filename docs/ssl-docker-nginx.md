# HTTPS with one nginx (Docker)

Single **nginx** container handles the public site, caching, **HTTPS**, and Let’s Encrypt webroot challenges. **Certbot** runs in Docker for issue/renew. No nginx install on the VPS host.

```text
Client → Docker nginx :443 (TLS) → nextjs:3000
Client → Docker nginx :80 (ACME, then 301 → HTTPS)
Certbot (Docker) → certbot/conf (mounted read-only into nginx)
```

## Prerequisites

- DNS **A record** → server IP (`dig +short beiruttobeirut.uroojperfumes.com`).
- Host ports **80** and **443** free (stop any other web server on the VPS).
- Firewall allows **80** and **443**.

## Checklist (vs manual Certbot tutorials)

Many tutorials ask you to: edit nginx for port 80 only → run certbot → edit nginx again for 443 → restart nginx → repeat on renew. **This repo bakes that into two phases and one script:**

| Phase | What runs | You edit nginx by hand? |
| --- | --- | --- |
| **A — Bootstrap** | `docker compose up` | **No** — `10-http.conf` already proxies the site and serves ACME under `/.well-known/acme-challenge/` |
| **B — Go live on HTTPS** | `./deploy/certbot-issue.sh` | **No** — script gets the cert, copies `20-ssl.conf`, swaps HTTP to redirect, **reloads** nginx (no full stack restart) |

You only **restart/recreate** containers when you change the app image or `docker-compose.yml`.

### One command (recommended)

After DNS points at the server and ports **80/443** are free:

```bash
git pull
chmod +x deploy/setup-ssl.sh   # once
CERTBOT_EMAIL=you@example.com ./deploy/setup-ssl.sh
```

That script runs **`docker compose up -d --build`**, waits for nginx, checks the ACME webroot on localhost, then **`certbot-issue.sh`** (certificate + HTTPS config + nginx reload).

Useful flags:

- `./deploy/setup-ssl.sh --skip-build` — stack rebuild skipped; still issues/enables SSL if needed.
- `./deploy/setup-ssl.sh --cert-only` — stack already up; only Certbot + enable HTTPS.

### On the VPS, step by step (same flow, manual)

1. **DNS** — A record for `beiruttobeirut.uroojperfumes.com` → your server IP. Wait until `dig +short beiruttobeirut.uroojperfumes.com` returns that IP.
2. **Free ports 80/443** — If you installed host nginx earlier: `sudo systemctl stop nginx` (and disable if you will not use it).
3. **Pull code** — `git pull` in the project directory on the server.
4. **All-in-one** — `CERTBOT_EMAIL=you@example.com ./deploy/setup-ssl.sh`
5. **Renewal (once)** — Add cron for `deploy/renew-certbot.sh` (below).

If Certbot fails, fix DNS/firewall/ACME (see Troubleshooting) **before** re-running. Do not create `20-ssl.conf` manually until a cert exists under `certbot/conf/live/...`.

## 1. Start the stack (HTTP only)

```bash
docker compose up -d --build
curl -sI http://beiruttobeirut.uroojperfumes.com/ | head
```

Nginx config lives under `nginx/conf.d/` and `nginx/snippets/`. Before SSL, `10-http.conf` proxies on port 80 and serves `/.well-known/acme-challenge/` from `certbot/www`.

Optional check:

```bash
mkdir -p certbot/www/.well-known/acme-challenge
echo ok > certbot/www/.well-known/acme-challenge/ping
curl http://beiruttobeirut.uroojperfumes.com/.well-known/acme-challenge/ping
```

## 2. Issue certificate and enable HTTPS

```bash
export CERTBOT_EMAIL=you@example.com
chmod +x deploy/certbot-issue.sh deploy/enable-docker-ssl.sh deploy/renew-certbot.sh
./deploy/certbot-issue.sh
```

`certbot-issue.sh` runs Certbot, then `enable-docker-ssl.sh`, which:

1. Copies `nginx/conf.d/20-ssl.conf.example` → `nginx/conf.d/20-ssl.conf` (gitignored).
2. Replaces `10-http.conf` with the redirect variant (keeps ACME on port 80).
3. Reloads container nginx.

Test:

```bash
curl -sI https://beiruttobeirut.uroojperfumes.com/ | head
```

## 3. Renewal (cron on VPS)

```bash
sudo crontab -e
```

```cron
15 3 * * * /opt/handyman/deploy/renew-certbot.sh >> /var/log/handyman-certbot-renew.log 2>&1
```

Use your real project path instead of `/opt/handyman`.

## Repo layout

| Path | Role |
| --- | --- |
| `docker-compose.yml` | Publishes **80** and **443** on nginx |
| `nginx/conf.d/10-http.conf` | Bootstrap HTTP (proxy); overwritten when SSL is enabled |
| `nginx/conf.d/10-http-redirect.conf` | Source for HTTP → HTTPS after SSL |
| `nginx/conf.d/20-ssl.conf.example` | Template for HTTPS server |
| `nginx/conf.d/20-ssl.conf` | Active HTTPS config (gitignored; created on server) |
| `nginx/snippets/proxy-nextjs.conf` | Shared proxy/cache locations |
| `certbot/www/`, `certbot/conf/` | Webroot + certificates |
| `deploy/setup-ssl.sh` | **One shot:** compose up + cert + HTTPS |
| `deploy/certbot-issue.sh` | Certificate + enable HTTPS (used by setup-ssl) |
| `deploy/enable-docker-ssl.sh` | Enable HTTPS after cert exists |
| `deploy/renew-certbot.sh` | `renew` + reload nginx |

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Nginx fails to start after enabling SSL | `20-ssl.conf` missing or wrong domain in cert paths |
| Certbot fails | Port 80 not reachable, DNS wrong, or challenge path not served |
| `502` | `nextjs` container down |
| Renew OK but old cert in browser | `renew-certbot.sh` did not reload nginx |

## Multiple apps on one VPS

If this server hosts several sites, a **host** reverse proxy on 80/443 may be easier. That pattern is not used in this repo; each app would need its own ports or a shared edge nginx you manage outside Compose.
