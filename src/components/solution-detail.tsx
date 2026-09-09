import { AdvisoryHero } from "./inner-heroes";
import { SolutionBody } from "./solution-bodies";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { SectionLabel, TextLink } from "@/components/editorial";
import { SectionNav } from "@/components/section-nav";
import { pathFor, text, type Locale } from "@/lib/site";
import { solutionDetails, type SolutionCopy } from "@/lib/solutions";

const local = (locale: Locale, copy: SolutionCopy) => text(locale, ...copy);

export function SolutionDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const solution = solutionDetails.find((item) => item.slug === slug);
  if (!solution) return null;

  const title = local(locale, solution.title);
  const chapters = [
    { id: "overview", label: text(locale, "Overview", "概覽", "概览") },
    { id: "scope", label: text(locale, "Scope", "服務範圍", "服务范围") },
    { id: "considerations", label: text(locale, "Considerations", "相關考量", "相关考量") },
  ];

  return (
    <>
      <BreadcrumbStructuredData locale={locale} items={[
        { name: text(locale, "Home", "首頁", "首页") },
        { name: text(locale, "Solutions", "信託方案", "信托方案"), slug: "solutions" },
        { name: title, slug: `solutions/${slug}` },
      ]} />
      <AdvisoryHero locale={locale} category={text(locale,"TRUST · ADMINISTRATION · CONTINUITY","信託 · 管理 · 延續","信托 · 管理 · 延续")} title={locale === "en" && ["private-trust","corporate-trust"].includes(slug) ? title.replace(" Trust","\nTrust") : title} description={local(locale,solution.description)} image={solution.image} imageAlt={local(locale,solution.imageAlt)}/>
      <SectionNav label={text(locale, "Service chapters", "服務章節", "服务章节")} items={chapters} />
      <SolutionBody locale={locale} solution={solution}/>
      <section className="section container related-solutions">
        <div className="section-heading">
          <SectionLabel>{text(locale, "RELATED SOLUTIONS", "相關方案", "相关方案")}</SectionLabel>
          <h2 className="editorial-title">{text(locale, "Consider the wider structure.", "進一步考慮整體架構。", "进一步考虑整体架构。")}</h2>
        </div>
        {solution.related.map((relatedSlug) => {
          const related = solutionDetails.find((item) => item.slug === relatedSlug);
          if (!related) return null;
          return (
            <div className="related-row" key={relatedSlug}>
              <TextLink href={pathFor(locale, `solutions/${relatedSlug}`)}>{local(locale, related.title)}</TextLink>
              <p>{local(locale, related.description)}</p>
            </div>
          );
        })}
      </section>
      <section className="section cta-editorial">
        <div className="container cta-grid">
          <SectionLabel>{text(locale, "LET’S TALK", "開啟對話", "开启对话")}</SectionLabel>
          <div>
            <h2>{text(locale, "Start with your requirements.", "從您的需要開始。", "从您的需要开始。")}</h2>
            <p>{title}</p>
            <TextLink href={`${pathFor(locale, "contact")}?interest=${solution.slug}`}>{text(locale, "Enquire about this service", "查詢此項服務", "咨询此项服务")}</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
