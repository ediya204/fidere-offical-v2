# Inner-page integration

## Current integration contract — 9 September 2026

- The active routes are English without a prefix, Traditional Chinese under `/zh-hant`, and Arabic under `/ar`. Arabic uses RTL. Simplified Chinese is temporarily disabled and its historical routes redirect to Traditional Chinese.
- Solutions contains ten service-detail routes under `/solutions/{slug}`. The three service groups organize navigation; anchors are not substitutes for those detail pages.
- Desktop and mobile customer-login navigation opens the user-approved `https://portal.fideretrust.com` in a new window or tab with `target="_blank"` and `rel="noopener noreferrer"`. The address comes from `company.portal`.
- `/login`, `/zh-hant/login`, and `/ar/login` remain access-assistance pages. They have `noindex, follow` metadata, are excluded from the Sitemap, and contain no authentication form. The external portal handles its own authentication; link verification is not account-login acceptance.
- Contact retains the browser email-draft flow. Preparing or copying a draft, or opening a mail application, does not send an enquiry from this site.
- Shared SEO state and release validation are recorded in [seo-validation.md](seo-validation.md). The current three-language release is deployed and its production evidence is recorded in [cloudflare-deployment.md](cloudflare-deployment.md).

## Historical first integration notes — superseded where noted above

The following notes preserve the initial component handoff. Their EN/Traditional/Simplified language set, nine-service count, anchor list and original login destination are historical and must not be used as the current implementation contract.

- `src/components/inner-pages.tsx` exports the server component `InnerPage({ locale, slug })` for `about`, `solutions`, `wealth-management`, `compliance`, `contact`, and `login`.
- All editorial copy has EN, Traditional Chinese, and Simplified Chinese variants via the shared `text` function. Company facts remain in `src/lib/site.ts`. Office address intentionally preserves the current site's published English form in every locale.
- Content follows `docs/content-sources.md`. No invented team, performance figures, bank affiliations or extra services. Principles are the requested editorial restatements, not represented as a formal policy or independence certification.
- Solutions exposes the homepage anchors `private-trust`, `family-office`, `corporate-trust`, `transaction-support`, `equity-custody`, `succession-planning`. Nine existing services are arranged into three groups. Enquiry links include an optional `interest` query; contact works without consuming it.
- Contact imported `ContactForm` from `@/components/contact-form`; root implemented its email-draft flow. At this initial handoff, Login was assistance-only because no approved external portal had yet been supplied. The approved portal destination in the current contract above supersedes that navigation behaviour.
- Wealth displays the Professional Investor restriction before the instrument rows and explicitly limits structured products to Professional Investors. The risk note links to the local `risk-fees` page.
- Compliance has seven real anchor sections, an accessible sticky index, and a clear summary-versus-operative-policy note linking to `compliance-kyc`. Root owns full legal page links and content.
- Shared styling hooks: `section`, `container`, `split-grid`, `section-heading`, `prose`, `editorial-title`, `body-large`, `photo-split`, `principles-grid`, `principle`, `dark-section`, `service-group`, `service-entry`, `editorial-row`, `row-number`, `row-title`, `row-copy`, `legal-note`, `compliance-layout`, `sticky-index`, `compliance-article`, `contact-layout`, `contact-details`, `contact-form-wrap`, `wide-photo`.
- `service-entry` uses three children (heading, paragraph, link) rather than the numbered four-column homepage row. Give it an appropriate column override; collapse cleanly at mobile widths. Titles contain newline characters for deliberate editorial line breaks; shared heading styles should use `white-space: pre-line`.
- Dependencies are only shared editorial components, shared site data, and the contact form. No client JavaScript is added by these pages.
