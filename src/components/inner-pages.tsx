import { InstitutionHero, BusinessHero } from "./inner-heroes";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { CTAEditorial, ImageReveal, PageHero, SectionLabel, TextLink } from "@/components/editorial";
import { SectionNav } from "@/components/section-nav";
import { company, pathFor, text, type Locale } from "@/lib/site";

type Copy = readonly [string, string, string];
const local = (locale: Locale, copy: Copy) => text(locale, ...copy);

const principles: { title: Copy; description: Copy }[] = [
  {
    title: ["Integrity", "誠信", "诚信"],
    description: ["Clear responsibilities. Careful decisions. A considered approach to every instruction.", "清晰的責任、審慎的決策，認真對待每一項委託。", "清晰的责任、审慎的决策，认真对待每一项委托。"],
  },
  {
    title: ["Discretion", "審慎保密", "审慎保密"],
    description: ["Respect for the personal circumstances behind each structure.", "尊重每項架構背後的個人情況與私隱。", "尊重每项架构背后的个人情况与隐私。"],
  },
  {
    title: ["Independent judgement", "獨立判斷", "独立判断"],
    description: ["Decisions guided by the purpose and responsibilities of the trust.", "以信託的目的與責任作為判斷依據。", "以信托的目的与责任作为判断依据。"],
  },
  {
    title: ["Long-term stewardship", "長遠守護", "长远守护"],
    description: ["Continuity in administration, with the next generation in view.", "持續而有序的管理，兼顧下一代的需要。", "持续而有序的管理，兼顾下一代的需要。"],
  },
];

export function About({ locale }: { locale: Locale }) {
  return (
    <>
      <InstitutionHero title={text(locale,"A considered approach.\nA longer view.","審慎於當下。\n著眼於長遠。","审慎于当下。\n着眼于长远。")} image="/images/hong-kong-architecture.jpg" imageAlt={text(locale,"The architecture of Hong Kong","香港建築景觀","香港建筑景观")}/>
      <SectionNav label={text(locale, "About chapters", "關於我們章節", "关于我们章节")} items={[
        { id: "who-we-are", label: text(locale, "Who we are", "關於我們", "关于我们") },
        { id: "our-role", label: text(locale, "Our role", "我們的角色", "我们的角色") },
        { id: "principles", label: text(locale, "Principles", "我們的原則", "我们的原则") },
        { id: "compliance", label: text(locale, "Compliance", "合規管治", "合规管治") },
      ]} />
      <section className="section container institution-introduction" id="who-we-are">
        <div>
          <SectionLabel index="01">{text(locale, "WHO WE ARE", "關於我們", "关于我们")}</SectionLabel>
          <h2 className="editorial-title">{text(locale, "An enduring structure\nstarts with understanding.", "理解所需，\n才能構建長遠。", "理解所需，\n才能构建长远。")}</h2>
        </div>
        <div className="prose">
          <p className="body-large">{text(locale, "FIDERE TRUST LIMITED is a Hong Kong trust and fiduciary services provider working with private clients, families and international businesses.", "FIDERE TRUST LIMITED 是一家香港信託與受託服務機構，服務私人客戶、家族及國際企業。", "FIDERE TRUST LIMITED 是一家香港信托与受托服务机构，服务私人客户、家族及国际企业。")}</p>
          <p>{text(locale, "We bring trust administration, asset holding arrangements and succession planning into a coherent structure, shaped around the circumstances of each client.", "我們結合信託管理、資產持有安排與傳承規劃，按每位客戶的情況建立有序的架構。", "我们结合信托管理、资产持有安排与传承规划，按每位客户的情况建立有序的架构。")}</p>
          <TextLink href={pathFor(locale,"about/who-we-are")}>{text(locale,"Who we are","認識我們","认识我们")}</TextLink>
        </div>
      </section>
      <section className="section container photo-split" id="our-role">
        <ImageReveal src="/images/harbour-detail.jpg" alt={text(locale, "Quiet waters on Victoria Harbour", "維多利亞港的平靜水面", "维多利亚港的平静水面")} sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="prose">
          <SectionLabel index="02">{text(locale, "OUR ROLE", "我們的角色", "我们的角色")}</SectionLabel>
          <h2 className="editorial-title">{text(locale, "Structure.\nAdministration.\nContinuity.", "架構。\n管理。\n延續。", "架构。\n管理。\n延续。")}</h2>
          <p>{text(locale, "We act as trustee and administrator, coordinating trust, custody and corporate arrangements across the life of the structure.", "我們擔任受託人與管理人，在架構的不同階段協調信託、託管及企業安排。", "我们担任受托人与管理人，在架构的不同阶段协调信托、托管及企业安排。")}</p>
          <h3 className="eyebrow">{text(locale, "OUR MISSION", "我們的使命", "我们的使命")}</h3>
          <p>{text(locale, "To support the orderly holding, administration and transition of assets, with attention to both present needs and future responsibilities.", "支持資產的有序持有、管理與傳承，兼顧當前需要與未來責任。", "支持资产的有序持有、管理与传承，兼顾当前需要与未来责任。")}</p>
          <TextLink href={pathFor(locale, "about/our-approach")}>{text(locale, "Our approach in practice", "了解我們的方法", "了解我们的方法")}</TextLink>
        </div>
      </section>
      <section className="section container" id="principles">
        <div className="section-heading">
          <SectionLabel index="03">{text(locale, "OUR PRINCIPLES", "我們的原則", "我们的原则")}</SectionLabel>
          <h2 className="editorial-title">{text(locale, "Trust is a responsibility.", "信託，始於責任。", "信托，始于责任。")}</h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title[0]}>
              <span className="row-number">0{index + 1}</span>
              <h3>{local(locale, principle.title)}</h3>
              <p>{local(locale, principle.description)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section dark-section" id="compliance">
        <div className="container split-grid">
          <SectionLabel index="04">{text(locale, "COMPLIANCE", "合規管治", "合规管治")}</SectionLabel>
          <div className="prose">
            <h2 className="editorial-title">{text(locale, "Responsibility,\nin practice.", "讓責任，\n落實於日常。", "让责任，\n落实于日常。")}</h2>
            <p>{text(locale, "Client due diligence, ownership verification and ongoing review form part of the way we establish and administer client relationships.", "客戶盡職審查、所有權核實與持續覆核，是我們建立及管理客戶關係的一部分。", "客户尽职调查、所有权核实与持续复核，是我们建立及管理客户关系的一部分。")}</p>
            <TextLink href={pathFor(locale, "about/governance")}>{text(locale, "Our governance", "了解管治安排", "了解治理安排")}</TextLink>
          </div>
        </div>
      </section>
      <CTAEditorial locale={locale} />
    </>
  );
}

type Service = { id: string; title: Copy; description: Copy };
const serviceGroups: { id: string; title: Copy; description: Copy; services: Service[] }[] = [
  {
    id: "trust-fiduciary",
    title: ["Trust & Fiduciary", "信託與受託服務", "信托与受托服务"],
    description: ["The structure and continuity behind private wealth.", "為私人財富建立架構與延續性。", "为私人财富建立架构与延续性。"],
    services: [
      { id: "private-trust", title: ["Private Trust", "私人信託", "私人信托"], description: ["Trust structuring and administration shaped around the assets, beneficiaries and purposes of the trust.", "圍繞信託資產、受益人與設立目的，安排信託架構及管理。", "围绕信托资产、受益人与设立目的，安排信托架构及管理。"] },
      { id: "succession-planning", title: ["Succession Planning", "傳承規劃", "传承规划"], description: ["Arrangements for the orderly transition of wealth and responsibilities between generations.", "為世代之間的財富與責任交接作出有序安排。", "为世代之间的财富与责任交接作出有序安排。"] },
      { id: "family-office", title: ["Family Office Services", "家族辦公室服務", "家族办公室服务"], description: ["Coordinated trust administration, custody, reporting and family governance arrangements.", "協調信託管理、託管、報告及家族治理安排。", "协调信托管理、托管、报告及家族治理安排。"] },
      { id: "trustee-directors", title: ["Trustee & Directors", "受託人與董事服務", "受托人与董事服务"], description: ["Trustee and director services to support the administration of trusts and corporate structures.", "透過受託人與董事服務，支持信託及企業架構的管理。", "通过受托人与董事服务，支持信托及企业架构的管理。"] },
    ],
  },
  {
    id: "corporate-services",
    title: ["Corporate Services", "企業服務", "企业服务"],
    description: ["Practical support for the entities within the structure.", "為架構內的企業實體提供切實支持。", "为架构内的企业实体提供切实支持。"],
    services: [
      { id: "corporate-trust", title: ["Corporate Trust", "企業信託", "企业信托"], description: ["Fiduciary and corporate administration for business interests, holding structures and transactions.", "為企業權益、持有架構及交易提供受託與企業管理安排。", "为企业权益、持有架构及交易提供受托与企业管理安排。"] },
      { id: "company-formation", title: ["Company Formation", "公司設立", "公司设立"], description: ["Company incorporation and ongoing administration for private and corporate requirements.", "因應私人及企業需要，提供公司註冊及持續管理服務。", "因应私人及企业需要，提供公司注册及持续管理服务。"] },
      { id: "tax-compliance", title: ["Tax Compliance", "稅務合規", "税务合规"], description: ["Tax and accounting compliance support, with arrangements subject to the relevant jurisdiction and professional advice.", "提供稅務與會計合規支持，具體安排須按相關司法管轄區及專業意見而定。", "提供税务与会计合规支持，具体安排须按相关司法管辖区及专业意见而定。"] },
      { id: "regulatory-compliance", title: ["Regulatory Compliance", "監管合規", "监管合规"], description: ["Administrative support for the regulatory obligations associated with corporate structures.", "協助處理企業架構所涉及監管義務的行政工作。", "协助处理企业架构所涉及监管义务的行政工作。"] },
    ],
  },
  {
    id: "asset-transaction-administration",
    title: ["Asset & Transaction Administration", "資產與交易管理", "资产与交易管理"],
    description: ["Coordination where assets, accounts and counterparties meet.", "協調資產、賬戶與交易對手之間的安排。", "协调资产、账户与交易对手之间的安排。"],
    services: [
      { id: "transaction-support", title: ["Transaction Support", "交易支持", "交易支持"], description: ["Coordination of transaction procedures, documentation and administration across relevant parties.", "協調相關各方的交易程序、文件及行政安排。", "协调相关各方的交易程序、文件及行政安排。"] },
      { id: "equity-asset-custody", title: ["Equity Custody Services", "股權託管服務", "股权托管服务"], description: ["Equity holding, custody administration and settlement support within agreed arrangements.", "按照約定安排，提供股權持有、託管管理及結算支持。", "按照约定安排，提供股权持有、托管管理及结算支持。"] },
    ],
  },
];

function Eligibility({ locale }: { locale: Locale }) {
  return <p className="legal-note">{text(locale, "Service availability depends on client eligibility, jurisdiction, account arrangements and applicable regulatory requirements. Certain services are restricted to Professional Investors under Hong Kong’s Securities and Futures Ordinance (Cap. 571).", "服務可用性取決於客戶資格、司法管轄區、賬戶安排及適用監管要求。部分服務僅向香港《證券及期貨條例》（第571章）所界定的專業投資者提供。", "服务可用性取决于客户资格、司法管辖区、账户安排及适用监管要求。部分服务仅向香港《证券及期货条例》（第571章）所界定的专业投资者提供。")}</p>;
}

export function Solutions({ locale }: { locale: Locale }) {
  return (
    <>
      <BusinessHero locale={locale} title={text(locale,"Trust & Fiduciary Solutions","信託與受託方案","信托与受托方案")} description={text(locale,"Structures built around real-world needs.","立足實際所需，構建合適架構。","立足实际所需，构建合适架构。")} image="/images/hero-hong-kong.jpg" imageAlt={text(locale,"Hong Kong's harbour","香港海港","香港海港")} items={[
        {title:text(locale,"Private Trust","私人信託","私人信托"),href:pathFor(locale,"solutions/private-trust")},
        {title:text(locale,"Family Office","家族辦公室","家族办公室"),href:pathFor(locale,"solutions/family-office")},
        {title:text(locale,"Corporate Trust","企業信託","企业信托"),href:pathFor(locale,"solutions/corporate-trust")},
      ]}/>
      <SectionNav label={text(locale, "Solution groups", "方案分類", "方案分类")} items={serviceGroups.map((group) => ({ id: group.id, label: local(locale, group.title) }))} />
      <div className="solution-collection">
        {serviceGroups.map((group, index) => (
          <section className="section service-group" id={group.id} key={group.id}>
            <div className="section-heading">
              <SectionLabel index={`0${index + 1}`}>{text(locale, "SOLUTIONS", "信託方案", "信托方案")}</SectionLabel>
              <div>
                <h2 className="editorial-title">{local(locale, group.title)}</h2>
                <p>{local(locale, group.description)}</p>
              </div>
            </div>
            <div className="collection-content">
              <ImageReveal src={["/images/coastal-horizon.jpg","/images/hong-kong-architecture.jpg","/images/harbour-detail.jpg"][index]} alt={local(locale,group.title)} className="collection-image" sizes="(max-width: 767px) 100vw, 61vw" />
              <div className="collection-entries">
              {group.services.map((service) => (
                <article className="editorial-row service-entry" id={service.id} key={service.id}>
                  <h3 className="row-title">{local(locale, service.title)}</h3>
                  <p className="row-copy">{local(locale, service.description)}</p>
                  <TextLink href={pathFor(locale, `solutions/${service.id}`)}>{text(locale, "Read more", "了解更多", "了解更多")}</TextLink>
                </article>
              ))}
              </div>
            </div>
          </section>
        ))}
        <div className="container collection-eligibility"><Eligibility locale={locale} /></div>
      </div>
      <CTAEditorial locale={locale} />
    </>
  );
}

const wealthAreas: { slug:string;title: Copy; description: Copy }[] = [
  { slug: "global-markets", title: ["Global Markets", "環球市場", "环球市场"], description: ["Coordination of investment account arrangements across relevant markets and jurisdictions.", "協調相關市場及司法管轄區的投資賬戶安排。", "协调相关市场及司法管辖区的投资账户安排。"] },
  { slug: "global-markets", title: ["Public Securities", "上市證券", "上市证券"], description: ["Listed equities and IPO access through relevant financial institutions and account arrangements.", "透過相關金融機構及賬戶安排，接觸上市股票與首次公開招股。", "通过相关金融机构及账户安排，接触上市股票与首次公开招股。"] },
  { slug: "funds", title: ["Funds", "基金", "基金"], description: ["Mutual funds and exchange-traded funds, subject to availability and client eligibility.", "共同基金及交易所買賣基金，視乎供應情況與客戶資格而定。", "共同基金及交易所买卖基金，视乎供应情况与客户资格而定。"] },
  { slug: "fixed-income", title: ["Bonds", "債券", "债券"], description: ["Fixed-income instruments within the applicable account and custody framework.", "在適用的賬戶與託管框架內，安排固定收益工具。", "在适用的账户与托管框架内，安排固定收益工具。"] },
  { slug: "cash-management", title: ["Money Market", "貨幣市場", "货币市场"], description: ["Money-market instruments for short-term liquidity needs within the trust structure.", "在信託架構內，以貨幣市場工具配合短期流動資金需要。", "在信托架构内，以货币市场工具配合短期流动资金需要。"] },
  { slug: "global-markets", title: ["Structured Products", "結構性產品", "结构性产品"], description: ["For Professional Investors only, subject to eligibility and the terms and risks of each product.", "僅限專業投資者，並須符合資格要求及各項產品的條款與風險安排。", "仅限专业投资者，并须符合资格要求及各项产品的条款与风险安排。"] },
  { slug: "cash-management", title: ["Cash Management", "現金管理", "现金管理"], description: ["Cash and fixed-deposit arrangements coordinated with the structure’s liquidity requirements.", "按架構的流動資金需要，協調現金與定期存款安排。", "按架构的流动资金需要，协调现金与定期存款安排。"] },
];

export function WealthManagement({ locale }: { locale: Locale }) {
  return (
    <>
      <BusinessHero locale={locale} title={text(locale,"Wealth Management","財富管理","财富管理")} description={text(locale,"Wealth within a trust structure.","以信託架構，承載財富。","以信托架构，承载财富。")} image="/images/harbour-detail.jpg" imageAlt={text(locale,"Victoria Harbour and the city beyond","維多利亞港與城市遠景","维多利亚港与城市远景")} items={[
        {title:text(locale,"Global Markets","環球市場","环球市场"),href:pathFor(locale,"wealth-management/global-markets")},
        {title:text(locale,"Funds & Fixed Income","基金與固定收益","基金与固定收益"),href:pathFor(locale,"wealth-management/funds")},
        {title:text(locale,"Cash Management","現金管理","现金管理"),href:pathFor(locale,"wealth-management/cash-management")},
      ]}/>
      <SectionNav label={text(locale, "Wealth management chapters", "財富管理章節", "财富管理章节")} items={[
        { id: "approach", label: text(locale, "Our approach", "我們的方法", "我们的方法") },
        { id: "markets", label: text(locale, "Markets & instruments", "市場與工具", "市场与工具") },
      ]} />
      <section className="section container wealth-introduction" id="approach">
        <SectionLabel index="01">{text(locale, "A STRUCTURED PERSPECTIVE", "從架構出發", "从架构出发")}</SectionLabel>
        <div className="prose">
          <h2 className="editorial-title">{text(locale, "The asset. The account.\nThe longer term.", "資產、賬戶，\n以及更長遠的安排。", "资产、账户，\n以及更长远的安排。")}</h2>
          <p className="body-large">{text(locale, "We coordinate asset holding and administration through relevant financial institutions and custodians, within the terms of the trust and account arrangements.", "我們在信託條款與賬戶安排範圍內，透過相關金融機構及託管人協調資產持有與管理。", "我们在信托条款与账户安排范围内，通过相关金融机构及托管人协调资产持有与管理。")}</p>
          <Eligibility locale={locale} />
        </div>
      </section>
      <section className="container wealth-overview" id="markets">
        <div><SectionLabel>{text(locale,"EXPLORE THE TOPICS","瀏覽財富主題","浏览财富主题")}</SectionLabel><nav aria-label={text(locale,"Wealth topics","財富主題","财富主题")}>{wealthAreas.filter((area,index,all)=>all.findIndex(other=>other.slug===area.slug)===index).map(area=><TextLink href={pathFor(locale,`wealth-management/${area.slug}`)} key={area.slug}>{local(locale,area.title)}</TextLink>)}</nav></div>
        <ImageReveal src="/images/singapore.jpg" alt={text(locale,"City buildings across the water","水岸旁的城市建築","水岸旁的城市建筑")} sizes="(max-width: 767px) 100vw, 66vw"/>
      </section>
      <section className="section container wealth-market-register">
        <SectionLabel index="02">{text(locale, "MARKETS & INSTRUMENTS", "市場與工具", "市场与工具")}</SectionLabel>
        {wealthAreas.map((area, index) => (
          <article className="editorial-row" key={area.title[0]}>
            <span className="row-number">0{index + 1}</span>
            <h2 className="row-title"><Link href={pathFor(locale,`wealth-management/${area.slug}`)}>{local(locale, area.title)} <span className="topic-arrow" aria-hidden="true">↗</span></Link></h2>
            <p className="row-copy">{local(locale, area.description)}</p>
          </article>
        ))}
        <p className="legal-note">{text(locale, "This information is not an investment recommendation. Investments involve risk; returns and principal protection are not guaranteed.", "此等資料不構成投資建議。投資涉及風險，回報與本金保障均不獲保證。", "此等资料不构成投资建议。投资涉及风险，回报与本金保障均不获保证。")}</p>
        <TextLink href={pathFor(locale, "risk-fees")}>{text(locale, "Risk & fees", "風險及費用", "风险及费用")}</TextLink>
      </section>
      <CTAEditorial locale={locale} />
    </>
  );
}

const complianceSections: { id: string; title: Copy; paragraphs: Copy[] }[] = [
  {
    id: "aml-ctf", title: ["AML / CTF", "反洗錢及反恐融資", "反洗钱及反恐融资"],
    paragraphs: [
      ["Our framework takes a risk-based approach to anti-money laundering and counter-terrorist financing. Client due diligence, beneficial ownership verification and transaction monitoring support this approach.", "我們的反洗錢及反恐融資框架採取風險為本的方法，透過客戶盡職審查、實益擁有人核實與交易監察予以落實。", "我们的反洗钱及反恐融资框架采取风险为本的方法，通过客户尽职调查、实益拥有人核实与交易监测予以落实。"],
      ["Unusual or potentially suspicious activity is reviewed and escalated in accordance with the applicable requirements.", "異常或可能涉及可疑情況的活動，會按照適用要求進行審查及上報。", "异常或可能涉及可疑情况的活动，会按照适用要求进行审查及上报。"],
    ],
  },
  {
    id: "client-due-diligence", title: ["Client Due Diligence", "客戶盡職審查", "客户尽职调查"],
    paragraphs: [
      ["Before establishing a relationship, we seek to understand the client, the purpose of the arrangement and the expected activity. Service access is conditional on compliance review.", "在建立關係前，我們會了解客戶、安排的目的及預期活動。服務的提供須經合規審查。", "在建立关系前，我们会了解客户、安排的目的及预期活动。服务的提供须经合规审查。"],
      ["Higher-risk circumstances may require enhanced due diligence, additional corroboration and further approval.", "風險較高的情況可能需要加強盡職審查、補充佐證及進一步審批。", "风险较高的情况可能需要加强尽职调查、补充佐证及进一步审批。"],
    ],
  },
  {
    id: "kyc-kyb", title: ["KYC / KYB", "個人及企業身份審查", "个人及企业身份审查"],
    paragraphs: [
      ["Identity and address information is required for individuals. Corporate due diligence may include incorporation documents, director and shareholder records, and the ownership structure.", "個人客戶須提供身份及地址資料。企業盡職審查可能包括公司註冊文件、董事及股東記錄，以及所有權架構。", "个人客户须提供身份及地址资料。企业尽职调查可能包括公司注册文件、董事及股东记录，以及所有权架构。"],
      ["We identify and verify beneficial owners and relevant connected parties to understand who ultimately owns or controls the arrangement.", "我們識別及核實實益擁有人與相關關聯方，以了解安排的最終擁有人或控制人。", "我们识别及核实实益拥有人与相关关联方，以了解安排的最终拥有人或控制人。"],
    ],
  },
  {
    id: "source-of-funds-wealth", title: ["Source of Funds / Wealth", "資金與財富來源", "资金与财富来源"],
    paragraphs: [
      ["We may request information and supporting documents concerning the origin of funds and the accumulation of wealth. The evidence required depends on the risk assessment and the proposed activity.", "我們可能要求提供資金來源及財富累積過程的資料與證明文件。所需證據視乎風險評估及擬進行的活動而定。", "我们可能要求提供资金来源及财富累积过程的资料与证明文件。所需证据视乎风险评估及拟进行的活动而定。"],
    ],
  },
  {
    id: "sanctions-screening", title: ["Sanctions Screening", "制裁篩查", "制裁筛查"],
    paragraphs: [
      ["Screening considers sanctions, politically exposed persons and relevant adverse media. Checks cover clients and relevant connected parties and are repeated as appropriate.", "篩查涵蓋制裁、政治人物及相關負面報道。審查對象包括客戶及相關關聯方，並會按需要再次進行。", "筛查涵盖制裁、政治人物及相关负面报道。审查对象包括客户及相关关联方，并会按需要再次进行。"],
      ["Screening results inform the risk assessment and may lead to further enquiries or restrictions.", "篩查結果會納入風險評估，並可能導致進一步查詢或限制。", "筛查结果会纳入风险评估，并可能导致进一步查询或限制。"],
    ],
  },
  {
    id: "ongoing-monitoring", title: ["Ongoing Monitoring", "持續監察", "持续监测"],
    paragraphs: [
      ["Client relationships are subject to ongoing review. Changes in ownership, business activities or transaction behaviour may trigger a refresh of information or additional due diligence.", "客戶關係須接受持續覆核。所有權、業務活動或交易行為的變化，可能觸發資料更新或額外盡職審查。", "客户关系须接受持续复核。所有权、业务活动或交易行为的变化，可能触发资料更新或额外尽职调查。"],
      ["Clients may be asked to provide updated documents so that records remain accurate and relevant.", "我們可能要求客戶提供更新文件，以保持記錄準確並切合實際情況。", "我们可能要求客户提供更新文件，以保持记录准确并切合实际情况。"],
    ],
  },
  {
    id: "record-keeping", title: ["Record Keeping", "記錄保存", "记录保存"],
    paragraphs: [
      ["Due diligence and transaction records are retained in accordance with applicable legal requirements. We cooperate with competent authorities where legally required.", "盡職審查及交易記錄按照適用法律要求保存。我們在法律要求的情況下配合主管機關。", "尽职调查及交易记录按照适用法律要求保存。我们在法律要求的情况下配合主管机关。"],
      ["The compliance framework is reviewed periodically and updated when legal or regulatory developments require it.", "合規框架會定期覆核，並因應法律或監管變化所需作出更新。", "合规框架会定期复核，并因应法律或监管变化所需作出更新。"],
    ],
  },
];

export function Compliance({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHero locale={locale} eyebrow={text(locale, "COMPLIANCE & GOVERNANCE", "合規與管治", "合规与治理")} title={text(locale, "Governance is part\nof the structure.", "讓管治，\n成為架構的一部分。", "让治理，\n成为架构的一部分。")}
        description={text(locale, "A risk-based framework designed around regulatory responsibility.", "以風險為本，圍繞監管責任建立的框架。", "以风险为本，围绕监管责任建立的框架。")} />
      <section className="section container compliance-layout">
        <nav className="sticky-index" aria-label={text(locale, "Compliance topics", "合規主題目錄", "合规主题目录")}>
          <SectionLabel>{text(locale, "IN THIS FRAMEWORK", "框架內容", "框架内容")}</SectionLabel>
          {complianceSections.map((section, index) => (
            <a href={`#${section.id}`} key={section.id}><span className="row-number">0{index + 1}</span><span>{local(locale, section.title)}</span></a>
          ))}
        </nav>
        <div>
          {complianceSections.map((section, index) => (
            <article className="compliance-article prose" id={section.id} key={section.id}>
              <span className="row-number">0{index + 1}</span>
              <h2 className="editorial-title">{local(locale, section.title)}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph[0]}>{local(locale, paragraph)}</p>)}
              <TextLink href={pathFor(locale,`compliance/${section.id==="kyc-kyb"?"client-due-diligence":section.id==="source-of-funds-wealth"?"source-of-funds":section.id==="record-keeping"?"ongoing-monitoring":section.id}`)}>{text(locale,"Explore this topic","深入了解此主題","深入了解此主题")}</TextLink>
            </article>
          ))}
          <div className="legal-note">
            <p>{text(locale, "This page summarises FIDERE’s published compliance framework. Please refer to the full Compliance & KYC policy for the operative wording.", "本頁概述 FIDERE 已公佈的合規框架。完整及適用文字請參閱《合規及客戶審查政策》。", "本页概述 FIDERE 已公布的合规框架。完整及适用文字请参阅《合规及客户审查政策》。")}</p>
            <TextLink href={pathFor(locale, "compliance-kyc")}>{text(locale, "Read the full policy", "閱讀完整政策", "阅读完整政策")}</TextLink>
          </div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container split-grid">
          <SectionLabel>{text(locale, "REGULATORY STATUS", "監管地位", "监管地位")}</SectionLabel>
          <div className="prose">
            <h2 className="editorial-title">FIDERE TRUST LIMITED</h2>
            <p>{text(locale, "Hong Kong · TCSP Licence No.", "香港 · 信託或公司服務提供者牌照號碼", "香港 · 信托或公司服务提供者牌照号码")} {company.licence}</p>
            <TextLink href={pathFor(locale, "regulatory-status")}>{text(locale, "Regulatory disclosures", "監管披露", "监管披露")}</TextLink>
          </div>
        </div>
      </section>
      <CTAEditorial locale={locale} />
    </>
  );
}

export function Contact({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHero locale={locale} eyebrow={text(locale, "LET’S TALK", "開啟對話", "开启对话")} title={text(locale, "A conversation is usually\nthe best place to start.", "從一次對話，\n開始了解所需。", "从一次对话，\n开始了解所需。")}
        description={text(locale, "Tell us what you would like to put in place.", "告訴我們，您希望作出怎樣的安排。", "告诉我们，您希望作出怎样的安排。")} />
      <SectionNav label={text(locale,"Contact chapters","聯絡資訊","联系信息")} items={[{id:"your-enquiry",label:text(locale,"Get in touch","提出查詢","提出咨询")},{id:"office-details",label:text(locale,"Hong Kong office","香港辦事處","香港办事处")}]} />
      <section className="section container contact-layout">
        <div className="contact-details" id="office-details">
          <SectionLabel index="01">{text(locale, "HONG KONG OFFICE", "香港辦事處", "香港办事处")}</SectionLabel>
          <h2 className="editorial-title">{company.name}</h2>
          <address>
            <p>{company.address}</p>
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p><a href={`tel:${company.phoneHref}`}>{company.phone}</a></p>
          </address>
          <p className="legal-note">{text(locale, "For private clients, family offices, corporate clients and professional advisers. Existing clients can contact us for assistance with their arrangements.", "歡迎私人客戶、家族辦公室、企業客戶及專業顧問聯絡我們。現有客戶亦可就其安排向我們尋求協助。", "欢迎私人客户、家族办公室、企业客户及专业顾问联系我们。现有客户亦可就其安排向我们寻求协助。")}</p>
        </div>
        <div className="contact-form-wrap" id="your-enquiry">
          <SectionLabel index="02">{text(locale, "YOUR ENQUIRY", "您的查詢", "您的咨询")}</SectionLabel>
          <ContactForm locale={locale} />
        </div>
      </section>
      <div className="wide-photo"><ImageReveal src="/images/hong-kong-architecture.jpg" alt={text(locale, "Hong Kong’s architectural landscape", "香港的建築景觀", "香港的建筑景观")} sizes="100vw" /></div>
    </>
  );
}

export function Login({ locale }: { locale: Locale }) {
  return (
    <>
      <PageHero locale={locale} eyebrow={text(locale, "CLIENT ACCESS", "客戶服務", "客户服务")} title={text(locale, "A direct point\nof contact.", "與我們，\n直接聯繫。", "与我们，\n直接联系。")}
        description={text(locale, "Assistance with your existing FIDERE relationship.", "為您現有的 FIDERE 服務安排提供協助。", "为您现有的 FIDERE 服务安排提供协助。")} />
      <section className="section container split-grid">
        <SectionLabel index="01">{text(locale, "EXISTING CLIENTS", "現有客戶", "现有客户")}</SectionLabel>
        <div className="prose">
          <h2 className="editorial-title">{text(locale, "Your next step,\nwith us.", "下一步，\n與我們聯絡。", "下一步，\n与我们联系。")}</h2>
          <p className="body-large">{text(locale, "Please contact FIDERE for assistance with account access, documentation or your existing arrangements.", "如需賬戶使用、文件或現有安排方面的協助，請聯絡 FIDERE。", "如需账户使用、文件或现有安排方面的协助，请联系 FIDERE。")}</p>
          <p>{text(locale, "Access to client services depends on completed onboarding, verification and applicable Hong Kong compliance requirements. Our team can explain the appropriate next step for your circumstances.", "客戶服務的使用取決於開戶程序、核實及適用香港合規要求的完成情況。我們的團隊可按您的情況說明下一步安排。", "客户服务的使用取决于开户程序、核实及适用香港合规要求的完成情况。我们的团队可按您的情况说明下一步安排。")}</p>
          <TextLink href={pathFor(locale, "contact")}>{text(locale, "Contact client services", "聯絡客戶服務", "联系客户服务")}</TextLink>
          <p className="legal-note"><a href={`mailto:${company.email}`}>{company.email}</a><br /><a href={`tel:${company.phoneHref}`}>{company.phone}</a></p>
        </div>
      </section>
    </>
  );
}

export function InnerPage({ locale, slug }: { locale: Locale; slug: string }) {
  switch (slug) {
    case "about": return <About locale={locale} />;
    case "solutions": return <Solutions locale={locale} />;
    case "wealth-management": return <WealthManagement locale={locale} />;
    case "compliance": return <Compliance locale={locale} />;
    case "contact": return <Contact locale={locale} />;
    case "login": return <Login locale={locale} />;
    default: return null;
  }
}
