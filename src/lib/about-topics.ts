export type AboutTopicCopy = readonly [string, string, string];
export const aboutTopics: { slug: string; title: AboutTopicCopy; description: AboutTopicCopy }[] = [
  { slug: "who-we-are", title: ["Who We Are", "關於 FIDERE", "关于 FIDERE"], description: ["A Hong Kong trust and fiduciary services provider working with private clients, families and international businesses.", "一家立足香港的信託與受託服務機構，服務私人客戶、家族及國際企業。", "一家立足香港的信托与受托服务机构，服务私人客户、家族及国际企业。"] },
  { slug: "our-approach", title: ["Our Approach", "我們的方法", "我们的方法"], description: ["How FIDERE connects trust structuring, asset coordination and ongoing administration around each client’s circumstances.", "FIDERE 如何圍繞客戶情況，連結信託架構、資產協調及持續管理。", "FIDERE 如何围绕客户情况，连接信托架构、资产协调及持续管理。"] },
  { slug: "governance", title: ["Governance", "管治與責任", "治理与责任"], description: ["FIDERE’s regulatory identity, fiduciary responsibilities and approach to client due diligence and ongoing review.", "了解 FIDERE 的監管身份、受託責任，以及客戶盡職審查與持續覆核方式。", "了解 FIDERE 的监管身份、受托责任，以及客户尽职调查与持续复核方式。"] },
];
export const aboutTopicSlugs = aboutTopics.map((topic) => topic.slug);
