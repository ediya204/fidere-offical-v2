# Homepage hero design QA

- Source visual truth: `/var/folders/1v/wprpp7c56hg5_qzt15k1t2240000gn/T/codex-clipboard-cfd29070-648c-4ee1-92d9-68edd37761de.png`
- Source photography: `/var/folders/1v/wprpp7c56hg5_qzt15k1t2240000gn/T/codex-clipboard-158f7cf9-c6be-44ff-8694-f22392510198.png`
- Implementation: `http://127.0.0.1:3000/zh-hans`
- Browser: Codex in-app Browser
- Final desktop implementation screenshot: `artifacts/home-hero-desktop-final-sat.png`
- Final production screenshot: `artifacts/home-production-zh-hans.png`
- Final desktop side-by-side comparison: `artifacts/home-hero-comparison-final-sat.png` (reference left, implementation right)
- Final desktop difference image: `artifacts/home-hero-difference-final-sat.png`
- Final mobile evidence: `artifacts/home-mobile-390-final-visible.png`
- Arabic evidence: `artifacts/home-arabic-local.png`

## Viewport and normalization

- Source effect screenshot: 1155 × 647 pixels, normalized to 1280 × 720 pixels for the desktop comparison.
- Desktop browser viewport: 1280 × 720 CSS pixels at device scale factor 1. The hero itself measured 1280 × 720 CSS pixels. Because the fixed 97px header overlays the browser viewport, the complete hero capture was assembled from two adjacent, browser-rendered in-app Browser captures at scroll positions 0 and 97; no hero pixels were generated or redrawn.
- Mobile browser context: a same-origin 390 × 844 CSS-pixel iframe inside the in-app Browser, device scale factor 1. The hero measured 390 × 430 CSS pixels with zero horizontal overflow. The saved 390 × 720 crop includes the complete header, hero, persona tabs, and first panel content visible in the host capture.
- State: initial homepage state, Simplified Chinese. Additional checks covered English, Traditional Chinese, Arabic RTL, persona tab selection, and the 390px mobile navigation open/close state.

## Findings and comparison history

### Pass 1 — blocked

- [P2] The first implementation used a 24% navy tint that made the sea and wake materially darker than the reference.
- [P2] The title/copy group sat about 24px above the target. Thresholded glyph rows placed the reference title at y=314–346 after normalization and the first implementation at y=291–319.
- [P2] The brand title was about 17px wider than the reference because of positive tracking.

Fixes:

- Removed the tint instead of baking darkness into the asset.
- Shifted the HTML text group down 24px.
- Changed the title tracking to `-0.02em`.
- Kept the copy as live localized HTML rather than raster text.

Post-fix evidence: `artifacts/home-hero-comparison-pass2.png` showed the title, two-line copy, underline, and 16:9 frame aligned without a P0/P1 layout mismatch.

### Pass 2 — blocked

- [P2] The browser-rendered sea remained slightly greyer and the wake highlights less vivid than the supplied effect reference.

Fixes:

- Retained the supplied source image's Display P3 profile in the 2000 × 1125 WebP.
- Added `brightness(1.08) saturate(1.2)` to match the reference's cyan depth and white wake highlights.

Post-fix evidence: `artifacts/home-hero-comparison-final-sat.png`. Mean absolute RGB difference improved from 26.6 / 21.8 / 22.6 to 24.8 / 21.3 / 19.2, with the largest visible blue-channel drift reduced. No actionable P0/P1/P2 mismatch remains.

## Fidelity surfaces

- Fonts and typography: live Public Sans title at 40.32px / 700 / 42.34px line height in the 1280px view; title glyph height and line placement now align with the normalized reference. The Chinese copy renders at 17.28px with 31.97px line height and 3.11px tracking. Arabic disables tracking to preserve joining and uses a 1.9 line height.
- Spacing and layout rhythm: desktop hero is full-width 16:9 up to 900px high. The centered copy uses the reference's vertical position and short underline. Mobile switches to a 390 × 430 near-square crop so the boat and circular wake remain legible.
- Colors and tokens: no dark overlay remains. The asset retains its source Display P3 profile and uses a measured brightness/saturation correction. White copy and the blue accent line remain clearly visible over the dark central water.
- Image quality and asset fidelity: the user's clean 2000 × 1125 photograph is delivered as a 462KB quality-90 WebP. It loaded at its full natural dimensions in all four locale routes. No substitute illustration, CSS drawing, or baked text is used.
- Copy and content: English, Traditional Chinese, Simplified Chinese, and Arabic each render two explicit lines. Arabic has `lang="ar"`, `dir="rtl"`, natural joining, and no horizontal overflow.

The full-view comparison is sufficient for the hero because the title, two copy lines, underline, crop, wake detail, and boat are clearly readable at 1280 × 720. A separate focused crop was unnecessary. The reference's white half-circle at the far right is a carousel/screenshot-edge artifact and was intentionally omitted because the FIDERE homepage has no corresponding carousel behavior.

## Interaction and load checks

- The supplied image loaded successfully at 2000 × 1125 on `/`, `/zh-hant`, `/zh-hans`, and `/ar`.
- The persona selector changed `aria-selected`, `aria-labelledby`, panel copy, and destination when the second tab was selected.
- At 390px, the mobile menu opened, locked body scrolling, displayed the navigation, and closed again.
- No horizontal overflow was present at 1280px, 767px, or 390px.
- The same hero, filter, 2000 × 1125 asset, and Simplified Chinese copy were verified on `https://www.fideretrust.com/zh-hans` after deployment.

final result: passed
