import Link from "next/link";
import { notFound } from "next/navigation";
import { CTAEditorial, PageHero, SectionLabel, TextLink } from "@/components/editorial";
import { legalDocuments, type LegalBlock } from "@/lib/legal-documents";
import { company, legalNavigation, type Locale, pathFor, text } from "@/lib/site";

type Copy = [string, string, string];

const summaries: Record<string, Copy> = {
  privacy: [
    "This policy explains how FIDERE collects, uses, retains and protects personal information in connection with its website and services. It addresses disclosures and transfers, direct marketing, cookies, security and requests to access or correct personal data. Some information is necessary to respond to an enquiry or provide a requested service. The published policy also explains how to change marketing preferences and contact FIDERE about privacy. Its stated framework is Hong Kong’s Personal Data (Privacy) Ordinance. This overview is a reading aid; the complete published English wording, including its qualifications and exceptions, appears below.",
    "本政策說明 FIDERE 如何就網站與服務收集、使用、保存及保護個人資料，並涵蓋資料披露與轉移、直接促銷、Cookie、安全措施，以及查閱或更正資料的申請。部分資料是回覆查詢或提供所需服務的必要條件。政策亦說明更改促銷偏好及提出私隱查詢的方法，並以香港《個人資料（私隱）條例》為依據。此概要僅便於閱讀；完整英文條文及其限制、例外載於下方。",
    "本政策说明 FIDERE 如何就网站与服务收集、使用、保存及保护个人资料，并涵盖资料披露与转移、直接促销、Cookie、安全措施，以及查阅或更正资料的申请。部分资料是回复查询或提供所需服务的必要条件。政策亦说明更改促销偏好及提出隐私查询的方法，并以香港《个人资料（私隐）条例》为依据。此概要仅便于阅读；完整英文条文及其限制、例外载于下方。",
  ],
  disclaimer: [
    "The document published under FIDERE’s Disclaimer link is titled Terms of Use. It covers use of the website, privacy, registration information, account security, intellectual property and permitted use of website content. It also addresses third-party websites, service reliability, warranty exclusions, liability and changes to the terms. The source document’s title and wording are retained below, separately from the Terms & Conditions document. These provisions relate to website use and should be read alongside the other applicable policies and any specific service agreements. This overview does not replace the published terms or alter their scope.",
    "FIDERE「免責聲明」入口所刊文件的原標題為 Terms of Use。文件涵蓋網站使用、私隱、註冊資料、賬戶安全、知識產權及內容的許可使用，亦載有第三方網站、服務可靠性、保證排除、責任與條款修訂的規定。下方保留原有標題及文字，並與「條款及細則」文件分開呈現。請連同其他適用政策及具體服務協議閱讀；此概要不取代或修改已公佈條文。",
    "FIDERE「免责声明」入口所刊文件的原标题为 Terms of Use。文件涵盖网站使用、隐私、注册资料、账户安全、知识产权及内容的许可使用，亦载有第三方网站、服务可靠性、保证排除、责任与条款修订的规定。下方保留原有标题及文字，并与「条款及细则」文件分开呈现。请连同其他适用政策及具体服务协议阅读；此概要不取代或修改已公布条文。",
  ],
  terms: [
    "These terms govern access to and use of FIDERE’s website. The published document explains that website content is informational and does not constitute an offer, investment advice or a recommendation for a particular person. It addresses limitations of liability, indemnification, links to third-party websites, changes to the website and enforcement of the terms. It also identifies Hong Kong law and courts for the matters described in the governing-law provisions. Specific services may be governed by additional agreements and requirements. Read the complete wording below for the conditions, qualifications and obligations that this short overview cannot fully express.",
    "本條款規管 FIDERE 網站的存取與使用。原文件說明網站內容僅供參考，不構成要約、投資意見或針對特定人士的建議；並載有責任限制、彌償、第三方網站連結、網站變更及條款執行等規定。適用法律條文亦提及香港法律及法院。具體服務可能另受協議及要求規管。請閱讀下方完整英文條文，以了解此概要未能逐一表達的條件、限制與義務。",
    "本条款规管 FIDERE 网站的访问与使用。原文件说明网站内容仅供参考，不构成要约、投资意见或针对特定人士的建议；并载有责任限制、弥偿、第三方网站链接、网站变更及条款执行等规定。适用法律条文亦提及香港法律及法院。具体服务可能另受协议及要求规管。请阅读下方完整英文条文，以了解此概要未能逐一表达的条件、限制与义务。",
  ],
  "regulatory-status": [
    `FIDERE TRUST LIMITED is a Hong Kong entity. Its published disclosure identifies TCSP licence number ${company.licence} and registration as a Trust Company under section 78(1) of the Trustee Ordinance (Cap. 29). The disclosure records a registration certificate issued by the Companies Registry on 11 May 2026. It also explains that services depend on the permitted scope in each jurisdiction, client eligibility and applicable legal requirements. Certain arrangements may be limited to eligible or professional clients. The complete company disclosure below sets out its stated status and restrictions; this overview does not extend the scope of any licence or registration.`,
    `FIDERE TRUST LIMITED 為香港實體。其已公佈披露列明 TCSP 牌照編號 ${company.licence}，並表示已按《受託人條例》（第29章）第78(1)條註冊為信託公司，註冊證書由公司註冊處於2026年5月11日簽發。服務須符合各司法管轄區允許的範圍、客戶資格及適用法律；部分安排可能僅向合資格或專業客戶提供。下方載有完整公司披露；此概要不擴大任何牌照或註冊範圍。`,
    `FIDERE TRUST LIMITED 为香港实体。其已公布披露列明 TCSP 牌照编号 ${company.licence}，并表示已按《受托人条例》（第29章）第78(1)条注册为信托公司，注册证书由公司注册处于2026年5月11日签发。服务须符合各司法管辖区允许的范围、客户资格及适用法律；部分安排可能仅向合资格或专业客户提供。下方载有完整公司披露；此概要不扩大任何牌照或注册范围。`,
  ],
  "compliance-kyc": [
    "FIDERE’s published compliance framework follows a risk-based approach to onboarding and ongoing relationships. It covers customer due diligence, identity and beneficial-ownership verification, individual and corporate documentation, and evidence concerning the source of funds or wealth. Sanctions screening, politically exposed persons, enhanced due diligence and transaction monitoring form part of the framework. Changes in ownership, business activity or transaction patterns may prompt further review. The policy also addresses record keeping, cooperation with competent authorities and clients’ responsibility to provide accurate updates. Service availability remains conditional on compliance review and risk acceptance. The complete policy, including document-control information, is reproduced below.",
    "FIDERE 已公佈的合規框架以風險為本，涵蓋開戶及持續客戶關係中的盡職審查、身份與實益擁有人核實、個人及企業文件，以及資金或財富來源證明。制裁篩查、政治公眾人物、加強審查與交易監察亦屬框架的一部分。所有權、業務或交易模式變動可能觸發進一步覆核。政策同時說明記錄保存、依法配合主管機關，以及客戶提供準確更新的責任。服務須經合規及風險審查；完整英文政策與文件控制資料載於下方。",
    "FIDERE 已公布的合规框架以风险为本，涵盖开户及持续客户关系中的尽职调查、身份与实益拥有人核实、个人及企业文件，以及资金或财富来源证明。制裁筛查、政治公众人物、加强审查与交易监测亦属框架的一部分。所有权、业务或交易模式变动可能触发进一步复核。政策同时说明记录保存、依法配合主管机关，以及客户提供准确更新的责任。服务须经合规及风险审查；完整英文政策与文件控制资料载于下方。",
  ],
  "risk-fees": [
    "Services can involve market, foreign-exchange, operational, settlement, counterparty, regulatory and technology risks. The published disclosure does not guarantee returns or principal protection. Charges may include service, transaction, custody, administration and third-party fees; exchange-rate spreads and intermediary deductions can also affect the amount received. Processing times depend on the payment route, jurisdiction, compliance review and banking cut-offs. Some instructions may become irreversible after acceptance by an upstream institution, and refunds are subject to applicable constraints. The disclosure also explains how to raise a complaint. The full wording below provides the qualifications behind this overview; no fixed fee quotation is given here.",
    "服務可能涉及市場、外匯、營運、結算、交易對手、監管及科技風險；已公佈披露不保證回報或本金。費用可能包括服務、交易、託管、行政及第三方收費，匯率差價與中介扣款亦可能影響實收金額。處理時間取決於支付渠道、司法管轄區、合規審查與銀行截止時間。部分指令經上游機構接受後可能無法撤回，退款亦受適用條件限制。文件另說明投訴方式。下方完整英文條文載有詳細限制；本頁概要不提供固定報價。",
    "服务可能涉及市场、外汇、运营、结算、交易对手、监管及科技风险；已公布披露不保证回报或本金。费用可能包括服务、交易、托管、行政及第三方收费，汇率差价与中介扣款亦可能影响实收金额。处理时间取决于支付渠道、司法管辖区、合规审查与银行截止时间。部分指令经上游机构接受后可能无法撤回，退款亦受适用条件限制。文件另说明投诉方式。下方完整英文条文载有详细限制；本页概要不提供固定报价。",
  ],
};

function PublishedBlock({ block }: { block: LegalBlock }) {
  if (block.tag === "h2") return <h3>{block.text}</h3>;
  if (block.tag === "h3") return <h4>{block.text}</h4>;
  return <p style={{ whiteSpace: "pre-line" }}>{block.text}</p>;
}

export function LegalPage({ locale, slug }: { locale: Locale; slug: string }) {
  const item = legalNavigation.find((entry) => entry.slug === slug);
  const document = legalDocuments.find((entry) => entry.slug === slug);
  const summary = summaries[slug];
  if (!item || !document || !summary) notFound();

  const title = text(locale, item.en, item.tc, item.sc);

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={text(locale, "LEGAL & GOVERNANCE", "法律與管治", "法律与治理")}
        title={title}
        description={text(locale, "Our published policies and disclosures.", "我們已公佈的政策與披露。", "我们已公布的政策与披露。")}
      />
      <section className="section container compliance-layout">
        <nav className="sticky-index" aria-label={text(locale, "Policies and disclosures", "政策與披露", "政策与披露")}>
          <SectionLabel>{text(locale, "IN THIS LIBRARY", "政策資料庫", "政策资料库")}</SectionLabel>
          {legalNavigation.map((entry, index) => (
            <Link key={entry.slug} href={pathFor(locale, entry.slug)} aria-current={entry.slug === slug ? "page" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {text(locale, entry.en, entry.tc, entry.sc)}
            </Link>
          ))}
        </nav>
        <div className="legal-library">
          <SectionLabel>{text(locale, "OVERVIEW", "概要", "概要")}</SectionLabel>
          <h2>{title}</h2>
          <p>{text(locale, ...summary)}</p>
          <p className="legal-note">
            {text(locale,
              "This overview does not replace the published document. The English text below preserves the wording retrieved on 9 September 2026, including the original dates and document title.",
              "本概要不取代已公佈文件。下方英文全文保留於2026年9月9日讀取的原文，包括原有日期及文件標題。中文概要並非完整條文譯本。",
              "本概要不取代已公布文件。下方英文全文保留于2026年9月9日读取的原文，包括原有日期及文件标题。中文概要并非完整条文译本。")}
          </p>
          <details id="published-document" className="policy-disclosure" open>
            <summary className="text-link">
              {text(locale, "Full published document · English", "完整已公佈文件 · 英文", "完整已公布文件 · 英文")}
            </summary>
            <article className="prose policy-document" lang="en" dir="ltr" aria-label={document.title}>
              <h2>{document.title}</h2>
              {document.blocks.map((block, index) => <PublishedBlock key={index} block={block} />)}
            </article>
          </details>
          <p className="source-caption">
            {text(locale, "Published source", "公佈來源", "公布来源")}: {" "}
            <a href={document.sourceUrl} target="_blank" rel="noopener noreferrer" lang="en" dir="ltr">{company.name} · {item.en}</a>
            <br />
            {text(locale, "Text retrieved", "原文讀取日期", "原文读取日期")}: <time dateTime={document.retrievedAt}>{locale==="ar"?"٩ سبتمبر ٢٠٢٦":"9 September 2026"}</time>
          </p>
          <TextLink href={pathFor(locale, "contact")}>
            {text(locale, "Contact us about this document", "就此文件聯絡我們", "就此文件联系我们")}
          </TextLink>
        </div>
      </section>
      <CTAEditorial locale={locale} />
    </>
  );
}
