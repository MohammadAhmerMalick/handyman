# VPS deploys (minimal downtime)

## Do not rerun SSL on every push

| Script | When |
| --- | --- |
| `./deploy/setup-ssl.sh` | **Once** (first HTTPS setup) |
| `./deploy/redeploy.sh` | **Every code update** after `git push` |
| `./deploy/renew-certbot.sh` | **Cron only** (certificate renewal) |

Running `setup-ssl.sh` or a full `docker compose up -d --build` on each change rebuilds everything and lengthens unnecessary restarts. Use **`redeploy.sh`** instead.

## Routine update (recommended)

On the VPS, in the project directory:

```bash
./deploy/redeploy.sh
```

That runs:

1. `git pull`
2. `docker compose build nextjs` — **old container keeps serving** while the new image builds (this is the slow step).
3. `docker compose up -d --no-build --force-recreate --wait nextjs` — quick swap; **nginx stays up** on 80/443.
4. `nginx -s reload` if the config test passes (picks up `nginx/` file changes without restarting nginx).

Already pulled? `./deploy/redeploy.sh --no-pull`

## How much downtime?

| Phase | Site status |
| --- | --- |
| `git pull` | Up |
| `docker compose build nextjs` (often several minutes) | **Up** (old nextjs) |
| Container swap + Next.js boot | Often **a few seconds** of errors/502 possible |
| SSL / nginx | Up (nginx not recreated for app-only changes) |

You cannot avoid a **short** gap on a single server with one Next.js container unless you add a second instance or an external load balancer. This flow keeps the long build off the critical path.

## Faster builds (optional, later)

Building on the VPS every time is slow. Common upgrade path:

1. GitHub Actions builds the Docker image on push.
2. Push image to GHCR or Docker Hub.
3. VPS runs `docker compose pull && docker compose up -d` (no local build).

That shortens deploy time and CPU load on the server.

## Nginx or compose file changes

- **`nginx/` edits only:** `docker compose exec nginx nginx -t && docker compose exec nginx nginx -s reload`
- **`docker-compose.yml` changes:** `docker compose up -d` (may recreate nginx briefly — plan a quiet moment)

## First-time server setup

Still use [`ssl-docker-nginx.md`](ssl-docker-nginx.md) and `./deploy/setup-ssl.sh` once.
