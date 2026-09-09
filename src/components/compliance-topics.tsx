import Link from "next/link";
import { BreadcrumbStructuredData } from "@/components/breadcrumb-structured-data";
import { ImageReveal, SectionLabel, TextLink } from "@/components/editorial";
import { SectionNav } from "@/components/section-nav";
import { complianceTopics, type ComplianceTopicCopy } from "@/lib/compliance-topics";
import { legalDocuments } from "@/lib/legal-documents";
import { pathFor, text, type Locale } from "@/lib/site";
import "./topic-pages.css";

const local = (locale: Locale, copy: ComplianceTopicCopy) => text(locale, ...copy);
const policy = legalDocuments.find((document) => document.slug === "compliance-kyc")!;

function TopicHeading({ locale, slug, statement }: { locale: Locale; slug: string; statement: ComplianceTopicCopy }) {
  const topic = complianceTopics.find((item) => item.slug === slug)!;
  return <section className={`topic-hero topic-policy-hero topic-policy-${slug} container`}>
    <nav className="breadcrumb" aria-label={text(locale, "Breadcrumb", "頁面路徑", "页面路径")}><Link href={pathFor(locale)}>FIDERE</Link><span aria-hidden="true">/</span><Link href={pathFor(locale, "compliance")}>{text(locale, "Compliance", "合規管治", "合规管治")}</Link><span aria-hidden="true">/</span><span aria-current="page">{local(locale, topic.title)}</span></nav>
    <SectionLabel>{text(locale, "COMPLIANCE LIBRARY", "合規資料庫", "合规资料库")}</SectionLabel>
    <div className="topic-policy-heading"><h1>{local(locale, topic.title)}</h1><div><p className="topic-policy-statement">{local(locale, statement)}</p><p>{local(locale, topic.description)}</p></div></div>
  </section>;
}

function PolicyContext({ locale }: { locale: Locale }) {
  return <div className="topic-policy-context"><SectionLabel>{text(locale, "POLICY REFERENCE", "政策參考", "政策参考")}</SectionLabel><p>{text(locale, "This topic explains part of FIDERE’s published Compliance & KYC policy, effective 1 April 2026. The full policy contains the operative wording.", "本主題解釋 FIDERE 於2026年4月1日生效的《合規及客戶審查政策》部分內容。適用文字載於完整政策。", "本主题解释 FIDERE 于2026年4月1日生效的《合规及客户审查政策》部分内容。适用文字载于完整政策。")}</p><TextLink href={pathFor(locale, policy.slug)}>{text(locale, "Read the complete policy", "閱讀完整政策", "阅读完整政策")}</TextLink></div>;
}

function RelatedTopics({ locale, slugs }: { locale: Locale; slugs: string[] }) {
  return <section className="section container topic-related"><SectionLabel>{text(locale, "RELATED COMPLIANCE TOPICS", "相關合規主題", "相关合规主题")}</SectionLabel>{slugs.map((slug) => {
    const topic = complianceTopics.find((item) => item.slug === slug)!;
    return <div className="related-row" key={slug}><TextLink href={pathFor(locale, `compliance/${slug}`)}>{local(locale, topic.title)}</TextLink><p>{local(locale, topic.description)}</p></div>;
  })}</section>;
}

function AmlCtf({ locale }: { locale: Locale }) {
  const controls: { title: ComplianceTopicCopy; body: ComplianceTopicCopy }[] = [
    { title: ["Understand the client", "了解客戶", "了解客户"], body: ["Client due diligence establishes the identity and context of the proposed relationship. Beneficial ownership verification helps identify the people who ultimately own or control an arrangement.", "客戶盡職審查協助確立擬定關係的身份與背景。實益擁有人核實有助識別最終擁有或控制安排的人士。", "客户尽职调查协助确立拟定关系的身份与背景。实益拥有人核实有助识别最终拥有或控制安排的人士。"] },
    { title: ["Consider the risk", "考慮風險", "考虑风险"], body: ["The client, ownership structure and proposed activity inform the assessment. Higher-risk circumstances may require enhanced due diligence and further corroboration.", "客戶、所有權架構及擬進行的活動均納入評估。較高風險情況可能需要加強盡職審查及進一步佐證。", "客户、所有权架构及拟进行的活动均纳入评估。较高风险情况可能需要加强尽职调查及进一步佐证。"] },
    { title: ["Monitor the activity", "監察活動", "监测活动"], body: ["Transaction monitoring and continuing review consider activity within the established client context. A change in behaviour or an unusual pattern may require closer examination.", "交易監察及持續覆核會結合已了解的客戶背景考慮活動。行為變化或異常模式可能需要更深入的審查。", "交易监测及持续复核会结合已了解的客户背景考虑活动。行为变化或异常模式可能需要更深入的审查。"] },
    { title: ["Review and escalate", "覆核與上報", "复核与上报"], body: ["Potentially suspicious activity is subject to review and escalation. The controls themselves are reviewed periodically against legal, regulatory and operational risk requirements.", "可能涉及可疑情況的活動須進行覆核及上報。各項管控亦會按法律、監管及營運風險要求定期覆核。", "可能涉及可疑情况的活动须进行复核及上报。各项管控亦会按法律、监管及运营风险要求定期复核。"] },
  ];
  return <><TopicHeading locale={locale} slug="aml-ctf" statement={["A risk-based framework.\nConnected controls.", "以風險為本，\n連結各項管控。", "以风险为本，\n连接各项管控。"]} />
    <section className="section container topic-control-layout"><aside><SectionLabel>{text(locale, "THE FRAMEWORK", "管控框架", "管控框架")}</SectionLabel><h2>{text(locale, "From understanding\nto ongoing review.", "從了解開始，\n持續覆核。", "从了解开始，\n持续复核。")}</h2><p>{text(locale, "Anti-money laundering and counter-terrorist financing controls apply to onboarding and the continuing client relationship.", "反洗錢及反恐融資管控適用於開戶程序及持續客戶關係。", "反洗钱及反恐融资管控适用于开户程序及持续客户关系。")}</p></aside><ol className="topic-control-sequence">{controls.map((control, index) => <li key={control.title[0]}><span className="row-number">0{index + 1}</span><div><h3>{local(locale, control.title)}</h3><p>{local(locale, control.body)}</p></div></li>)}</ol></section>
    <section className="section topic-emphasis"><div className="container topic-statement-grid"><SectionLabel>{text(locale, "ENHANCED DUE DILIGENCE", "加強盡職審查", "加强尽职调查")}</SectionLabel><div className="prose"><h2>{text(locale, "When a closer review\nis required.", "有需要時，\n作更深入審查。", "有需要时，\n作更深入审查。")}</h2><p>{text(locale, "High-risk jurisdictions, opaque ownership chains, unusual transaction patterns or a mismatch between stated and observed activity may lead to further checks. These may include independent corroboration of source of wealth, management approval or tighter transaction controls.", "高風險司法管轄區、不透明的所有權鏈、異常交易模式，或所述活動與實際觀察不符，均可能引致進一步審查，包括獨立佐證財富來源、管理層審批或更嚴格的交易管控。", "高风险司法管辖区、不透明的所有权链、异常交易模式，或所述活动与实际观察不符，均可能引致进一步审查，包括独立佐证财富来源、管理层审批或更严格的交易管控。")}</p><PolicyContext locale={locale} /></div></div></section>
    <RelatedTopics locale={locale} slugs={["client-due-diligence", "sanctions-screening"]} />
  </>;
}

function ClientDueDiligence({ locale }: { locale: Locale }) {
  const documents: { label: ComplianceTopicCopy; detail: ComplianceTopicCopy }[] = [
    { label: ["Entity records", "實體記錄", "实体记录"], detail: ["Incorporation and business registration records, constitutional documents and proof of registered address.", "公司註冊及商業登記記錄、章程文件，以及註冊地址證明。", "公司注册及商业登记记录、章程文件，以及注册地址证明。"] },
    { label: ["Ownership and authority", "所有權與授權", "所有权与授权"], detail: ["Director and shareholder registers, authorised signatory information, relevant resolutions or mandates, and ownership charts up to ultimate beneficial owners.", "董事及股東名冊、獲授權簽署人資料、相關決議或授權文件，以及追溯至最終實益擁有人的所有權圖。", "董事及股东名册、获授权签署人资料、相关决议或授权文件，以及追溯至最终实益拥有人的所有权图。"] },
    { label: ["Business context", "業務背景", "业务背景"], detail: ["The business model, expected transaction profile, source-of-funds narrative, and key counterparties or market exposures.", "業務模式、預期交易概況、資金來源說明，以及主要交易對手或市場風險敞口。", "业务模式、预期交易概况、资金来源说明，以及主要交易对手或市场风险敞口。"] },
    { label: ["Additional records, where applicable", "適用時的補充記錄", "适用时的补充记录"], detail: ["Audited financial statements, tax residency information and licensing or regulatory filings relevant to the proposed activity.", "經審核財務報表、稅務居民資料，以及擬進行活動相關的牌照或監管申報文件。", "经审核财务报表、税务居民资料，以及拟进行活动相关的牌照或监管申报文件。"] },
  ];
  return <><TopicHeading locale={locale} slug="client-due-diligence" statement={["Identity. Ownership.\nThe purpose behind the structure.", "身份、所有權，\n以及架構背後的目的。", "身份、所有权，\n以及架构背后的目的。"]} />
    <SectionNav label={text(locale, "Due diligence topics", "盡職審查主題", "尽职调查主题")} items={[{ id: "individuals", label: text(locale, "Individuals", "個人客戶", "个人客户") }, { id: "corporate-records", label: text(locale, "Corporate records", "企業資料", "企业资料") }, { id: "document-review", label: text(locale, "Document review", "文件審查", "文件审查") }]} />
    <section className="section container topic-statement-grid" id="individuals"><div><SectionLabel index="01">{text(locale, "INDIVIDUAL CLIENTS", "個人客戶", "个人客户")}</SectionLabel><h2>{text(locale, "Establishing\nthe client context.", "建立對客戶\n背景的了解。", "建立对客户\n背景的了解。")}</h2></div><div className="prose"><p className="body-large">{text(locale, "Individual onboarding may require identity verification, proof of address and evidence concerning the source of funds or wealth.", "個人客戶開戶可能需要身份核實、地址證明，以及資金或財富來源證據。", "个人客户开户可能需要身份核实、地址证明，以及资金或财富来源证据。")}</p><p>{text(locale, "Further supporting documents may be requested where the proposed arrangement or risk assessment requires them. The purpose is to understand the person, the intended relationship and the activity involved.", "擬定安排或風險評估如有需要，可能要求提供更多證明文件，目的是了解個人、預期客戶關係及涉及的活動。", "拟定安排或风险评估如有需要，可能要求提供更多证明文件，目的是了解个人、预期客户关系及涉及的活动。")}</p></div></section>
    <section className="section container topic-documents" id="corporate-records"><div className="section-heading"><SectionLabel index="02">{text(locale, "CORPORATE KYB", "企業盡職審查", "企业尽职调查")}</SectionLabel><h2>{text(locale, "The records behind\na corporate relationship.", "企業關係背後，\n所需的資料。", "企业关系背后，\n所需的资料。")}</h2><p>{text(locale, "A typical corporate information pack may include the following. This is a guide to the published scope, not a fixed checklist for every applicant.", "一般企業資料可能包括以下內容。此處說明已公佈的範圍，並非適用於所有申請人的固定清單。", "一般企业资料可能包括以下内容。此处说明已公布的范围，并非适用于所有申请人的固定清单。")}</p></div><dl className="topic-document-register">{documents.map((document, index) => <div key={document.label[0]}><dt><span className="row-number">0{index + 1}</span>{local(locale, document.label)}</dt><dd>{local(locale, document.detail)}</dd></div>)}</dl></section>
    <section className="section container topic-reading-offset" id="document-review"><SectionLabel index="03">{text(locale, "DOCUMENT REVIEW", "文件審查", "文件审查")}</SectionLabel><div className="prose"><h2>{text(locale, "Requirements follow\nthe circumstances.", "按實際情況，\n確定資料要求。", "按实际情况，\n确定资料要求。")}</h2><p>{text(locale, "Acceptance and re-validation requirements may vary by jurisdiction, product, channel and client risk profile. Supplementary documents can be required for legal, regulatory, operational or risk reasons. Providing documents does not by itself establish service eligibility or complete compliance review.", "接納及重新核實要求可能按司法管轄區、產品、渠道及客戶風險狀況有所不同，亦可能因法律、監管、營運或風險原因需要補充文件。提供文件本身並不確立服務資格，亦不代表合規審查已完成。", "接纳及重新核实要求可能按司法管辖区、产品、渠道及客户风险状况有所不同，亦可能因法律、监管、运营或风险原因需要补充文件。提供文件本身并不确立服务资格，亦不代表合规审查已完成。")}</p><PolicyContext locale={locale} /></div></section>
    <RelatedTopics locale={locale} slugs={["source-of-funds", "ongoing-monitoring"]} />
  </>;
}

function SourceOfFunds({ locale }: { locale: Locale }) {
  return <><TopicHeading locale={locale} slug="source-of-funds" statement={["Understanding the origin.\nEstablishing the context.", "了解來源，\n掌握背景。", "了解来源，\n掌握背景。"]} />
    <section className="section container topic-sources-comparison"><article><SectionLabel index="01">{text(locale, "SOURCE OF FUNDS", "資金來源", "资金来源")}</SectionLabel><h2>{text(locale, "The funds involved\nin the arrangement.", "安排所涉及\n的資金。", "安排所涉及\n的资金。")}</h2><p>{text(locale, "Information about the origin of funds helps place the proposed activity in context. For a corporate client, a source-of-funds narrative forms part of the published typical KYB pack, alongside the business model and expected transaction profile.", "資金來源資料有助了解擬進行活動的背景。就企業客戶而言，已公佈的一般企業審查資料包括資金來源說明、業務模式及預期交易概況。", "资金来源资料有助了解拟进行活动的背景。就企业客户而言，已公布的一般企业审查资料包括资金来源说明、业务模式及预期交易概况。")}</p></article><article><SectionLabel index="02">{text(locale, "SOURCE OF WEALTH", "財富來源", "财富来源")}</SectionLabel><h2>{text(locale, "The wider financial\ncircumstances.", "更全面的\n財務背景。", "更全面的\n财务背景。")}</h2><p>{text(locale, "Information about the accumulation of wealth supports an understanding of the broader client circumstances. Evidence may be requested during onboarding, and higher-risk cases may require independent corroboration of the source of wealth.", "財富累積過程的資料，有助更全面了解客戶情況。開戶時可能要求提供證據，較高風險個案亦可能需要獨立佐證財富來源。", "财富累积过程的资料，有助更全面了解客户情况。开户时可能要求提供证据，较高风险个案亦可能需要独立佐证财富来源。")}</p></article></section>
    <section className="section topic-emphasis"><div className="container topic-source-evidence"><SectionLabel>{text(locale, "SUPPORTING INFORMATION", "支持資料", "支持资料")}</SectionLabel><div><h2>{text(locale, "A coherent account,\nwith supporting evidence.", "清晰說明，\n配以支持證據。", "清晰说明，\n配以支持证据。")}</h2><p>{text(locale, "The information requested depends on the proposed activity and the client’s risk profile. It may be considered alongside relevant financial statements, business information or other supporting records where applicable.", "所需資料取決於擬進行活動及客戶風險狀況，並可能與適用的財務報表、業務資料或其他支持記錄一併考慮。", "所需资料取决于拟进行活动及客户风险状况，并可能与适用的财务报表、业务资料或其他支持记录一并考虑。")}</p><p>{text(locale, "Further clarification or documentation may be needed where the information is incomplete, inconsistent or insufficient for the review. There is no single document pack that establishes acceptance for every arrangement.", "當資料不完整、不一致或不足以完成審查時，可能需要進一步說明或文件。不存在一套可確保所有安排均獲接納的統一文件。", "当资料不完整、不一致或不足以完成审查时，可能需要进一步说明或文件。不存在一套可确保所有安排均获接纳的统一文件。")}</p></div></div></section>
    <div className="container topic-policy-footer"><PolicyContext locale={locale} /></div><RelatedTopics locale={locale} slugs={["client-due-diligence", "aml-ctf"]} />
  </>;
}

function SanctionsScreening({ locale }: { locale: Locale }) {
  const scope: { title: ComplianceTopicCopy; body: ComplianceTopicCopy }[] = [
    { title: ["Clients and connected parties", "客戶及關聯方", "客户及关联方"], body: ["Screening may cover the client and relevant connected parties, informed by the ownership and control information collected during due diligence.", "篩查可能涵蓋客戶及相關關聯方，並參考盡職審查收集的所有權與控制資料。", "筛查可能涵盖客户及相关关联方，并参考尽职调查收集的所有权与控制资料。"] },
    { title: ["Sanctions and watchlists", "制裁與觀察名單", "制裁与观察名单"], body: ["Checks against sanctions and watchlists may take place during onboarding and periodically during the relationship.", "開戶期間及客戶關係存續期間，可能進行制裁與觀察名單審查，並定期重複。", "开户期间及客户关系存续期间，可能进行制裁与观察名单审查，并定期重复。"] },
    { title: ["PEP status and adverse media", "政治人物身份與負面報道", "政治人物身份与负面报道"], body: ["Politically exposed person status and relevant adverse media may also be considered as part of the wider risk assessment.", "政治人物身份及相關負面報道，亦可能納入整體風險評估。", "政治人物身份及相关负面报道，亦可能纳入整体风险评估。"] },
  ];
  return <><TopicHeading locale={locale} slug="sanctions-screening" statement={["Assess the relationship.\nConsider the relevant connections.", "評估客戶關係，\n考慮相關連結。", "评估客户关系，\n考虑相关连接。"]} />
    <section className="section container topic-screening-layout"><div><SectionLabel>{text(locale, "SCREENING SCOPE", "篩查範圍", "筛查范围")}</SectionLabel><dl className="topic-screening-register">{scope.map((item) => <div key={item.title[0]}><dt>{local(locale, item.title)}</dt><dd>{local(locale, item.body)}</dd></div>)}</dl></div><aside className="topic-screening-aside"><span className="eyebrow">{text(locale, "RISK ACCEPTANCE", "風險接納", "风险接纳")}</span><h2>{text(locale, "Context informs\nthe decision.", "判斷，\n須考慮背景。", "判断，\n须考虑背景。")}</h2><p>{text(locale, "Where risk acceptance criteria are not met, FIDERE may delay, decline, restrict or terminate services. Unacceptable sanctions, legal, fraud or reputational risk may prevent a relationship from proceeding or continuing.", "當未能符合風險接納準則時，FIDERE 可延遲、拒絕、限制或終止服務。不可接受的制裁、法律、欺詐或聲譽風險，可能令客戶關係無法建立或繼續。", "当未能符合风险接纳准则时，FIDERE 可延迟、拒绝、限制或终止服务。不可接受的制裁、法律、欺诈或声誉风险，可能令客户关系无法建立或继续。")}</p></aside></section>
    <section className="container topic-reading-offset topic-screening-followup"><SectionLabel>{text(locale, "AFTER ONBOARDING", "開戶之後", "开户之后")}</SectionLabel><div className="prose"><h2>{text(locale, "Screening can\nbe revisited.", "篩查，\n亦會再次進行。", "筛查，\n亦会再次进行。")}</h2><p>{text(locale, "Material changes in ownership, control, geography, business activities or transaction behaviour may trigger re-screening and a refresh of the client profile. Screening is therefore part of an ongoing relationship, as well as an initial review.", "所有權、控制、地域、業務活動或交易行為的重大變化，可能觸發重新篩查及更新客戶資料。因此，篩查既是初始審查的一部分，亦貫穿持續客戶關係。", "所有权、控制、地域、业务活动或交易行为的重大变化，可能触发重新筛查及更新客户资料。因此，筛查既是初始审查的一部分，亦贯穿持续客户关系。")}</p><PolicyContext locale={locale} /></div></section>
    <RelatedTopics locale={locale} slugs={["ongoing-monitoring", "client-due-diligence"]} />
  </>;
}

function OngoingMonitoring({ locale }: { locale: Locale }) {
  const changes: { title: ComplianceTopicCopy; body: ComplianceTopicCopy }[] = [
    { title: ["Ownership and control", "所有權與控制", "所有权与控制"], body: ["Changes in corporate structure, beneficial owners or controllers may require updated records and further checks.", "企業架構、實益擁有人或控制人的變化，可能需要更新記錄及進一步審查。", "企业架构、实益拥有人或控制人的变化，可能需要更新记录及进一步审查。"] },
    { title: ["Business and geography", "業務與地域", "业务与地域"], body: ["A change in business activities or geographical exposure may affect the understanding and risk profile of the relationship.", "業務活動或地域風險敞口的變化，可能影響對客戶關係的了解及風險狀況。", "业务活动或地域风险敞口的变化，可能影响对客户关系的了解及风险状况。"] },
    { title: ["Transaction behaviour", "交易行為", "交易行为"], body: ["Unusual patterns or a mismatch between the stated activity and observed transactions may prompt additional review.", "異常模式，或所述活動與觀察到的交易不符，可能引致額外覆核。", "异常模式，或所述活动与观察到的交易不符，可能引致额外复核。"] },
  ];
  return <><TopicHeading locale={locale} slug="ongoing-monitoring" statement={["A relationship evolves.\nThe review continues.", "客戶關係在變化，\n覆核亦持續進行。", "客户关系在变化，\n复核亦持续进行。"]} />
    <div className="container"><ImageReveal src="/images/harbour-detail.jpg" alt={text(locale, "Hong Kong harbour waters", "香港海港水面", "香港海港水面")} className="topic-monitoring-image" sizes="100vw" /></div>
    <section className="section container topic-monitoring-intro"><SectionLabel>{text(locale, "CONTINUING RESPONSIBILITY", "持續責任", "持续责任")}</SectionLabel><div><h2>{text(locale, "Keeping the client\ncontext current.", "持續掌握\n客戶的實際情況。", "持续掌握\n客户的实际情况。")}</h2><p>{text(locale, "Service availability remains subject to compliance review and ongoing risk monitoring. Periodic screening and event-driven updates help keep the relationship under review as circumstances change.", "服務可用性持續取決於合規審查及風險監察。定期篩查與重大變化所觸發的資料更新，有助在情況改變時持續覆核客戶關係。", "服务可用性持续取决于合规审查及风险监测。定期筛查与重大变化所触发的资料更新，有助在情况改变时持续复核客户关系。")}</p></div></section>
    <section className="container topic-change-register"><SectionLabel>{text(locale, "WHAT MAY TRIGGER A REVIEW", "可能觸發覆核的變化", "可能触发复核的变化")}</SectionLabel>{changes.map((change, index) => <article key={change.title[0]}><span className="row-number">0{index + 1}</span><h3>{local(locale, change.title)}</h3><p>{local(locale, change.body)}</p></article>)}</section>
    <section className="section container topic-monitoring-close"><div className="prose"><h2>{text(locale, "Accurate updates.\nAppropriate records.", "準確更新，\n妥善記錄。", "准确更新，\n妥善记录。")}</h2><p>{text(locale, "Clients are responsible for promptly providing accurate updates when material changes occur in their corporate structure, controllers or business operations. Further information or documents may be requested to support a profile refresh.", "當企業架構、控制人或業務營運出現重大變化時，客戶有責任及時提供準確更新。我們可能要求補充資料或文件，以支持客戶資料的重新核實。", "当企业架构、控制人或业务运营出现重大变化时，客户有责任及时提供准确更新。我们可能要求补充资料或文件，以支持客户资料的重新核实。")}</p><p>{text(locale, "Onboarding and transaction records are retained for the period required by applicable law and regulation. FIDERE cooperates with competent authorities where legally required.", "開戶及交易記錄按適用法律與監管要求的期限保存。FIDERE 在法律要求的情況下配合主管機關。", "开户及交易记录按适用法律与监管要求的期限保存。FIDERE 在法律要求的情况下配合主管机关。")}</p></div><PolicyContext locale={locale} /></section>
    <RelatedTopics locale={locale} slugs={["sanctions-screening", "source-of-funds"]} />
  </>;
}

export function ComplianceTopic({ locale, slug }: { locale: Locale; slug: string }) {
  const topic = complianceTopics.find((item) => item.slug === slug);
  if (!topic) return null;

  return <>
    <BreadcrumbStructuredData locale={locale} items={[
      { name: text(locale, "Home", "首頁", "首页") },
      { name: text(locale, "Compliance", "合規管治", "合规管治"), slug: "compliance" },
      { name: local(locale, topic.title), slug: `compliance/${slug}` },
    ]} />
    {slug === "aml-ctf" ? <AmlCtf locale={locale} /> : slug === "client-due-diligence" ? <ClientDueDiligence locale={locale} /> : slug === "source-of-funds" ? <SourceOfFunds locale={locale} /> : slug === "sanctions-screening" ? <SanctionsScreening locale={locale} /> : <OngoingMonitoring locale={locale} />}
  </>;
}
