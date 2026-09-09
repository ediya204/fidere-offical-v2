import { arabicText } from "./i18n/ar";

export const locales = ["en", "zh-hant", "ar"] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = { en: "EN", "zh-hant": "繁", ar: "العربية" };
export const localeSeo: Record<Locale, { htmlLang: string; hrefLang: string; openGraph: string }> = {
  en: { htmlLang: "en", hrefLang: "en", openGraph: "en_HK" },
  "zh-hant": { htmlLang: "zh-Hant", hrefLang: "zh-Hant", openGraph: "zh_HK" },
  ar: { htmlLang: "ar", hrefLang: "ar", openGraph: "ar_HK" },
};
export function isLocale(value: string): value is Locale { return locales.includes(value as Locale); }
export function text(locale: Locale, en: string, traditional: string, _simplified: string, arabic?: string) { return locale === "ar" ? arabic ?? arabicText(en) : locale === "zh-hant" ? traditional : en; }
export function pathFor(locale: Locale, slug = "") { return locale === "en" ? `/${slug}` : `/${locale}${slug ? `/${slug}` : ""}`; }
// Verified against the current FIDERE Contact and Regulatory Status pages on 9 September 2026.
// Keep company facts here; never create page-specific copies of contact details.
export const company = {
  brand: "FIDERE TRUST",
  name: "FIDERE TRUST LIMITED",
  address: "RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom, Hong Kong",
  email: "info@fideretrust.com",
  phone: "+852 5128 6593",
  phoneHref: "+85251286593",
  licence: "TC010497",
  website: "https://www.fideretrust.com",
  portal: "https://portal.fideretrust.com",
};
export const navigation = [
  { slug: "about", en: "About", tc: "關於我們", sc: "关于我们" },
  { slug: "solutions", en: "Solutions", tc: "信託方案", sc: "信托方案" },
  { slug: "wealth-management", en: "Wealth Management", tc: "財富管理", sc: "财富管理" },
  { slug: "compliance", en: "Compliance", tc: "合規管治", sc: "合规管治" },
  { slug: "insights", en: "Insights", tc: "觀點與知識", sc: "观点与知识" },
  { slug: "contact", en: "Contact", tc: "聯絡我們", sc: "联系我们" },
];
export const legalNavigation = [
  { slug: "privacy", en: "Privacy Policy", tc: "私隱政策", sc: "隐私政策" },
  { slug: "disclaimer", en: "Disclaimer", tc: "免責聲明", sc: "免责声明" },
  { slug: "terms", en: "Terms & Conditions", tc: "條款及細則", sc: "条款及细则" },
  { slug: "regulatory-status", en: "Regulatory Status", tc: "監管地位", sc: "监管地位" },
  { slug: "compliance-kyc", en: "Compliance & KYC", tc: "合規及客戶審查", sc: "合规及客户审查" },
  { slug: "risk-fees", en: "Risk & Fees", tc: "風險及費用", sc: "风险及费用" },
];
