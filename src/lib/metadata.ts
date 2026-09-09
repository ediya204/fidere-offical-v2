import type { Metadata } from "next";
import { company, type Locale, localeSeo, locales, navigation, legalNavigation, pathFor, text } from "./site";
import { insightArticles } from "./insights";
import { solutionDetails } from "./solutions";
import { wealthTopics } from "./wealth-topics";

type LocalizedSeoText = readonly [string, string, string, string];

const seoTitles: Record<string, LocalizedSeoText> = {
 "": ["Hong Kong Trust & Fiduciary Services", "香港信託及受託服務", "香港信托及受托服务", "خدمات الاستئمان والأمانة في هونغ كونغ"],
 about: ["About FIDERE TRUST in Hong Kong", "關於香港 FIDERE TRUST", "关于香港 FIDERE TRUST", "عن FIDERE TRUST في هونغ كونغ"],
 solutions: ["Trust & Fiduciary Solutions", "信託及受託方案", "信托及受托方案", "حلول الاستئمان وخدمات الأمانة"],
 "wealth-management": ["Wealth Management & Investment Administration", "財富管理及投資行政", "财富管理及投资行政", "إدارة الثروات والاستثمارات"],
 compliance: ["Trust Compliance & Governance", "信託合規與管治", "信托合规与治理", "الامتثال والحوكمة في الاستئمان"],
 insights: ["Trust, Governance & Compliance Insights", "信託、管治與合規觀點", "信托、治理与合规观点", "رؤى حول الاستئمان والحوكمة والامتثال"],
 contact: ["Contact FIDERE TRUST Hong Kong", "聯絡香港 FIDERE TRUST", "联系香港 FIDERE TRUST", "تواصل مع FIDERE TRUST في هونغ كونغ"],
 "wealth-management/funds": ["Investment Funds within Trust Structures", "信託架構內的投資基金", "信托架构内的投资基金", "صناديق الاستثمار ضمن هياكل الاستئمان"],
 "insights/trust-governance-over-time": ["Trust Governance Beyond Formation", "信託設立後的持續管治", "信托设立后的持续治理", "حوكمة الاستئمان بعد التأسيس"],
 "insights/preparing-for-due-diligence": ["Preparing for Trust Due Diligence", "信託盡職審查準備", "信托尽职调查准备", "الاستعداد للعناية الواجبة في الاستئمان"],
 "insights/cross-border-administration": ["Cross-Border Asset Administration", "跨境資產行政管理", "跨境资产行政管理", "إدارة الأصول عبر الحدود"],
};
const descriptions:Record<string,readonly[string,string,string]>={
 about:["Meet FIDERE TRUST: a Hong Kong fiduciary institution supporting private clients, families and corporate structures through considered administration.","了解 FIDERE TRUST：立足香港，以審慎的受託管理支持私人客戶、家族及企業架構。","了解 FIDERE TRUST：立足香港，以审慎的受托管理支持私人客户、家族及企业架构。"],
 solutions:["Explore private trust, family office, corporate trust, succession and asset administration services shaped around ownership and governance.","探索私人信託、家族辦公室、企業信託、傳承及資產管理安排，從所有權與治理出發。","探索私人信托、家族办公室、企业信托、传承及资产管理安排，从所有权与治理出发。"],
 "wealth-management":["Explore investment account coordination, global markets, funds, fixed income and cash arrangements within a trust structure.","了解信託架構內的投資賬戶協調、環球市場、基金、固定收益及現金安排。","了解信托架构内的投资账户协调、环球市场、基金、固定收益及现金安排。"],
 compliance:["FIDERE’s published approach to AML, client due diligence, ownership and source verification, sanctions screening and ongoing monitoring.","FIDERE 已公佈的反洗錢、客戶盡職審查、所有權與來源核實、制裁篩查及持續監察框架。","FIDERE 已公布的反洗钱、客户尽职调查、所有权与来源核实、制裁筛查及持续监测框架。"],
 insights:["Reading guides on trust structures, family governance and the information behind a fiduciary relationship.","有關信託架構、家族治理及受託關係所需資料的閱讀指南。","有关信托架构、家族治理及受托关系所需资料的阅读指南。"],
 contact:["Contact FIDERE TRUST in Hong Kong to discuss your trust, family office or corporate administration requirements.","聯絡香港 FIDERE TRUST，討論信託、家族辦公室或企業管理需要。","联系香港 FIDERE TRUST，讨论信托、家族办公室或企业管理需要。"],
 login:["Client access assistance for existing FIDERE TRUST relationships. Contact the team for the appropriate access arrangements.","為現有 FIDERE TRUST 客戶提供賬戶存取協助，請聯絡團隊了解適當安排。","为现有 FIDERE TRUST 客户提供账户访问协助，请联系团队了解适当安排。"],
 privacy:["FIDERE TRUST’s published privacy policy: personal data collection, use, disclosure, retention and access rights.","FIDERE TRUST 已公佈私隱政策：個人資料收集、使用、披露、保存及查閱權利。","FIDERE TRUST 已公布隐私政策：个人资料收集、使用、披露、保存及查阅权利。"],
 terms:["Read FIDERE TRUST’s published terms and conditions governing access to and use of its website.","閱讀規管 FIDERE TRUST 網站存取與使用的已公佈條款及細則。","阅读规管 FIDERE TRUST 网站访问与使用的已公布条款及细则。"],
 disclaimer:["Read the Terms of Use published through FIDERE TRUST’s Disclaimer page, including limitations and website-use provisions.","閱讀 FIDERE TRUST 免責聲明頁所刊 Terms of Use，包括責任限制及網站使用規定。","阅读 FIDERE TRUST 免责声明页所刊 Terms of Use，包括责任限制及网站使用规定。"],
 "regulatory-status":["FIDERE TRUST’s published Hong Kong registration, TCSP licence and service-scope disclosures.","FIDERE TRUST 已公佈的香港註冊、TCSP 牌照及服務範圍披露。","FIDERE TRUST 已公布的香港注册、TCSP牌照及服务范围披露。"],
 "compliance-kyc":["Full published FIDERE Compliance & KYC policy covering client identification, documentation, review and record keeping.","FIDERE 已公佈完整合規及客戶審查政策，涵蓋身份核實、文件、覆核及記錄保存。","FIDERE 已公布完整合规及客户审查政策，涵盖身份核实、文件、复核及记录保存。"],
 "risk-fees":["FIDERE’s published disclosure on service risks, fees, transaction processing, cancellations and complaints.","FIDERE 已公佈服務風險、費用、交易處理、取消及投訴披露。","FIDERE 已公布服务风险、费用、交易处理、取消及投诉披露。"],
};
function normalizeMetadataText(value: string) {
 return value.replace(/\s+/g, " ").trim();
}

function localizedTriple(locale:Locale,value:readonly [string,string,string]) {
 return text(locale,value[0],value[1],value[2]);
}

export function pageSeoCopy(locale:Locale,slug="",customTitle?:string,customDescription?:string) {
 const item=[...navigation,...legalNavigation].find(item=>item.slug===slug);
 const title=normalizeMetadataText(seoTitles[slug]?text(locale,...seoTitles[slug]):customTitle??(item?text(locale,item.en,item.tc,item.sc):slug==="login"?text(locale,"Client access","客戶服務","客户服务"):text(locale,"Trust, structured for the long term","信託有序，傳承長遠","信托有序，传承长远")));
 const brandedTitle=`FIDERE TRUST | ${title}`;
 const description=normalizeMetadataText(customDescription??(descriptions[slug]?text(locale,...descriptions[slug]):text(locale,"Hong Kong trust and fiduciary services for private clients, families and international businesses. Explore trust administration, succession planning and corporate services.","FIDERE TRUST LIMITED 立足香港，為私人客戶、家族及國際企業提供信託管理、傳承規劃與企業受託服務。","FIDERE TRUST LIMITED 立足香港，为私人客户、家族及国际企业提供信托管理、传承规划与企业受托服务。")));
 return { title, brandedTitle, description };
}

const imageDimensions:Record<string,{width:number;height:number}>={
 "/images/hero-fidere-wake.webp":{width:2000,height:1125},
 "/images/hero-hong-kong.jpg":{width:2400,height:1350},
 "/images/hong-kong-architecture.jpg":{width:1600,height:1200},
 "/images/harbour-detail.jpg":{width:1600,height:900},
 "/images/coastal-horizon.jpg":{width:1600,height:1067},
 "/images/new-york.jpg":{width:1600,height:1067},
};

function socialImageFor(locale:Locale,slug:string) {
 const [,detailSlug]=slug.split("/");
 const detail=slug.startsWith("solutions/")
  ? solutionDetails.find(item=>item.slug===detailSlug)
  : slug.startsWith("wealth-management/")
   ? wealthTopics.find(item=>item.slug===detailSlug)
   : slug.startsWith("insights/")
    ? insightArticles.find(item=>item.slug===detailSlug)
    : undefined;
 if(detail){
  return {url:detail.image,...imageDimensions[detail.image],alt:localizedTriple(locale,detail.imageAlt)};
 }
 if(slug===""){
  return {url:"/images/hero-fidere-wake.webp",...imageDimensions["/images/hero-fidere-wake.webp"],alt:text(locale,"A speedboat tracing a circular wake across deep blue water","快艇在深藍海面劃出環形航跡","快艇在深蓝海面划出环形航迹","قارب سريع يرسم مساراً دائرياً على مياه زرقاء عميقة")};
 }
 if(slug==="about"||slug.startsWith("about/")){
  return {url:"/images/hong-kong-architecture.jpg",...imageDimensions["/images/hong-kong-architecture.jpg"],alt:text(locale,"The measured lines of Hong Kong architecture","香港建築的俐落線條","香港建筑的利落线条","الخطوط المتناسقة للعمارة في هونغ كونغ")};
 }
 return {url:"/images/hero-hong-kong.jpg",...imageDimensions["/images/hero-hong-kong.jpg"],alt:text(locale,"Victoria Harbour and the Hong Kong skyline at dusk","黃昏時分的維多利亞港與香港天際線","黄昏时分的维多利亚港与香港天际线","ميناء فيكتوريا وأفق هونغ كونغ عند الغسق")};
}

export function pageMetadata(locale:Locale,slug="",customTitle?:string,customDescription?:string):Metadata {
 const {brandedTitle,description}=pageSeoCopy(locale,slug,customTitle,customDescription);
 const url=company.website+pathFor(locale,slug);
 const indexable=slug!=="login";
 const socialImage=socialImageFor(locale,slug);
 return {
  title:{absolute:brandedTitle},
  description,
  alternates:{
   canonical:url,
   languages:Object.fromEntries([
    ...locales.map(l=>[localeSeo[l].hrefLang,company.website+pathFor(l,slug)]),
    ["x-default",company.website+pathFor("en",slug)],
   ]),
  },
  robots:{
   index:indexable,
   follow:true,
   ...(indexable?{}:{noarchive:true}),
   googleBot:{
    index:indexable,
    follow:true,
    "max-video-preview":-1,
    "max-image-preview":"large",
    "max-snippet":-1,
   },
  },
  openGraph:{
   title:brandedTitle,
   description,
   url,
   siteName:company.brand,
   locale:localeSeo[locale].openGraph,
   alternateLocale:locales.filter(item=>item!==locale).map(item=>localeSeo[item].openGraph),
   type:slug.startsWith("insights/")?"article":"website",
   images:[socialImage],
  },
  twitter:{card:"summary_large_image",title:brandedTitle,description,images:[{url:socialImage.url,alt:socialImage.alt}]},
 };
}
