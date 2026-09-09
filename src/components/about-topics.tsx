import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { ImageReveal, SectionLabel, TextLink } from "@/components/editorial";
import { SectionNav } from "@/components/section-nav";
import { aboutTopics, type AboutTopicCopy } from "@/lib/about-topics";
import { company, pathFor, text, type Locale } from "@/lib/site";
import "./topic-pages.css";

const local = (locale: Locale, copy: AboutTopicCopy) => text(locale, ...copy);

function Breadcrumb({ locale, slug }: { locale: Locale; slug: string }) {
  const topic = aboutTopics.find((item) => item.slug === slug)!;
  return <nav className="breadcrumb" aria-label={text(locale, "Breadcrumb", "頁面路徑", "页面路径")}><Link href={pathFor(locale)}>FIDERE</Link><span aria-hidden="true">/</span><Link href={pathFor(locale, "about")}>{text(locale, "About", "關於我們", "关于我们")}</Link><span aria-hidden="true">/</span><span aria-current="page">{local(locale, topic.title)}</span></nav>;
}

function RelatedAbout({ locale, current }: { locale: Locale; current: string }) {
  return <section className="section container topic-related"><SectionLabel>{text(locale, "MORE ABOUT FIDERE", "進一步了解 FIDERE", "进一步了解 FIDERE")}</SectionLabel>{aboutTopics.filter((topic) => topic.slug !== current).map((topic) => <div className="related-row" key={topic.slug}><TextLink href={pathFor(locale, `about/${topic.slug}`)}>{local(locale, topic.title)}</TextLink><p>{local(locale, topic.description)}</p></div>)}</section>;
}

function WhoWeAre({ locale }: { locale: Locale }) {
  const audiences: { title: AboutTopicCopy; copy: AboutTopicCopy; href: string }[] = [
    { title: ["Private clients", "私人客戶", "私人客户"], copy: ["Trust arrangements for the holding, administration and succession of private assets.", "就私人資產的持有、管理及傳承作出信託安排。", "就私人资产的持有、管理及传承作出信托安排。"], href: "solutions/private-trust" },
    { title: ["Families", "家族", "家族"], copy: ["Family-office administration, governance and coordination across generations.", "跨世代的家族辦公室管理、治理及協調。", "跨世代的家族办公室管理、治理及协调。"], href: "solutions/family-office" },
    { title: ["International businesses", "國際企業", "国际企业"], copy: ["Corporate structures, fiduciary appointments and asset or transaction administration.", "企業架構、受託委任，以及資產或交易管理。", "企业架构、受托委任，以及资产或交易管理。"], href: "solutions/corporate-trust" },
  ];
  return <>
    <section className="topic-hero topic-identity-hero container">
      <Breadcrumb locale={locale} slug="who-we-are" />
      <div className="topic-identity-heading"><SectionLabel>{text(locale, "WHO WE ARE", "關於 FIDERE", "关于 FIDERE")}</SectionLabel><h1>{text(locale, "Hong Kong based.\nA wider perspective.", "立足香港。\n放眼更遠。", "立足香港。\n放眼更远。")}</h1><p>{local(locale, aboutTopics[0].description)}</p></div>
      <ImageReveal src="/images/hero-hong-kong.jpg" alt={text(locale, "Hong Kong’s harbour and skyline", "香港海港與天際線", "香港海港与天际线")} className="topic-panorama" sizes="100vw" />
    </section>
    <SectionNav label={text(locale, "Who we are", "關於 FIDERE", "关于 FIDERE")} items={[{ id: "identity", label: text(locale, "Our identity", "我們的身份", "我们的身份") }, { id: "clients", label: text(locale, "Our clients", "我們的客戶", "我们的客户") }]} />
    <section className="section container topic-statement-grid" id="identity">
      <div><SectionLabel index="01">FIDERE TRUST LIMITED</SectionLabel><h2>{text(locale, "A trust company,\nwith an administrative role.", "以信託為本，\n以管理為責。", "以信托为本，\n以管理为责。")}</h2></div>
      <div className="prose"><p className="body-large">{text(locale, "We work with clients whose assets, family interests or businesses call for a considered holding and administrative structure.", "當客戶的資產、家族利益或業務需要審慎的持有與管理架構時，我們與客戶一起作出安排。", "当客户的资产、家族利益或业务需要审慎的持有与管理架构时，我们与客户一起作出安排。")}</p><p>{text(locale, "Our services connect trust administration, asset custody coordination, succession planning and corporate fiduciary responsibilities. They are considered around the purpose of the arrangement and the circumstances of the client.", "我們的服務連結信託管理、資產託管協調、傳承規劃與企業受託責任，並圍繞安排的目的及客戶情況加以考慮。", "我们的服务连接信托管理、资产托管协调、传承规划与企业受托责任，并围绕安排的目的及客户情况加以考虑。")}</p><p>{text(locale, "Hong Kong is our base. Where an arrangement involves other jurisdictions, we consider the relevant account, institutional and administrative requirements within the agreed scope.", "香港是我們的根基。當安排涉及其他司法管轄區時，我們會在約定範圍內考慮相關賬戶、機構及行政要求。", "香港是我们的根基。当安排涉及其他司法管辖区时，我们会在约定范围内考虑相关账户、机构及行政要求。")}</p><TextLink href={pathFor(locale, "about/our-approach")}>{text(locale, "How we approach our work", "了解我們的工作方式", "了解我们的工作方式")}</TextLink></div>
    </section>
    <section className="section container topic-audiences" id="clients"><div className="section-heading"><SectionLabel index="02">{text(locale, "WHO WE WORK WITH", "我們服務的客戶", "我们服务的客户")}</SectionLabel><h2>{text(locale, "Different circumstances.\nA clear sense of purpose.", "情況各有不同，\n目的始終清晰。", "情况各有不同，\n目的始终清晰。")}</h2></div>{audiences.map((audience, index) => <article className="topic-audience-row" key={audience.href}><span className="row-number">0{index + 1}</span><h3>{local(locale, audience.title)}</h3><p>{local(locale, audience.copy)}</p><TextLink href={pathFor(locale, audience.href)}>{text(locale, "Explore", "了解更多", "了解更多")}</TextLink></article>)}</section>
    <RelatedAbout locale={locale} current="who-we-are" />
  </>;
}

function OurApproach({ locale }: { locale: Locale }) {
  const stages: { title: AboutTopicCopy; copy: AboutTopicCopy }[] = [
    { title: ["Understand the circumstances", "了解實際情況", "了解实际情况"], copy: ["The purpose of the arrangement, its assets, beneficiaries and relevant jurisdictions establish the context. Due diligence helps us understand the client and the activity proposed.", "安排目的、資產、受益人及相關司法管轄區構成考慮基礎。盡職審查協助我們了解客戶及擬進行的活動。", "安排目的、资产、受益人及相关司法管辖区构成考虑基础。尽职调查协助我们了解客户及拟进行的活动。"] },
    { title: ["Consider the structure", "考慮合適架構", "考虑合适架构"], copy: ["Trust and corporate arrangements are considered together with the responsibilities they create. The aim is a coherent relationship between ownership, administration and the intended purpose.", "信託與企業安排須連同其所產生的責任一併考慮，讓所有權、管理與預期目的之間保持一致。", "信托与企业安排须连同其所产生的责任一并考虑，让所有权、管理与预期目的之间保持一致。"] },
    { title: ["Coordinate the arrangements", "協調相關安排", "协调相关安排"], copy: ["We connect the relevant trust, account, custody and transaction administration within the agreed scope, working with the institutions and parties involved.", "我們在約定範圍內，與相關機構及各方合作，連結信託、賬戶、託管及交易管理。", "我们在约定范围内，与相关机构及各方合作，连接信托、账户、托管及交易管理。"] },
    { title: ["Administer over time", "持續管理", "持续管理"], copy: ["The role continues beyond establishing a structure. Ongoing administration and review take account of relevant changes in the client relationship and its activities.", "建立架構並非工作的終點。持續管理與覆核會考慮客戶關係及活動的相關變化。", "建立架构并非工作的终点。持续管理与复核会考虑客户关系及活动的相关变化。"] },
  ];
  return <>
    <section className="topic-hero container"><Breadcrumb locale={locale} slug="our-approach" /><div className="topic-approach-heading"><div><SectionLabel>{text(locale, "OUR APPROACH", "我們的方法", "我们的方法")}</SectionLabel><h1>{text(locale, "Begin with purpose.\nWork through the detail.", "以目的為先，\n從細節落實。", "以目的为先，\n从细节落实。")}</h1></div><p>{local(locale, aboutTopics[1].description)}</p></div></section>
    <section className="section container topic-method-layout"><aside><ImageReveal src="/images/hong-kong-architecture.jpg" alt={text(locale, "Architectural detail in Hong Kong", "香港建築細節", "香港建筑细节")} className="topic-method-photo" /><p className="topic-image-caption">{text(locale, "Structure is considered as a whole.", "從整體考慮架構。", "从整体考虑架构。")}</p></aside><div><SectionLabel>{text(locale, "A WORKING PERSPECTIVE", "我們的工作視角", "我们的工作视角")}</SectionLabel><ol className="topic-methods">{stages.map((stage, index) => <li key={stage.title[0]}><span className="row-number">0{index + 1}</span><div><h2>{local(locale, stage.title)}</h2><p>{local(locale, stage.copy)}</p></div></li>)}</ol></div></section>
    <section className="section topic-approach-note"><div className="container topic-statement-grid"><SectionLabel>{text(locale, "A CONSIDERED SCOPE", "審慎界定範圍", "审慎界定范围")}</SectionLabel><div className="prose"><h2>{text(locale, "The right arrangement\ndepends on the context.", "合適的安排，\n須考慮實際情況。", "合适的安排，\n须考虑实际情况。")}</h2><p>{text(locale, "Services depend on client eligibility, relevant jurisdictions, account arrangements and compliance review. Legal and tax questions require advice appropriate to the circumstances. No structure alone guarantees a financial, tax or asset-protection outcome.", "服務取決於客戶資格、相關司法管轄區、賬戶安排及合規審查。法律與稅務問題須尋求切合情況的意見。任何架構本身均不保證財務、稅務或資產保障結果。", "服务取决于客户资格、相关司法管辖区、账户安排及合规审查。法律与税务问题须寻求切合情况的意见。任何架构本身均不保证财务、税务或资产保障结果。")}</p><TextLink href={pathFor(locale, "contact")}>{text(locale, "Discuss your circumstances", "討論您的需要", "讨论您的需要")}</TextLink></div></div></section>
    <RelatedAbout locale={locale} current="our-approach" />
  </>;
}

function Governance({ locale }: { locale: Locale }) {
  return <>
    <section className="topic-hero container"><Breadcrumb locale={locale} slug="governance" /><div className="topic-governance-heading"><SectionLabel>{text(locale, "GOVERNANCE", "管治與責任", "治理与责任")}</SectionLabel><h1>{text(locale, "Responsibility has\na defined framework.", "以明確框架，\n承擔責任。", "以明确框架，\n承担责任。")}</h1><p>{local(locale, aboutTopics[2].description)}</p></div></section>
    <section className="section topic-regulatory-panel"><div className="container topic-regulatory-grid"><div><SectionLabel>{text(locale, "OUR REGULATORY IDENTITY", "我們的監管身份", "我们的监管身份")}</SectionLabel><h2>{company.name}</h2><p>{text(locale, "Hong Kong", "香港", "香港")}</p></div><div><span className="eyebrow">{text(locale, "TCSP LICENCE NUMBER", "信託或公司服務提供者牌照號碼", "信托或公司服务提供者牌照号码")}</span><p className="topic-licence">{company.licence}</p><p>{text(locale, "Registered as a Trust Company under section 78(1) of the Trustee Ordinance (Cap. 29), as set out in FIDERE’s regulatory disclosure.", "FIDERE 的監管披露載明，公司根據《受託人條例》（第29章）第78(1)條註冊為信託公司。", "FIDERE 的监管披露载明，公司根据《受托人条例》（第29章）第78(1)条注册为信托公司。")}</p><TextLink href={pathFor(locale, "regulatory-status")}>{text(locale, "Read the regulatory disclosure", "閱讀監管披露", "阅读监管披露")}</TextLink></div></div></section>
    <section className="section container topic-governance-body"><div className="section-heading"><SectionLabel>{text(locale, "GOVERNANCE IN PRACTICE", "日常管治", "日常治理")}</SectionLabel><h2>{text(locale, "From the appointment\nto the ongoing relationship.", "從接受委任，\n到持續履責。", "从接受委任，\n到持续履责。")}</h2></div><div className="topic-governance-columns"><article><span className="row-number">01</span><h3>{text(locale, "Defined responsibilities", "明確的責任", "明确的责任")}</h3><p>{text(locale, "Trustee and administrative roles are considered in relation to the governing documents and agreed scope. Each arrangement must sit within the lawful service scope for the relevant activity and territory.", "受託人及管理角色須按管治文件與約定範圍考慮。每項安排均須在相關活動及地域的合法服務範圍內進行。", "受托人及管理角色须按治理文件与约定范围考虑。每项安排均须在相关活动及地域的合法服务范围内进行。")}</p></article><article><span className="row-number">02</span><h3>{text(locale, "An understood relationship", "充分了解客戶關係", "充分了解客户关系")}</h3><p>{text(locale, "Client due diligence addresses identity, ownership and the purpose of the proposed activity. Additional information or enhanced review may be needed where the circumstances require it.", "客戶盡職審查涵蓋身份、所有權及擬進行活動的目的，並可能按情況要求補充資料或加強審查。", "客户尽职调查涵盖身份、所有权及拟进行活动的目的，并可能按情况要求补充资料或加强审查。")}</p></article><article><span className="row-number">03</span><h3>{text(locale, "Continuing review", "持續覆核", "持续复核")}</h3><p>{text(locale, "Ownership, business and transaction changes may lead to updated information or further review. Records are retained in accordance with applicable requirements, and cooperation with authorities takes place where legally required.", "所有權、業務及交易的變化可能需要更新資料或進一步覆核。記錄按適用要求保存，並在法律要求的情況下配合主管機關。", "所有权、业务及交易的变化可能需要更新资料或进一步复核。记录按适用要求保存，并在法律要求的情况下配合主管机关。")}</p></article></div><TextLink href={pathFor(locale, "compliance")}>{text(locale, "Explore compliance & governance", "了解合規與管治", "了解合规与治理")}</TextLink></section>
    <RelatedAbout locale={locale} current="governance" />
  </>;
}

export function AboutTopic({ locale, slug }: { locale: Locale; slug: string }) {
  const topic = aboutTopics.find((item) => item.slug === slug);
  if (!topic) return null;

  return <>
    <BreadcrumbStructuredData locale={locale} items={[
      { name: text(locale, "Home", "首頁", "首页") },
      { name: text(locale, "About", "關於我們", "关于我们"), slug: "about" },
      { name: local(locale, topic.title), slug: `about/${slug}` },
    ]} />
    {slug === "who-we-are" ? <WhoWeAre locale={locale} /> : slug === "our-approach" ? <OurApproach locale={locale} /> : <Governance locale={locale} />}
  </>;
}
