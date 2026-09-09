import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { type Locale, pathFor, text } from "@/lib/site";

export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={`arrow ${className}`} width="25" height="16" viewBox="0 0 25 16" fill="none" aria-hidden="true"><path d="M1 8h21M16 1l7 7-7 7" stroke="currentColor" strokeWidth="1.25"/></svg>;
}
export function SectionLabel({ children, index }: { children: ReactNode; index?: string }) {
  return <div className="section-label">{index && <span className="section-index">{index}</span>}<span>{children}</span></div>;
}
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link className={`text-link ${className}`} href={href}><span>{children}</span><Arrow/></Link>;
}
export function ImageReveal({ src, alt, className = "", sizes = "(max-width: 768px) 100vw, 50vw" }: { src: string; alt: string; className?: string; sizes?: string }) {
  return <div className={`image-reveal ${className}`}><Image src={src} alt={alt} fill sizes={sizes} quality={85}/></div>;
}
export function PageHero({ locale, eyebrow, title, description, image, imageAlt = "" }: { locale: Locale; eyebrow: string; title: ReactNode; description?: string; image?: string; imageAlt?: string }) {
  return <section className={`page-hero ${image ? "page-hero-photo" : ""}`}>
    {image && <><Image src={image} alt={imageAlt} fill sizes="100vw" priority quality={85}/><div className="photo-shade"/></>}
    <div className="container page-hero-content"><SectionLabel>{eyebrow}</SectionLabel><h1>{title}</h1>{description && <p>{description}</p>}<span className="page-hero-note">{text(locale, "HONG KONG · INTERNATIONAL PERSPECTIVE", "立足香港 · 國際視野", "立足香港 · 国际视野")}</span></div>
  </section>;
}
export function CTAEditorial({ locale }: { locale: Locale }) {
  return <section className="section cta-editorial"><div className="container cta-grid"><SectionLabel>{text(locale, "LET’S TALK", "開啟對話", "开启对话")}</SectionLabel><div><h2>{text(locale, "Start with a conversation.", "一切，始於對話。", "一切，始于对话。")}</h2><p className="cta-personas">{text(locale, "Private clients · Family offices · Corporate clients", "私人客戶 · 家族辦公室 · 企業客戶", "私人客户 · 家族办公室 · 企业客户")}</p><TextLink href={pathFor(locale, "contact")}>{text(locale, "Contact us", "聯絡我們", "联系我们")}</TextLink></div></div></section>;
}
