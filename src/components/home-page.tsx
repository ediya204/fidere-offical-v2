import Image from "next/image";
import { SelectedInsights } from "./insights-pages";
import Link from "next/link";
import { type Locale, company, pathFor, text } from "@/lib/site";
import { Arrow, CTAEditorial, ImageReveal, SectionLabel, TextLink } from "./editorial";
import { PersonaSelector } from "./persona-selector";
import { LocationSection } from "./location-section";
import { HomeStructuredData } from "./structured-data";
import "./home-white.css";

export function HomePage({locale}:{locale:Locale}) {
 const solutions=[
  ["private-trust",text(locale,"Private Trust","私人信託","私人信托"),text(locale,"A framework for holding and administering personal wealth.","持有與管理私人財富的信託架構。","持有与管理私人财富的信托架构。")],
  ["family-office",text(locale,"Family Office","家族辦公室","家族办公室"),text(locale,"Coordinated administration for complex family interests.","為多元家族權益提供協調有序的行政安排。","为多元家族权益提供协调有序的行政安排。")],
  ["corporate-trust",text(locale,"Corporate Trust","企業信託","企业信托"),text(locale,"Trustee and corporate services for business structures.","為企業架構提供受託及公司服務。","为企业架构提供受托及公司服务。")],
  ["transaction-support",text(locale,"Transaction Support","交易支援","交易支持"),text(locale,"Administration around the movement and settlement of assets.","圍繞資產流轉與結算的行政支援。","围绕资产流转与结算的行政支持。")],
  ["equity-asset-custody",text(locale,"Equity & Asset Custody","股權及資產託管","股权及资产托管"),text(locale,"Holding arrangements with clear records and responsibilities.","權責明確、紀錄清晰的資產持有安排。","权责明确、记录清晰的资产持有安排。")],
  ["succession-planning",text(locale,"Succession Planning","傳承規劃","传承规划"),text(locale,"Continuity of ownership, guided by your intentions.","以您的意願，安排財富的長遠傳承。","以您的意愿，安排财富的长远传承。")],
 ];
 const clients=[
  {title:text(locale,"Private Clients","私人客戶","私人客户"),body:text(locale,"We work with individuals to put considered trust and succession arrangements around their assets.","我們與私人客戶合作，為其資產設立周全的信託與傳承安排。","我们与私人客户合作，为其资产设立周全的信托与传承安排。"),slug:"private-trust"},
  {title:text(locale,"Family Offices","家族辦公室","家族办公室"),body:text(locale,"We support the administration of family wealth, with attention to governance and continuity.","我們支援家族財富的行政管理，重視管治與安排的延續。","我们支持家族财富的行政管理，重视治理与安排的延续。"),slug:"family-office"},
  {title:text(locale,"Corporate & Institutional Clients","企業及機構客戶","企业及机构客户"),body:text(locale,"We provide fiduciary and corporate administration for business interests and transactions.","我們為企業權益與交易提供受託及公司行政服務。","我们为企业权益与交易提供受托及公司行政服务。"),slug:"corporate-trust"},
 ];
 const principles=[
  [text(locale,"Integrity","誠信","诚信"),text(locale,"Clear responsibilities. Considered decisions.","權責清晰，決策審慎。","权责清晰，决策审慎。")],
  [text(locale,"Discretion","審慎保密","审慎保密"),text(locale,"Respect for the private nature of your affairs.","尊重事務的私密性。","尊重事务的私密性。")],
  [text(locale,"Independent Judgement","獨立判斷","独立判断"),text(locale,"Attention to the purpose of each structure.","專注每一架構的設立目的。","专注每一架构的设立目的。")],
  [text(locale,"Long-term Stewardship","長遠守護","长远守护"),text(locale,"A perspective that extends beyond today.","以超越當下的視野，承擔責任。","以超越当下的视野，承担责任。")],
 ];
  return <div className="home-page">
  <HomeStructuredData locale={locale}/>
  <section className="home-hero" aria-labelledby="hero-title">
   <div className="home-hero-layout">
    <Image
     className="hero-photograph"
     src="/images/hero-fidere-wake.webp"
     alt={text(
      locale,
      "A speedboat tracing a circular wake across deep blue water",
      "快艇在深藍海面劃出環形航跡",
      "快艇在深蓝海面划出环形航迹",
      "قارب سريع يرسم مساراً دائرياً على مياه زرقاء عميقة",
     )}
     fill
     priority
     sizes="100vw"
     quality={90}
    />
    <div className="hero-content">
     <h1 id="hero-title">{text(locale, "FIDERE TRUST", "承明信托", "承明信托", "FIDERE TRUST")}</h1>
     <p className="hero-motto">{text(
      locale,
      "Purpose made clear;\nTrust carried forward.",
      "心即理，承則明；\n行即知，信達遠。",
      "心即理，承则明；\n行即知，信达远。",
      "غاية واضحة؛\nوأمانة تمتد عبر الزمن.",
     )}</p>
     <span className="hero-accent" aria-hidden="true" />
    </div>
   </div>
   <PersonaSelector locale={locale}/>
  </section>

  <section className="section who-section" id="who-we-serve"><div className="container"><div className="section-heading offset-heading"><SectionLabel index="01">{text(locale,"WHO WE SERVE","服務對象","服务对象")}</SectionLabel><h2>{text(locale,"Different structures.\nOne fiduciary standard.","不同所需。\n同一受託標準。","不同所需。\n同一受托标准。")}</h2></div><div className="client-rows">{clients.map((client,i)=><Link key={client.slug} className="client-row" href={pathFor(locale,`solutions/${client.slug}`)}><span className="row-number">0{i+1}</span><h3>{client.title}</h3><p>{client.body}</p><Arrow/></Link>)}</div></div></section>

  <section className="role-section"><div className="container role-grid"><div className="role-image"><ImageReveal src="/images/hong-kong-architecture.jpg" alt={locale==="ar"?"الخطوط المتناسقة للعمارة الحديثة في هونغ كونغ":"The measured lines of Hong Kong’s modern architecture"}/><div className="image-caption"><span>{text(locale,"A FOUNDATION FOR THE LONG TERM","為長遠建立基礎","为长远建立基础")}</span><span>{locale==="ar"?"هونغ كونغ":"HONG KONG"}</span></div></div><div className="role-copy statement-copy"><SectionLabel index="02">{text(locale,"OUR ROLE","我們的角色","我们的角色")}</SectionLabel><h2>{text(locale,"We act as trustee,\nadministrator and\nlong-term partner.","受託管理，\n行政協調，\n長遠同行。","受托管理，\n行政协调，\n长远同行。")}</h2><p>{text(locale,"A trust begins with a clear purpose. We help give that purpose a structure — and support its administration over time.","信託，始於清晰的目的。我們以適切的架構承載這份託付，並在日後持續支援其管理。","信托，始于清晰的目的。我们以适切的架构承载这份托付，并在日后持续支持其管理。")}</p><p>{text(locale,"From holding assets to planning succession, our role is to coordinate the details with care and a consistent fiduciary perspective.","從資產持有到傳承規劃，我們以審慎的受託視角，協調安排中的每個細節。","从资产持有到传承规划，我们以审慎的受托视角，协调安排中的每个细节。")}</p><TextLink href={pathFor(locale,"about")}>{text(locale,"Our approach","我們的理念","我们的理念")}</TextLink></div></div></section>

  <section className="section solutions-section"><div className="container"><div className="section-heading solutions-heading"><div><SectionLabel index="03">{text(locale,"OUR SOLUTIONS","信託方案","信托方案")}</SectionLabel><h2>{text(locale,"Structures built around\nthe asset, not the product.","從資產出發，\n構建合適的安排。","从资产出发，\n构建合适的安排。")}</h2></div><TextLink href={pathFor(locale,"solutions")}>{text(locale,"Explore all solutions","探索所有方案","探索所有方案")}</TextLink></div><div className="service-list">{solutions.map(([slug,title,body],i)=><Link className="solution-row" key={slug} href={pathFor(locale,`solutions/${slug}`)}><span className="row-number">0{i+1}</span><h3>{title}</h3><p>{body}</p><Arrow/></Link>)}</div></div></section>

  <LocationSection locale={locale}/>

  <section className="section principles-section"><div className="container"><div className="section-heading offset-heading"><SectionLabel index="05">{text(locale,"OUR PRINCIPLES","行事原則","行事原则")}</SectionLabel><h2>{text(locale,"Trust is not a product.\nIt is a responsibility.","信託所承載的，\n是一份責任。","信托所承载的，\n是一份责任。")}</h2></div><div className="principles-grid">{principles.map(([title,copy],i)=><div className="principle" key={title}><span className="section-index">0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

  <section className="section home-compliance dark-section"><div className="container compliance-grid"><div className="section-heading"><SectionLabel index="06">{text(locale,"COMPLIANCE & GOVERNANCE","合規與管治","合规与治理")}</SectionLabel><h2>{text(locale,"Governance is part\nof the structure.","以管治，\n為架構奠基。","以治理，\n为架构奠基。")}</h2><p>{text(locale,"Understanding the client. Verifying ownership. Knowing the source of wealth. Our risk-based framework brings due diligence and ongoing review into the life of each relationship.","了解客戶、核實擁有權、理解財富來源。我們以風險為本，將盡職審查及持續覆核貫穿每段客戶關係。","了解客户、核实拥有权、理解财富来源。我们以风险为本，将尽职审查及持续复核贯穿每段客户关系。")}</p><TextLink className="light-link" href={pathFor(locale,"compliance")}>{text(locale,"Read our compliance framework","了解我們的合規框架","了解我们的合规框架")}</TextLink></div><div className="licence-block"><div className="fidere-mark" aria-hidden="true"><Image src="/brand/fidere-logo.png" alt="" width={600} height={125}/></div><span className="eyebrow">{company.name}</span><span>{locale==="ar"?"هونغ كونغ":"HONG KONG"}</span><div className="licence-rule"/><p>{text(locale,"Trust or Company Service Provider","信託或公司服務提供者","信托或公司服务提供者")}</p><span className="licence-number">{text(locale,"Licence No.","牌照編號","牌照编号")} {company.licence}</span><Link href={pathFor(locale,"regulatory-status")}>{text(locale,"Regulatory status","監管地位","监管地位")}<span aria-hidden="true">↗</span></Link></div></div></section>

  <section className="hong-kong-section"><div className="container hong-kong-grid"><div className="hong-kong-copy"><SectionLabel index="07">{text(locale,"WHY HONG KONG","為何選擇香港","为何选择香港")}</SectionLabel><h2>{text(locale,"A common-law\nfoundation for\nglobal wealth.","以普通法為基，\n連接全球財富。","以普通法为基，\n连接全球财富。")}</h2><p>{text(locale,"An international financial centre with a common-law trust framework. A connected setting for cross-border assets and planning across generations.","香港是國際金融中心，具備普通法信託框架，為跨境資產及世代規劃提供互聯的環境。","香港是国际金融中心，具备普通法信托框架，为跨境资产及世代规划提供互联的环境。")}</p><p className="legal-note">{text(locale,"Each arrangement depends on individual circumstances and appropriate legal and tax advice.","具體安排取決於個人情況及適切的法律與稅務意見。","具体安排取决于个人情况及适切的法律与税务意见。")}</p><TextLink href={pathFor(locale,"about")}>{text(locale,"Our Hong Kong foundation","我們的香港根基","我们的香港根基")}</TextLink></div><div className="hong-kong-image"><ImageReveal src="/images/harbour-detail.jpg" alt={locale==="ar"?"ميناء فيكتوريا والواجهة البحرية المضاءة في هونغ كونغ":"Victoria Harbour and Hong Kong’s illuminated waterfront"}/><span className="vertical-caption">{locale==="ar"?"هونغ كونغ — رؤية عالمية":"HONG KONG — A GLOBAL PERSPECTIVE"}</span></div></div></section>
  <SelectedInsights locale={locale}/>
  <CTAEditorial locale={locale}/>
 </div>;
}
