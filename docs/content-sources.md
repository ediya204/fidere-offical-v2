# FIDERE public content source dossier

Verified from public website responses on 9 September 2026. This is a content audit of the company's own disclosures, not an independent company-register search or legal opinion. Original English source pages were inspected with web browsing and direct HTTP requests and returned HTTP 200 after redirects. Those observations are a historical source snapshot, not a claim that the original navigation is still deployed. New implementation routes listed later are a source inventory, not HTTP acceptance results. The user supplied the separate design brief and logo. The subsequently approved customer-portal destination is recorded separately below.

## Company and shared contact source

Use one shared data record throughout the new site. [Contact page](https://www.fideretrust.com/contact), About and all inspected footers agree:

| Field | Confirmed public value |
| --- | --- |
| Company | FIDERE TRUST LIMITED |
| Office | RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom, Hong Kong |
| Email | info@fideretrust.com |
| Telephone | +852 5128 6593 |
| Email link | mailto:info@fideretrust.com |
| Telephone link | tel:+85251286593 |

The unusual “KT Hok Yuen Street” wording is exactly what the current website publishes. No alternative address was found in the inspected pages; do not silently replace it with a guessed street number.

## Original website navigation and routing

At the original source-audit stage, the site served both older English routes and localized routes. Its English localized navigation used the following destinations:

| Item | Original older route | Original localized route |
| --- | --- | --- |
| Home | https://www.fideretrust.com/ | https://www.fideretrust.com/en |
| About | https://www.fideretrust.com/about | https://www.fideretrust.com/en/about |
| Solutions | https://www.fideretrust.com/services | https://www.fideretrust.com/en/solutions |
| Compliance | https://www.fideretrust.com/compliance | https://www.fideretrust.com/en/compliance-kyc |
| Wealth Management | https://www.fideretrust.com/asset-management | https://www.fideretrust.com/en/wealth-management |
| Contact | https://www.fideretrust.com/contact | https://www.fideretrust.com/en/contact |
| Login | https://www.fideretrust.com/login | Same nonlocalized route |

Localized navigation targets were observed in returned anchor markup; business content was read from the older routes unless explicitly linked below. At that stage, the six unprefixed legal routes redirected to `/en/` equivalents. These historical redirects do not describe the current canonical routing.

This table records the original public site's source URLs, not the redesigned implementation's canonical routes. The implementation now uses unprefixed English routes, `/zh-hant` for Traditional Chinese and `/ar` for Arabic. Simplified Chinese is currently disabled; legacy `/zh-hans` paths temporarily redirect to the matching Traditional Chinese route. Legacy `/en` paths redirect to the corresponding unprefixed English routes. Preserve the original `/en/` URLs in source metadata: they identify where the source material was retrieved.

## About and principles

[About](https://www.fideretrust.com/about) describes a Hong Kong trust and fiduciary provider serving international clients. It identifies trustee services, asset custody and financial planning. Its existing values are Excellence, Trustworthy, Doing it Right, and Delivering Value. It describes in-house CDD/KYC, beneficial ownership verification, records, a risk-based approach and source-of-wealth evidence.

The page contains general team descriptions, but no verified named individual biography or portrait. Omit invented team members. Although the existing copy claims staff and registered-capital figures, those figures are not needed for the redesign and were not independently substantiated. No verified AUM, named partner-bank roster or client count was found.

The requested Integrity / Discretion / Independent Judgement / Long-term Stewardship headings are editorial restatements, not verbatim existing values. Do not imply a verified ownership structure, fee model, or formal independence certification from these headings.

## Services and audience

[Solutions](https://www.fideretrust.com/en/solutions) and [Services](https://www.fideretrust.com/services) explicitly cover private trusts, succession planning, family office services, incorporation/company management, transaction support, trustees/directors, tax/accounting compliance, regulatory support, and equity custody/management/settlement support. These support the proposed three service groupings without adding business lines.

[Personal Trust](https://www.fideretrust.com/en/personal-trust) describes trust structuring and administration, international transaction procedures, due diligence assistance, access through brokerage/asset management platforms, real-asset holding structures and ongoing oversight.

[Family Office](https://www.fideretrust.com/en/family-office) describes coordinated trust, custody, payment and reporting arrangements, family governance, office architecture and next-generation planning. It mentions family charters, councils, meetings and decision protocols.

[Corporate Clients](https://www.fideretrust.com/en/corporate-clients) repeats the six corporate services above. The website supports private clients, families/family offices and international corporate clients; “institutional” can describe the visual tone, but do not invent institutional mandates or client relationships.

The redesign's additional **Corporate Trust** detail page is an editorial grouping of the disclosed trustee/director, company formation and corporate administration services. It does not establish a separately verified securities-issuance, debenture-trustee or capital-markets business. The page describes ownership, governing documents, appointments and continuing administration, subject to due diligence and the permitted scope. Private-trust relationship diagrams must distinguish beneficiaries (people entitled to benefit) from a trust's specified purpose; a purpose is not itself a beneficiary.

## Wealth and eligibility

[Wealth Management](https://www.fideretrust.com/asset-management) lists public equities, mutual funds/ETFs, IPO access, bonds, options, structured products, fixed deposits and money-market instruments. Cash management can conservatively summarize its liquidity and money-market content. It describes assets held through financial institutions/custodians without naming any.

The [Solutions notice](https://www.fideretrust.com/en/solutions) says some services are restricted to Professional Investors under Hong Kong's Securities and Futures Ordinance (Cap. 571). Preserve this restriction clearly. The wealth page also says structured products are for professional investors. Do not invent qualification thresholds or represent every service as available to retail clients.

Safe availability wording: services and investment access depend on client eligibility, jurisdiction, account arrangements, applicable law and compliance review. Public website content does not establish a securities brokerage licence or prove any named custodian relationship.

The [homepage](https://www.fideretrust.com/) mentions accounts in Hong Kong, the United States and Singapore. Bahrain was added to the jurisdiction selector following the user's explicit instruction on 9 September 2026; it was not inferred from the earlier public-site copy. These locations support a jurisdiction-coordination section, not a claim that FIDERE has offices, licences or partner banks in all four places. Omit fabricated account numbers, balances, yields and product counts.

### Four wealth detail pages

These pages reorganize existing scope from the original [Wealth Management page](https://www.fideretrust.com/asset-management); their explanatory copy is newly written. They do not introduce a product catalogue, managed strategy, recommendation service or proof of additional licensing.

| New English route | Source-supported scope | Editorial boundary |
| --- | --- | --- |
| `/wealth-management/global-markets` | Public equities in US, Hong Kong and Chinese markets; account and custody context. | Market names are not proof of offices, a brokerage licence or unrestricted access. No market/product counts are carried forward. |
| `/wealth-management/funds` | Mutual funds and exchange-traded funds. | Mandate, dealing, redemption and fee discussions explain considerations; no named fund, selection recommendation or performance is asserted. |
| `/wealth-management/fixed-income` | Government and corporate bonds. | Issuer, term and liquidity are distinct considerations. No credit rating, principal protection or promised yield is invented. |
| `/wealth-management/cash-management` | Cash arrangements, fixed deposits and money-market instruments. | Liquidity planning and administrative coordination do not establish deposit-taking authority, instant processing or guaranteed access/returns. |

Each page retains the source's conditional eligibility and Professional Investor restriction where applicable, and links to the relevant risk and service context.

## Regulatory disclosures

[Regulatory Status](https://www.fideretrust.com/en/regulatory-status) is version 1.1, effective 11 May 2026. It publicly identifies:

- Hong Kong entity FIDERE TRUST LIMITED.
- TCSP licence number TC010497, also corroborated on About.
- Registration as a Trust Company under section 78(1) of the Trustee Ordinance (Cap. 29).
- A registration certificate issued by the Companies Registry on 11 May 2026; the page says section 77 requirements were met.
- Services limited to the lawful scope for each territory, activity and client category; further eligibility checks may apply.

These are verified as current company-site disclosures. No independent regulator-register validation was performed. A restrained footer may state the confirmed company identity and TCSP licence number, linked to the source regulatory disclosure. Do not imply a banking licence, SFC authorisation, deposit insurance or government endorsement.

## Compliance library

[Compliance & KYC](https://www.fideretrust.com/en/compliance-kyc) and [Compliance](https://www.fideretrust.com/compliance) contain materially matching policy text: version 1.0, effective 1 April 2026, owned by the Compliance Department, annual review or earlier legal/regulatory update, next review 1 April 2027.

Supported sections for the redesign:

1. Risk-based AML/CTF: CDD, UBO verification, transaction monitoring and suspicious-activity escalation.
2. CDD/KYC/KYB: identity/address evidence, incorporation documents, director/shareholder records and ownership structures.
3. Source of funds/wealth: supporting information and documents as required by risk and activity.
4. Sanctions/PEP screening: relevant connected parties, periodic screening, adverse media and risk assessment.
5. Enhanced due diligence: high-risk jurisdictions, opaque ownership and unusual activity; additional corroboration and approval may apply.
6. Ongoing review: changes in ownership, business activity and transaction behaviour may trigger refresh.
7. Record keeping and lawful cooperation: retention as applicable law requires; updates and authority cooperation where legally required.

Do not invent a fixed retention period, list vendor, automated screening provider, or guaranteed approval time. Service access remains conditional on compliance review.

The five new educational topic routes—`/compliance/aml-ctf`, `/compliance/client-due-diligence`, `/compliance/source-of-funds`, `/compliance/sanctions-screening` and `/compliance/ongoing-monitoring`—explain these published controls. Each points back to the full Compliance & KYC policy. The document examples are a typical, conditional information pack, not an exhaustive universal acceptance checklist. Source-of-funds and source-of-wealth explanations distinguish the origin of the relevant funds from the wider accumulation of wealth; providing either does not guarantee onboarding or complete the ongoing review.

## Legal documents

| Footer item | Verified destination | Scope and cautions |
| --- | --- | --- |
| Privacy Policy | https://www.fideretrust.com/en/privacy | Updated 1 November 2024. Personal-data collection, use, transfer, marketing, cookies, retention, access/correction and contact. Refers to Cap. 486. |
| Disclaimer | https://www.fideretrust.com/en/disclaimer | The document's visible heading is actually “Terms of Use”; updated 1 November 2024. Account security, IP, third-party links and disclaimers. Preserve destination; note title inconsistency. |
| Terms & Conditions | https://www.fideretrust.com/en/terms | Separate website terms with information-only disclaimer, no investment recommendation, limitations, third-party links and Hong Kong law/jurisdiction. |
| Regulatory Status | https://www.fideretrust.com/en/regulatory-status | Licensing/registration and scope restrictions; see above. |
| Compliance & KYC | https://www.fideretrust.com/en/compliance-kyc | Onboarding, AML/CTF, sanctions, monitoring and record keeping. |
| Risk & Fees | https://www.fideretrust.com/en/risk-fees | Version 1.0, effective 1 April 2026. Market, FX, operational, counterparty, settlement and technology risks; variable service/custody/administration and third-party fees. |

[Risk & Fees](https://www.fideretrust.com/en/risk-fees) states that returns and principal protection are not guaranteed. Payment processing depends on channels, jurisdiction, compliance and cut-offs; some accepted instructions may be irreversible. Complaints go to the shared email. No specific fee schedule or guaranteed response period is given. Link to existing legal documents when preserving their exact legal effect is important; do not present newly abridged marketing copy as the full operative policy.

The implementation preserves the six complete English source texts in `src/lib/legal-documents.ts`, retrieved on 9 September 2026. Source title, URL, retrieval date and a text SHA-256 are stored with each document. Three-language summaries in `src/components/legal-page.tsx` are separate from the full English text, which is available in the page itself; the Chinese summaries are not complete translations. These snapshots do not automatically update when the original site changes. Dates inside a document remain the source's publication/effective dates, not a fabricated redesign publication date. The two distinct Terms of Use / Terms & Conditions source documents remain separate.

## Original educational guides

The Insights index and its three detail pages contain **original educational copy written for this redesign**, in English, Traditional Chinese and Simplified Chinese. They are not copied original-site articles, previously published FIDERE research, dated market commentary or individual professional advice. No author biography, publication date, research-team attribution, market forecast or performance series has been invented.

| New English route | Subject and reasoning | Verified factual background |
| --- | --- | --- |
| `/insights/trust-governance-over-time` | Governing purpose and documents; roles and authority; records as circumstances change; continuity and family communication. | [Personal Trust](https://www.fideretrust.com/en/personal-trust), [Family Office](https://www.fideretrust.com/en/family-office), [Compliance & KYC](https://www.fideretrust.com/en/compliance-kyc). |
| `/insights/preparing-for-due-diligence` | Identity and business context; ownership and control; distinguishing funds from wealth; the continuing nature of review. | [Compliance & KYC](https://www.fideretrust.com/en/compliance-kyc), [About](https://www.fideretrust.com/about). |
| `/insights/cross-border-administration` | Separate the asset, owner and account; document transaction requirements; preserve records; obtain jurisdiction-appropriate advice. | [Home](https://www.fideretrust.com/), [Personal Trust](https://www.fideretrust.com/en/personal-trust), [Risk & Fees](https://www.fideretrust.com/en/risk-fees), [Compliance & KYC](https://www.fideretrust.com/en/compliance-kyc). |

`src/lib/insights.ts` stores the three-language text and source URLs. The source URLs support the factual context; they are not claimed publication locations for the new guides. Organizational suggestions and questions are editorial explanations, not a new service commitment or a representation that all trust documents impose identical duties. Related links lead to the corresponding local service, compliance and guide pages.

## Redesigned page inventory

The current source organizes each language into one homepage, six first-level pages, 22 business/topic second-level pages, three guide detail pages, six legal pages and one client-access notice: 39 pages per language. The 22 pages comprise ten Solutions, three About, four Wealth Management and five Compliance pages. About topics organize the disclosed company identity, service approach and governance; they do not add named team members or independently verified regulatory findings.

The six first-level paths are `/about`, `/solutions`, `/wealth-management`, `/compliance`, `/insights` and `/contact`. English has no language prefix, Traditional Chinese uses `/zh-hant`, and Arabic uses `/ar`. These counts describe content and route source, not an assertion that the latest build, every HTTP response or browser flow has been verified. Checks performed on earlier language configurations do not validate the changed route structure.

## Login and contact behaviour

**Current approved implementation:** desktop and mobile customer-login links point to [https://portal.fideretrust.com](https://portal.fideretrust.com), the destination explicitly approved by the user. They open a new window or tab using `target="_blank"` with `rel="noopener noreferrer"`. The shared address is `company.portal` in `src/lib/site.ts`; it was not inferred from the old page or invented during the source audit.

The local `/login`, `/zh-hant/login`, and `/ar/login` routes remain customer-access assistance pages, with `noindex, follow` metadata and no Sitemap entry. They do not implement authentication. Verifying the external link and its opening behaviour does not verify an account login, authorization, or the portal's business backend.

**Historical observation, superseded for the navigation destination:** the original [Login](https://www.fideretrust.com/login) source rendered a Client Access notice, not a username/password form. It described onboarding, verification and Hong Kong compliance, and linked to Contact. No external portal link was found in those original public anchors. This explains the earlier assistance-page implementation; the later explicit approval above replaces the earlier absence of a supplied portal URL.

The [Contact](https://www.fideretrust.com/contact) form visibly requests name, email and message. This audit did not submit personal information or verify the delivery endpoint. A new frontend must not claim that a message was sent without an actual functioning submission path. A clearly labelled email-draft workflow is an honest fallback.

The redesign implements that local email-draft workflow: preparing a draft, copying it or opening the user's email application is not message delivery. The marketing-site repository contains no form-submission, email-sending, CRM or account-authentication backend. The approved portal is an external application. Shared company contact values are held in `src/lib/site.ts`. The current three-language SEO and portal-link release, together with its deployment ID and live validation, is recorded in [cloudflare-deployment.md](cloudflare-deployment.md).

## Inconsistencies not to carry forward

- The wealth page's broad “all investors” and no-threshold language conflicts with professional-investor restrictions on Solutions and conditional eligibility on Regulatory Status.
- Homepage instant/zero-fee language and wealth-page yield/return claims should not override Risk & Fees limitations. Omit performance and assurance claims in the redesign.
- Existing absolute tax, privacy, asset-protection and bank-versus-trust comparisons are not needed; do not repackage these as legal conclusions. Describe structuring and administration with case-specific professional advice.
- “Disclaimer” currently opens a document headed “Terms of Use”; Terms & Conditions is a separate text. Avoid merging them silently.
- Hong Kong/US/Singapore/Bahrain account coverage is not evidence of offices or licences in all four jurisdictions; Bahrain comes from the user's explicit 9 September 2026 instruction rather than the earlier public-site source.

No source supports new AUM, customer counts, awards, partner logos, investment returns or named team members. The new site should use the supplied logo and new/licensed photography rather than reuse Lighthouse Canton assets.
