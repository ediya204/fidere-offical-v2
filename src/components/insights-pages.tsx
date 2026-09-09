import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { Arrow, ImageReveal, SectionLabel, TextLink } from "./editorial";
import { insightArticles, type InsightArticle, type InsightCopy } from "@/lib/insights";
import { type Locale, pathFor, text } from "@/lib/site";
import "./wealth-insights.css";

const local = (locale: Locale, copy: InsightCopy) => text(locale, ...copy);

function GuideLabel({ locale, article }: { locale: Locale; article: InsightArticle }) {
  return <div className="wi-guide-meta"><span>{local(locale, article.category)}</span><span>{text(locale, "Educational guide", "實務指南", "实务指南")}</span></div>;
}

function GuideRow({ locale, article, index }: { locale: Locale; article: InsightArticle; index: number }) {
  return <article className="wi-guide-row"><span className="row-number">{String(index + 1).padStart(2, "0")}</span><div><GuideLabel locale={locale} article={article} /><h2><Link href={pathFor(locale, `insights/${article.slug}`)}>{local(locale, article.title)}</Link></h2><p>{local(locale, article.description)}</p><TextLink href={pathFor(locale, `insights/${article.slug}`)}>{text(locale, "Read the guide", "閱讀指南", "阅读指南")}</TextLink></div><Link className="wi-guide-row-image" href={pathFor(locale, `insights/${article.slug}`)} aria-label={local(locale, article.title)}><ImageReveal src={article.image} alt={local(locale, article.imageAlt)} sizes="(max-width: 768px) 100vw, 30vw" /></Link></article>;
}

export function InsightsIndex({ locale }: { locale: Locale }) {
  const [featured, ...others] = insightArticles;
  return <>
    <section className="wi-insights-lead" aria-labelledby="insights-index-title">
      <Image className="wi-insights-lead-image" src={featured.image} alt={local(locale, featured.imageAlt)} fill preload sizes="100vw" quality={85} />
      <div className="container wi-insights-lead-content">
        <nav className="breadcrumb" aria-label={text(locale, "Breadcrumb", "頁面路徑", "页面路径")}>
          <Link href={pathFor(locale)}>{text(locale, "Home", "首頁", "首页")}</Link><span aria-hidden="true">/</span><span aria-current="page">{text(locale, "Insights", "觀點與指南", "观点与指南")}</span>
        </nav>
        <div className="wi-insights-lead-copy">
          <h1 id="insights-index-title" className="section-label wi-insights-index-title">{text(locale, "Trust, governance & compliance insights", "信託、管治與合規觀點", "信托、治理与合规观点", "رؤى حول الاستئمان والحوكمة والامتثال")}</h1>
          <GuideLabel locale={locale} article={featured} />
          <h2 id="featured-guide-title"><Link href={pathFor(locale, `insights/${featured.slug}`)}>{local(locale, featured.title)}</Link></h2>
          <p>{local(locale, featured.description)}</p>
          <TextLink href={pathFor(locale, `insights/${featured.slug}`)}>{text(locale, "Read the guide", "閱讀指南", "阅读指南")}</TextLink>
        </div>
      </div>
    </section>
    <section className="container wi-insights-intro" aria-labelledby="insights-intro-title">
      <div><SectionLabel>{text(locale, "FIDERE INSIGHTS", "FIDERE 觀點與指南", "FIDERE 观点与指南")}</SectionLabel><h2 id="insights-intro-title">{text(locale, "The thinking behind\na considered structure.", "理解架構，\n從問題出發。", "理解架构，\n从问题出发。")}</h2></div>
      <p>{text(locale, "Guides to the practical questions behind trust governance, due diligence and cross-border administration. Written for understanding the arrangement, one subject at a time.", "圍繞信託治理、盡職審查及跨境管理的實務問題，逐一理解安排背後的考量。", "围绕信托治理、尽职调查及跨境管理的实务问题，逐一理解安排背后的考量。")}</p>
    </section>
    <section className="container wi-guide-collection">
      <SectionLabel>{text(locale, "EXPLORE THE GUIDES", "閱讀更多指南", "阅读更多指南")}</SectionLabel>
      {others.map((article, index) => <GuideRow key={article.slug} locale={locale} article={article} index={index + 1} />)}
      <p className="wi-editorial-note">{text(locale, "These educational guides draw on FIDERE’s published service and compliance information. They provide general context and do not replace the applicable documents or individual legal, tax or investment advice.", "本實務指南依據 FIDERE 已公佈的服務及合規資料整理，提供一般背景，不取代適用文件或個別法律、稅務及投資意見。", "本实务指南依据 FIDERE 已公布的服务及合规资料整理，提供一般背景，不取代适用文件或个别法律、税务及投资意见。")}</p>
    </section>
  </>;
}

export function SelectedInsights({ locale }: { locale: Locale }) {
  return <section className="section wi-selected-insights"><div className="container"><div className="wi-selected-heading"><div><SectionLabel>{text(locale, "SELECTED INSIGHTS", "精選觀點", "精选观点")}</SectionLabel><h2>{text(locale, "A closer look\nat the arrangement.", "進一步，\n理解安排。", "进一步，\n理解安排。")}</h2></div><TextLink href={pathFor(locale, "insights")}>{text(locale, "View all guides", "閱讀所有指南", "阅读所有指南")}</TextLink></div><div className="wi-selected-grid">{insightArticles.map((article) => <article key={article.slug}><GuideLabel locale={locale} article={article} /><h3><Link href={pathFor(locale, `insights/${article.slug}`)}>{local(locale, article.title)}</Link></h3><p>{local(locale, article.description)}</p><Link className="wi-arrow-link" href={pathFor(locale, `insights/${article.slug}`)} aria-label={`${text(locale, "Read", "閱讀", "阅读")} ${local(locale, article.title)}`}><Arrow /></Link></article>)}</div></div></section>;
}

export function InsightArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const article = insightArticles.find((entry) => entry.slug === slug);
  if (!article) notFound();
  const related = insightArticles.filter((entry) => article.related.includes(entry.slug));
  return <>
    <BreadcrumbStructuredData locale={locale} items={[
      { name: text(locale, "Home", "首頁", "首页") },
      { name: text(locale, "Insights", "觀點與指南", "观点与指南"), slug: "insights" },
      { name: local(locale, article.title), slug: `insights/${slug}` },
    ]} />
    <article className="wi-article" aria-labelledby="guide-title">
      <header className="wi-article-hero">
        <div className="wi-article-cover"><Image src={article.image} alt={local(locale, article.imageAlt)} fill preload sizes="100vw" quality={85} /></div>
        <div className="container wi-article-heading">
          <nav aria-label={text(locale, "Return to insights", "返回觀點與指南", "返回观点与指南")}><TextLink className="wi-back-link" href={pathFor(locale, "insights")}>{text(locale, "Back to insights", "返回觀點與指南", "返回观点与指南")}</TextLink></nav>
          <GuideLabel locale={locale} article={article} />
          <h1 id="guide-title">{local(locale, article.title)}</h1>
          <p className="wi-article-deck">{local(locale, article.description)}</p>
        </div>
      </header>
      <div className="container wi-article-layout">
        <div className="wi-article-body">
          <p className="wi-article-introduction">{local(locale, article.introduction)}</p>
          {article.sections.map((section, index) => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <span className="row-number">0{index + 1}</span><h2 id={`${section.id}-title`}>{local(locale, section.title)}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{local(locale, paragraph)}</p>)}
          </section>)}
          <footer className="wi-article-context">
            <SectionLabel>{text(locale, "CONTEXT & FURTHER READING", "背景與延伸閱讀", "背景与延伸阅读")}</SectionLabel>
            <p>{text(locale, "This educational guide was prepared from FIDERE’s published trust, corporate and compliance information. It provides general context, not legal, tax or investment advice. Specific arrangements depend on the governing documents, client circumstances and applicable requirements.", "本實務指南根據 FIDERE 已公佈的信託、企業及合規資料撰寫，僅提供一般背景，不構成法律、稅務或投資意見。具體安排取決於管治文件、客戶情況及適用要求。", "本实务指南根据 FIDERE 已公布的信托、企业及合规资料撰写，仅提供一般背景，不构成法律、税务或投资意见。具体安排取决于治理文件、客户情况及适用要求。")}</p>
            <div>{article.furtherReading.map((entry) => <TextLink key={entry.slug} href={pathFor(locale, entry.slug)}>{local(locale, entry.title)}</TextLink>)}<TextLink href={pathFor(locale, "compliance-kyc")}>{text(locale, "Published Compliance & KYC policy", "已公佈合規及客戶審查政策", "已公布合规及客户审查政策")}</TextLink></div>
          </footer>
        </div>
        <aside className="wi-article-index">
          <SectionLabel>{text(locale, "IN THIS GUIDE", "本篇內容", "本篇内容")}</SectionLabel>
          <nav aria-label={text(locale, "Article contents", "文章目錄", "文章目录")}>{article.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{local(locale, section.title)}</a>)}</nav>
          <TextLink href={pathFor(locale, "insights")}>{text(locale, "All guides", "所有指南", "所有指南")}</TextLink>
        </aside>
      </div>
    </article>
    <section className="section container wi-article-related">
      <div className="wi-selected-heading"><div><SectionLabel>{text(locale, "RELATED READING", "相關閱讀", "相关阅读")}</SectionLabel><h2>{text(locale, "Continue the conversation.", "延續思考。", "延续思考。")}</h2></div><TextLink href={pathFor(locale, "insights")}>{text(locale, "All insights", "所有觀點與指南", "所有观点与指南")}</TextLink></div>
      {related.map((item, index) => <GuideRow key={item.slug} locale={locale} article={item} index={index} />)}
    </section>
  </>;
}
