# Cloudflare production deployment

Record updated: 2026-09-09 (Asia/Hong_Kong).

## Current three-language SEO release — deployed and verified

The deployed source and static export support English, Traditional Chinese and Arabic.
They contain 117 content/access-assistance pages, with 114 indexable Sitemap URLs
(38 per language). Simplified Chinese is temporarily redirected to Traditional Chinese.
**This release was deployed at approximately 12:19 HKT on 9 September 2026.**
Build, static SEO, localhost HTTP and production validation results are recorded below.

| Field | Current release status |
| --- | --- |
| Pages project | `fideretrust` |
| Deployment ID | `addf2556-d2c7-4b43-be21-f758ff6f7d9d` |
| Immutable deployment URL | [https://addf2556.fideretrust.pages.dev](https://addf2556.fideretrust.pages.dev) |
| Deployment time | Approximately 2026-09-09 12:19 HKT |
| Build ID | `zLQ8bKHMdxlnHmLtLcCQO` |
| Final three-language build | `npm run cf:build` PASS; 121 static routes, including 117 content/access-assistance pages |
| Static SEO acceptance | `npm run seo:validate` PASS; 117 pages, 39 per language, 117 unique titles and descriptions, 114 Sitemap URLs |
| Local HTTP acceptance | `validate-arabic.mjs` PASS; 117/117 pages and 114 Sitemap URLs |
| Production Sitemap acceptance | PASS; 114 unique URLs, no `zh-hans` or Login |
| Public HTML acceptance | PASS; all 117 `www` pages HTTP 200, metadata checks passed for 117/117 |
| Redirects and unknown paths | PASS; six legacy entries return correct 308 targets, Simplified root/deep URLs return 302, unknown paths return 404 |
| Canonical host redirect | PASS; active Cloudflare Single Redirect sends HTTPS apex to the same `www` path with 301, preserving query parameters |
| Pages indexing headers | PASS; Pages main/version hosts include `noindex, nofollow`; neither `www` nor apex has that response header |
| Customer-portal navigation | PASS; approved URL, new-window target and rel attributes verified; production browser reported no errors |
| Search Console ownership | VERIFIED; domain property `sc-domain:fideretrust.com` through Cloudflare Domain Connect DNS provider verification |
| Search Console Sitemap | SUCCESS; submitted and last read 9 Sept 2026, 114 discovered pages and 0 videos |

The release includes shared three-language SEO metadata, canonical/hreflang and
Sitemap alignment, page-related social images, home-page structured data, noindex
access-assistance pages, six historical service redirects, Pages-domain indexing
restrictions and completed Web App Manifest fields. Desktop/mobile customer login
opens the user-approved `https://portal.fideretrust.com` in a new window or tab;
local `/login` pages remain noindex assistance pages.

Detailed results and reproducible commands are in [seo-validation.md](seo-validation.md).
The local evidence files are `artifacts/seo/validation.json` (checked at 12:22:57 HKT)
and `artifacts/arabic-i18n/validation.json` (checked at 12:17:28 HKT); both identify
Build ID `zLQ8bKHMdxlnHmLtLcCQO`. The SEO report confirms one Organization schema,
one WebSite schema and 75 BreadcrumbList schemas, with no failures.

Remote asset SHA-256 values matched the local files:

| Asset | Verified SHA-256 |
| --- | --- |
| `/favicon.ico` | `1060fc6e972c46e105f0c9a4fd9dda5ac01165a2c9657ab8bfc6c9ae54b9411a` |
| `/images/hero-fidere-wake.webp` | `bb3689e7c0ed99ae5f6f742010a47e16f9e3829a60af00dbdd52e2fa0ee61aaf` |

### Canonical apex-to-www redirect — active and verified

The earlier apex-200 boundary is resolved by a separate Cloudflare Single Redirect.
This edge rule does not depend on the source-level canonical or a new Pages build.

| Setting | Active value |
| --- | --- |
| Rule name | `Canonical apex to www` |
| Rule ID | `931ca02666e746ea88977bccb963517d` |
| Status | Active |
| Match | `https://fideretrust.com/*` |
| Destination | `https://www.fideretrust.com/${1}` |
| Response status | 301 |
| Preserve query string | Enabled |

Verified requests:

- `https://fideretrust.com/zh-hant/solutions?source=seo` returns 301 to
  `https://www.fideretrust.com/zh-hant/solutions?source=seo`; the destination returns 200.
- `https://fideretrust.com/ar?source=seo` returns 301 to
  `https://www.fideretrust.com/ar?source=seo`; the destination returns 200.
- HTTP apex first returns 301 to HTTPS apex. Following the complete chain reaches
  the corresponding `www` URL with a final 200 response and the query preserved.

### Search Console domain ownership and Sitemap — verified and submitted

| Field | Verified result |
| --- | --- |
| Domain property | `sc-domain:fideretrust.com` |
| Account | `ediyanghk@gmail.com` |
| Ownership method | DNS provider verification through a one-time Cloudflare Domain Connect authorization |
| DNS change | Cloudflare added an apex `google-site-verification` TXT record; the token is intentionally omitted from this document |
| Sitemap URL | `https://www.fideretrust.com/sitemap.xml` |
| Submission confirmation | `Sitemap submitted successfully` |
| Status | `Success` |
| Submitted | `9 Sept 2026` |
| Last read | `9 Sept 2026` |
| Discovered pages | `114` |
| Discovered videos | `0` |

Ownership verification and successful Sitemap submission/reading are complete.
The discovered-page count is not an indexed-page count. Actual Google page indexing,
Google-selected canonical URLs, rankings and subsequent page-crawl data still require
time and separate verification. Customer-account authentication was not verified by
this release.

At the read-only production audit on 2026-09-09 12:01–12:04 HKT, the production
Sitemap still had 152 entries and Simplified Chinese pages still returned 200. This
is evidence of the previous four-language deployment, not proof of this release.

## Historical deployment snapshot — previous four-language release

The evidence below is preserved from the preceding deployment. Its 156 normal pages,
152 Sitemap URLs and four-language browser results are superseded as the current
acceptance target. The deployment ID below is historical and must not be copied
into the current release table above.

### Historical production target

- Cloudflare account: `1159a5e57869211278b99f401f41321a`
- Pages project: `fideretrust`
- Historical production deployment ID: `5d40beeb-c815-4ad3-9200-8f243a0f0453`
- Historical immutable deployment URL: `https://5d40beeb.fideretrust.pages.dev`
- Pages project URL: `https://fideretrust.pages.dev`
- Production domains: `https://fideretrust.com` and `https://www.fideretrust.com`
- Preferred canonical host in site metadata: `https://www.fideretrust.com`

The static build was uploaded with Wrangler 4.130.0 using the locally authenticated
Cloudflare OAuth session. The two custom domains were attached through the Cloudflare
dashboard. No API token or credential is stored in this repository.

### Historical DNS change and rollback record

Only the apex and `www` website records were changed. Mail, portal, API, R2, verification,
and other subdomain records were left unchanged.

| Host | Previous record | Previous proxy / TTL | Record after that deployment |
| --- | --- | --- | --- |
| `fideretrust.com` | CNAME `46ca7a78a1345cab.vercel-dns-016.com` | DNS only / 10 minutes | CNAME `fideretrust.pages.dev`, proxied / automatic |
| `www.fideretrust.com` | CNAME `86a840fa3f5549f3.vercel-dns-016.com` | DNS only / automatic | CNAME `fideretrust.pages.dev`, proxied / automatic |

For a rollback, first remove both custom domains from the `fideretrust` Pages project,
then restore the two previous CNAME records above. Confirm the restored origin before
declaring the rollback complete.

### Historical build and validation

- `npm run lint`: passed with no warnings or errors.
- `npm run typecheck`: passed.
- `npm run cf:build`: passed under Next.js 16.3.4; 160 static routes generated.
- Production sitemap: 152 URLs, all returned HTTP 200; 38 URLs for each of English,
  Traditional Chinese, Simplified Chinese, and Arabic.
- Arabic homepage: `lang="ar"`, `dir="rtl"`, Arabic Open Graph locale and canonical URL
  verified.
- Legacy routes: all configured redirects return HTTP 308 and the expected destination.
- Missing route: returns HTTP 404.
- Response headers: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and
  `Permissions-Policy` verified; hashed static assets return immutable one-year caching.
- Authoritative DNS, Cloudflare resolver `1.1.1.1`, and Google resolver `8.8.8.8` all
  returned Cloudflare anycast addresses for the apex and `www`.
- Both production responses include `server: cloudflare` and `cf-ray`.
- Pages custom-domain API: domain, verification, and HTTP validation status were all
  `active` for the apex and `www`.
- Browser check: Arabic homepage rendered correctly, the mobile navigation opened and
  closed, the persona tabs updated their panel, and the browser reported no page errors.
- Page titles: all 156 normal static HTML pages begin with `FIDERE TRUST |`; production
  checks covered English, Traditional Chinese, Simplified Chinese, and Arabic pages.
- Header typography: desktop primary navigation renders at 13px and utility links at
  12px; the 1280px browser check reported no horizontal overflow.
- Homepage hero: the user-provided 2000 × 1125 speedboat image is live as a quality-90
  Display-P3 WebP. English, Traditional Chinese, Simplified Chinese, and Arabic hero
  copy was verified as live HTML. Browser checks covered a 1280 × 720 desktop hero,
  a 390 × 844 mobile context, Arabic RTL, persona-tab switching, and the mobile menu.
  The production asset SHA-256 is
  `bb3689e7c0ed99ae5f6f742010a47e16f9e3829a60af00dbdd52e2fa0ee61aaf` on the
  immutable deployment, apex domain, and `www` domain.
- Favicon: `/favicon.ico` contains 16, 32, 48, 64, 128, and 256 pixel PNG frames. The
  production file is 40,177 bytes with SHA-256
  `1060fc6e972c46e105f0c9a4fd9dda5ac01165a2c9657ab8bfc6c9ae54b9411a`, matching the
  generated source exactly. The HTML icon declarations, Apple Touch icon, PWA icons,
  manifest MIME type, and companion asset hashes were also verified on the production
  domains.

Cloudflare Email Address Obfuscation adds its email decoder to production HTML. That
explains the small byte-level difference from `out/index.html`; the immutable Pages URL
matches the local build byte for byte, and the rendered email link was verified in the
browser.

## Release commands

```bash
npm run cf:deploy
```

`cf:deploy` already runs `cf:build` before uploading `out/`; a separate `cf:build` can
be used for validation without publishing. The deployment command updates the existing
`fideretrust` Pages production branch. It does not change DNS or custom-domain
configuration. A build alone is not a deployment receipt; subsequent releases must
record their own deployment ID and fresh validation results.
