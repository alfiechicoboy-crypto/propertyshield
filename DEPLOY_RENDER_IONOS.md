# Deploy Property Shield 24/7 (Render + IONOS)

This gets your site always online, even when your PC is off.

## 1) Push this project to GitHub

1. Create a new GitHub repo (private or public).
2. Upload this project folder to that repo.

## 2) Deploy on Render (Blueprint)

1. Log in to Render.
2. Click **New** -> **Blueprint**.
3. Connect your GitHub and select this repo.
4. Render will detect `render.yaml` and create:
   - `property-shield-web` (Node web service)
   - `property-shield-db` (PostgreSQL)
5. Click **Apply** and wait for deploy.

## 3) Verify Render app works

1. Open the Render web service URL (something like `https://property-shield-web.onrender.com`).
2. Visit `/contact` route:
   - `https://<your-render-url>/contact`

## 4) Connect your IONOS domain

In Render web service:
1. **Settings** -> **Custom Domains** -> add:
   - `propertyshielduk.com`
   - `www.propertyshielduk.com`
2. Render shows required DNS records.

In IONOS DNS, replace old records and set exactly what Render shows.
Typically:
- `www` -> `CNAME` -> Render target
- apex/root `@` -> `A` or `ALIAS/ANAME` per Render instructions

Do not remove mail records (MX/SPF/DKIM/DMARC).

## 5) Final checks

1. Wait for DNS propagation (can take minutes up to 24h).
2. Test:
   - `https://propertyshielduk.com/contact`
   - `https://www.propertyshielduk.com/contact`

## Notes

- Your app route is `/contact` (not `/contact-us`).
- Render provides 24/7 hosting independent of your PC power state.
