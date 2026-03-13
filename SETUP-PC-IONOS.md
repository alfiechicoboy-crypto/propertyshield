# Property Shield: Run on PC + Connect IONOS Domain

## 1) Install prerequisites on your PC

- Node.js 20 LTS (or newer)
- PostgreSQL 16+ (local or remote)

## 2) Install project dependencies

```powershell
cd "c:\Users\Alfie\OneDrive\Desktop\Property-Shield"
npm install
```

## 3) Configure environment variables

```powershell
copy .env.example .env
```

Edit `.env`:

- `DATABASE_URL=postgres://USER:PASSWORD@HOST:5432/DBNAME`
- `PORT=5000` (or any port you want)

## 4) Create/update database table

```powershell
npm run db:push
```

## 5) Run locally (development)

```powershell
npm run dev
```

Open: `http://localhost:5000`

## 6) Run production build locally

```powershell
npm run build
npm start
```

## 7) Make it reachable from the internet

To use your domain on a PC-hosted app, your app must be publicly reachable:

- Option A (recommended): host on a cloud/VPS and point domain there.
- Option B (self-host from PC):
  - Reserve/set a static public IP (or dynamic DNS)
  - Port-forward your router `80 -> 5000` and `443 -> 5000` (or to reverse proxy)
  - Allow Windows Firewall inbound rules
  - Use HTTPS via reverse proxy (Caddy/Nginx/Traefik)

## 8) IONOS domain changes (your current domain is attached to MyWebsite NOW)

In IONOS, your domain currently shows:

- Destination: `Website at IONOS`
- Target: `MyWebsite NOW`

You must detach this before DNS pointing works for your app.

### Steps in IONOS panel

1. Open domain `propertyshielduk.com`
2. Click **Adjust destination** (or **Reset domain**) and remove `MyWebsite NOW` assignment
3. Go to **DNS** section
4. Set records:
   - `A` record for `@` -> your server public IPv4
   - `CNAME` record for `www` -> `@` (or to your host target if using a provider)
5. Save and wait for propagation (5 min to 24h)

## 9) Verify

```powershell
nslookup propertyshielduk.com
nslookup www.propertyshielduk.com
```

Then open:

- `http://propertyshielduk.com`
- `https://propertyshielduk.com` (after TLS is configured)

## Notes

- If your ISP blocks inbound port 80/443, self-hosting from home may fail.
- If your public IP changes, your domain will break unless you use static IP or dynamic DNS.
- For reliability, deploying to a VPS/cloud host is usually easier and more stable than home PC hosting.
