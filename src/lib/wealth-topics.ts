export type WealthCopy = readonly [string, string, string];
export type WealthTopic = {
  slug: string;
  title: WealthCopy;
  description: WealthCopy;
  statement: WealthCopy;
  image: string;
  imageAlt: WealthCopy;
};

// Capability descriptions draw only on FIDERE's published asset-management page.
// Instrument availability is conditional; these are not product offers or recommendations.
export const wealthTopics: WealthTopic[] = [
  {
    slug: "global-markets",
    title: ["Global Markets", "環球市場", "环球市场"],
    description: ["Investment access considered alongside the trust, account and custody arrangements that support it.", "結合信託、賬戶及託管安排，考慮投資渠道。", "结合信托、账户及托管安排，考虑投资渠道。"],
    statement: ["Across markets.\nWithin a clear structure.", "連接不同市場，\n立足清晰架構。", "连接不同市场，\n立足清晰架构。"],
    image: "/images/new-york.jpg",
    imageAlt: ["Lower Manhattan seen from the waterfront", "從海濱遠望曼哈頓下城", "从海滨远望曼哈顿下城"],
  },
  {
    slug: "funds",
    title: ["Funds", "基金", "基金"],
    description: ["Mutual funds and exchange-traded funds, with attention to the mandate, dealing terms and account framework.", "共同基金與交易所買賣基金，兼顧投資範圍、交易條款及賬戶框架。", "共同基金与交易所买卖基金，兼顾投资范围、交易条款及账户框架。"],
    statement: ["Look through the fund.\nUnderstand the arrangement.", "理解基金本身，\n看清整體安排。", "理解基金本身，\n看清整体安排。"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["The lines of Hong Kong’s contemporary architecture", "香港現代建築的線條", "香港现代建筑的线条"],
  },
  {
    slug: "fixed-income",
    title: ["Fixed Income", "固定收益", "固定收益"],
    description: ["Government and corporate bonds within the relevant account and custody arrangements. Credit, maturity and liquidity remain distinct considerations.", "在相關賬戶與託管安排內接觸政府及企業債券，分別考慮信貸、到期日與流動性。", "在相关账户与托管安排内接触政府及企业债券，分别考虑信贷、到期日与流动性。"],
    statement: ["A defined maturity.\nA wider set of considerations.", "到期日明確，\n考量不止於此。", "到期日明确，\n考量不止于此。"],
    image: "/images/coastal-horizon.jpg",
    imageAlt: ["A quiet coastal horizon at sunset", "日落時分的寧靜海岸", "日落时分的宁静海岸"],
  },
  {
    slug: "cash-management",
    title: ["Cash Management", "現金管理", "现金管理"],
    description: ["Coordinating cash, deposit and money-market arrangements with the structure’s liquidity and administrative needs.", "按照架構的流動資金與行政需要，協調現金、存款及貨幣市場安排。", "按照架构的流动资金与行政需要，协调现金、存款及货币市场安排。"],
    statement: ["Consider the next payment.\nAnd the obligations beyond it.", "考慮下一筆付款，\n以及更長遠的需要。", "考虑下一笔付款，\n以及更长远的需要。"],
    image: "/images/harbour-detail.jpg",
    imageAlt: ["Victoria Harbour and the Hong Kong waterfront", "維多利亞港與香港海濱", "维多利亚港与香港海滨"],
  },
];

export const wealthTopicSlugs = wealthTopics.map((topic) => topic.slug);
