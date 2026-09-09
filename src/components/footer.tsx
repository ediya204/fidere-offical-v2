import Image from "next/image";
import Link from "next/link";
import { aboutTopics } from "@/lib/about-topics";
import { complianceTopics } from "@/lib/compliance-topics";
import { solutionDetails } from "@/lib/solutions";
import { wealthTopics } from "@/lib/wealth-topics";
import { type Locale, company, legalNavigation, navigation, pathFor, text } from "@/lib/site";
import "./footer-reference.css";

type FooterTopic = { slug: string; title: readonly [string, string, string] };
const footerTopics: Record<string, FooterTopic[]> = {
  about: aboutTopics,
  solutions: solutionDetails,
  "wealth-management": wealthTopics,
  compliance: complianceTopics,
};
const footerColumns = [["about", "insights"], ["solutions"], ["wealth-management"], ["compliance", "contact"]];

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-identity">
            <Link href={pathFor(locale)} className="brand">
              <Image src="/brand/fidere-logo.png" width={600} height={125} alt="FIDERE TRUST — Trusted partner. Lasting value." />
            </Link>
            <p>{text(locale, "Hong Kong based.\nInternational in perspective.", "立足香港。\n以國際視野，作長遠安排。", "立足香港。\n以国际视野，作长远安排。")}</p>
            <div className="footer-office">
              <span className="eyebrow">{locale==="ar"?"هونغ كونغ":"HONG KONG"}</span>
              <address lang="en" dir="ltr">{company.address}</address>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </div>
          </div>
          <nav className="footer-nav" aria-label={text(locale, "Footer navigation", "頁尾導覽", "页尾导航")}>
            {footerColumns.map((column, index) => (
              <div className="footer-nav-column" key={index}>
                {column.map((slug) => {
                  const item = navigation.find((entry) => entry.slug === slug);
                  if (!item) return null;
                  const topics = footerTopics[slug];
                  return (
                    <div className="footer-nav-group" key={slug}>
                      <h2 className="footer-nav-heading"><Link href={pathFor(locale, slug)}>{text(locale, item.en, item.tc, item.sc)}</Link></h2>
                      {topics && <ul className="footer-topic-links">{topics.map((topic) => (
                        <li key={topic.slug}><Link href={pathFor(locale, `${slug}/${topic.slug}`)}>{text(locale, ...topic.title)}</Link></li>
                      ))}</ul>}
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <nav aria-label={text(locale, "Legal information", "法律資訊", "法律信息")}>
            {legalNavigation.map((item) => <Link key={item.slug} href={pathFor(locale, item.slug)}>{text(locale, item.en, item.tc, item.sc)}</Link>)}
          </nav>
          <span>© 2026 {company.name}</span>
          <a className="back-top" href="#top" aria-label={text(locale, "Back to top", "返回頁首", "返回页首")}>↑</a>
        </div>
        <div className="footer-regulatory">
          <span>{company.name}</span>
          <p>{text(locale, `Hong Kong Trust or Company Service Provider · Licence No. ${company.licence}. Services are subject to eligibility, applicable law and agreed terms.`, `香港信託或公司服務提供者 · 牌照編號 ${company.licence}。服務須符合客戶資格、適用法律及協議條款。`, `香港信托或公司服务提供者 · 牌照编号 ${company.licence}。服务须符合客户资格、适用法律及协议条款。`)}</p>
        </div>
      </div>
    </footer>
  );
}
