export type InsightCopy = readonly [string, string, string];
export type InsightArticle = {
  slug: string;
  title: InsightCopy;
  description: InsightCopy;
  category: InsightCopy;
  image: string;
  imageAlt: InsightCopy;
  introduction: InsightCopy;
  sections: { id: string; title: InsightCopy; paragraphs: InsightCopy[] }[];
  related: string[];
  furtherReading: { slug: string; title: InsightCopy }[];
  sourceUrls: string[];
};

// Original educational guides for this website, based on the source dossier.
// They are not historical FIDERE publications, investment research or personal advice.
// No invented author, publication date, recommendation or performance data is attached.
export const insightArticles: InsightArticle[] = [
  {
    slug: "trust-governance-over-time",
    title: ["A trust needs governance beyond its first day.", "信託治理，始於設立而不止於設立。", "信托治理，始于设立而不止于设立。"],
    description: ["Why a trust’s purpose, responsibilities and records need to remain connected throughout its administration.", "信託的目的、責任與記錄，為何需要在持續管理中保持一致。", "信托的目的、责任与记录，为何需要在持续管理中保持一致。"],
    category: ["Trust & governance", "信託與治理", "信托与治理"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["An upward view of Hong Kong architecture", "仰望香港建築", "仰望香港建筑"],
    introduction: ["Establishing a trust gives an arrangement a documented form. Administration is what keeps that form connected to the assets, people and decisions it was designed to serve. Thinking about both at the outset makes the continuing responsibilities easier to understand.", "設立信託，讓安排有了文件依據；持續管理，則讓這些文件與其服務的資產、人士及決策保持聯繫。在開始時一併考慮兩者，有助理解日後的責任。", "设立信托，让安排有了文件依据；持续管理，则让这些文件与其服务的资产、人士及决策保持联系。在开始时一并考虑两者，有助理解日后的责任。"],
    sections: [
      {
        id: "purpose", title: ["Begin with the purpose.", "先釐清目的。", "先厘清目的。"],
        paragraphs: [
          ["A discussion about a trust should start with what the arrangement is intended to do: hold particular assets, support family administration or provide a framework for succession. These purposes may overlap. Describing them clearly provides context for the professional advice and documents that follow.", "討論信託，應先了解安排希望達成甚麼：持有特定資產、支持家族管理，或為傳承建立框架。這些目的可能相互重疊。清晰描述目的，能為後續專業意見及文件提供背景。", "讨论信托，应先了解安排希望达成什么：持有特定资产、支持家族管理，或为传承建立框架。这些目的可能相互重叠。清晰描述目的，能为后续专业意见及文件提供背景。"],
          ["A broad intention is not a substitute for the governing documents. The scope of the trustee’s role and the decisions that can be taken must be considered within the actual arrangement and applicable law.", "概括的意願不能取代管治文件。受託人的職責範圍及可作出的決定，須結合實際安排與適用法律考慮。", "概括的意愿不能取代治理文件。受托人的职责范围及可作出的决定，须结合实际安排与适用法律考虑。"],
        ],
      },
      {
        id: "responsibilities", title: ["Make responsibilities visible.", "讓責任清晰可見。", "让责任清晰可见。"],
        paragraphs: [
          ["Trust administration may involve a trustee, financial institutions, corporate entities and professional advisers. Their responsibilities are related, but they are not interchangeable. It is useful to establish who maintains records, who provides instructions and how questions are referred to the appropriate party.", "信託管理可能涉及受託人、金融機構、企業實體及專業顧問。各方責任相互關聯，卻不能互相替代。釐清誰保存記錄、誰提供指示，以及如何將問題交予適當人士處理，有助日常協調。", "信托管理可能涉及受托人、金融机构、企业实体及专业顾问。各方责任相互关联，却不能互相替代。厘清谁保存记录、谁提供指示，以及如何将问题交予适当人士处理，有助日常协调。"],
          ["The value of this exercise is practical: a request concerning an asset can be considered alongside the account, entity and authority relevant to that request, rather than as an isolated transaction.", "這項工作的價值在於實務：處理資產相關要求時，能一併考慮對應賬戶、實體及權限，而不是把它視為孤立的交易。", "这项工作的价值在于实务：处理资产相关要求时，能一并考虑对应账户、实体及权限，而不是把它视为孤立的交易。"],
        ],
      },
      {
        id: "records", title: ["Keep the record connected to the structure.", "讓記錄反映實際架構。", "让记录反映实际架构。"],
        paragraphs: [
          ["Ownership information, account documentation and transaction records help explain how an arrangement operates. FIDERE’s published compliance framework includes beneficial-ownership verification, record keeping and ongoing review. These processes support an accurate understanding of the relationship over time.", "所有權資料、賬戶文件及交易記錄，有助說明安排如何運作。FIDERE 已公佈的合規框架包括實益擁有人核實、記錄保存及持續覆核，讓客戶關係的資料隨時間保持準確。", "所有权资料、账户文件及交易记录，有助说明安排如何运作。FIDERE 已公布的合规框架包括实益拥有人核实、记录保存及持续复核，让客户关系的资料随时间保持准确。"],
          ["When ownership, business activities or relevant circumstances change, an earlier description may no longer be sufficient. Bringing those changes into the record allows the next administrative step to be assessed on current information.", "當所有權、業務活動或相關情況改變，過往的描述可能不再足夠。及時更新記錄，能讓下一步行政安排按現況評估。", "当所有权、业务活动或相关情况改变，过往的描述可能不再足够。及时更新记录，能让下一步行政安排按现况评估。"],
        ],
      },
      {
        id: "continuity", title: ["Treat continuity as ongoing work.", "以持續工作支持延續。", "以持续工作支持延续。"],
        paragraphs: [
          ["For families, succession planning also raises questions about communication and decision-making. A family charter or meeting process may help organise that conversation, where appropriate, alongside the trust’s governing documents. Such arrangements do not guarantee a legal, tax or asset-protection outcome. Their role is to make intentions and responsibilities clearer as circumstances develop.", "對家族而言，傳承規劃亦涉及溝通與決策。在合適情況下，家族憲章或會議機制可配合信託管治文件，協助組織相關討論。這些安排不保證任何法律、稅務或資產保障結果；其作用在於隨情況發展，持續釐清意願與責任。", "对家族而言，传承规划亦涉及沟通与决策。在合适情况下，家族宪章或会议机制可配合信托治理文件，协助组织相关讨论。这些安排不保证任何法律、税务或资产保障结果；其作用在于随情况发展，持续厘清意愿与责任。"],
        ],
      },
    ],
    related: ["preparing-for-due-diligence", "cross-border-administration"],
    furtherReading: [{ slug: "solutions/private-trust", title: ["Private Trust", "私人信託", "私人信托"] }, { slug: "solutions/family-office", title: ["Family Office", "家族辦公室", "家族办公室"] }],
    sourceUrls: ["https://www.fideretrust.com/en/personal-trust", "https://www.fideretrust.com/en/family-office", "https://www.fideretrust.com/en/compliance-kyc"],
  },
  {
    slug: "preparing-for-due-diligence",
    title: ["Before the documents,\nunderstand the questions.", "準備文件之前，\n先理解問題。", "准备文件之前，\n先理解问题。"],
    description: ["A practical introduction to identity, ownership and source-of-funds information in a trust relationship.", "了解信託關係中的身份、所有權與資金來源資料。", "了解信托关系中的身份、所有权与资金来源资料。"],
    category: ["Due diligence", "盡職審查", "尽职调查"],
    image: "/images/coastal-horizon.jpg",
    imageAlt: ["A quiet shoreline and an open horizon", "寧靜海岸與開闊地平線", "宁静海岸与开阔地平线"],
    introduction: ["Due diligence is a way to understand a proposed relationship. Documents provide evidence, but they are most useful when they fit a clear explanation of the client, the arrangement and the expected activity. Preparing that explanation is a useful first step.", "盡職審查旨在了解擬建立的關係。文件提供證據，而清晰說明客戶背景、安排目的及預期活動，能讓這些證據更有意義。先整理相關說明，是有用的起點。", "尽职调查旨在了解拟建立的关系。文件提供证据，而清晰说明客户背景、安排目的及预期活动，能让这些证据更有意义。先整理相关说明，是有用的起点。"],
    sections: [
      {
        id: "identity", title: ["Who is entering the relationship?", "誰正在建立客戶關係？", "谁正在建立客户关系？"],
        paragraphs: [
          ["For an individual, onboarding may require identity and address evidence. For a company, the published FIDERE framework describes incorporation records, constitutional documents and information about directors, shareholders and authorised signatories. The required documents depend on the arrangement and risk assessment.", "個人開戶可能需要身份及地址證明。就企業而言，FIDERE 已公佈框架列明公司註冊資料、章程文件，以及董事、股東與授權簽署人的資料。所需文件取決於安排及風險評估。", "个人开户可能需要身份及地址证明。就企业而言，FIDERE 已公布框架列明公司注册资料、章程文件，以及董事、股东与授权签署人的资料。所需文件取决于安排及风险评估。"],
          ["Documents should describe the same client consistently. Where names, addresses or responsibilities have changed, explaining the change is more useful than assuming that an older document remains sufficient.", "各項文件應對同一客戶作出一致描述。如姓名、地址或職責已有變更，說明變更情況比假設舊文件仍然足夠更有幫助。", "各项文件应对同一客户作出一致描述。如姓名、地址或职责已有变更，说明变更情况比假设旧文件仍然足够更有帮助。"],
        ],
      },
      {
        id: "ownership", title: ["Who ultimately owns or controls it?", "誰最終擁有或控制？", "谁最终拥有或控制？"],
        paragraphs: [
          ["The name of a company alone does not explain its ownership. Where an arrangement contains several entities, an ownership chart can help connect the immediate shareholder to the ultimate beneficial owners. Supporting records allow those connections to be checked.", "公司名稱本身不足以說明所有權。如安排涉及多個實體，所有權架構圖有助連結直接股東與最終實益擁有人，相關記錄則讓這些關係可以核實。", "公司名称本身不足以说明所有权。如安排涉及多个实体，所有权架构图有助连接直接股东与最终实益拥有人，相关记录则让这些关系可以核实。"],
          ["FIDERE’s corporate due diligence also considers business activity, expected transactions and relevant counterparties or markets. This context helps explain why the structure is being used and what activity is anticipated.", "FIDERE 的企業盡職審查亦考慮業務活動、預期交易及相關交易對手或市場。這些背景有助解釋採用架構的原因，以及預期進行的活動。", "FIDERE 的企业尽职调查亦考虑业务活动、预期交易及相关交易对手或市场。这些背景有助解释采用架构的原因，以及预期进行的活动。"],
        ],
      },
      {
        id: "origin", title: ["What explains the funds and the wealth?", "如何說明資金與財富來源？", "如何说明资金与财富来源？"],
        paragraphs: [
          ["A source-of-funds discussion concerns the origin of money associated with a particular arrangement or activity. A source-of-wealth discussion considers the wider accumulation of wealth. The two explanations may draw on related evidence, but they answer different questions.", "資金來源的討論，關注特定安排或活動所涉及款項的來源；財富來源的討論，則考慮較廣泛的財富累積過程。兩者可能使用相關證據，但回答的是不同問題。", "资金来源的讨论，关注特定安排或活动所涉及款项的来源；财富来源的讨论，则考虑较广泛的财富累积过程。两者可能使用相关证据，但回答的是不同问题。"],
          ["The published policy allows supplementary information and, in higher-risk circumstances, further corroboration. No general guide can determine the complete evidence required for an individual case. The appropriate document request follows the actual client profile and proposed activity.", "已公佈政策容許要求補充資料，並在較高風險情況下進一步佐證。一般指南無法確定每宗個案所需的全部證據；具體文件要求須按客戶情況及擬進行活動而定。", "已公布政策允许要求补充资料，并在较高风险情况下进一步佐证。一般指南无法确定每宗个案所需的全部证据；具体文件要求须按客户情况及拟进行活动而定。"],
        ],
      },
      {
        id: "review", title: ["Keep the explanation current.", "讓說明保持更新。", "让说明保持更新。"],
        paragraphs: [
          ["Completing an initial document request does not end due diligence or guarantee acceptance. Ownership changes, new business activities and different transaction patterns may lead to further review. Clients should provide accurate updates when material circumstances change, and use the agreed communication channel for sensitive supporting records.", "完成首次文件要求，不代表盡職審查已結束，也不保證獲接納。所有權變動、新業務活動及不同交易模式可能引發進一步覆核。重要情況改變時，客戶應提供準確更新，並透過約定渠道提交敏感證明記錄。", "完成首次文件要求，不代表尽职调查已结束，也不保证获接纳。所有权变动、新业务活动及不同交易模式可能引发进一步复核。重要情况改变时，客户应提供准确更新，并通过约定渠道提交敏感证明记录。"],
        ],
      },
    ],
    related: ["trust-governance-over-time", "cross-border-administration"],
    furtherReading: [{ slug: "compliance/client-due-diligence", title: ["Client Due Diligence", "客戶盡職審查", "客户尽职调查"] }, { slug: "compliance/source-of-funds", title: ["Source of Funds & Wealth", "資金與財富來源", "资金与财富来源"] }],
    sourceUrls: ["https://www.fideretrust.com/en/compliance-kyc", "https://www.fideretrust.com/about"],
  },
  {
    slug: "cross-border-administration",
    title: ["Cross-border assets need\na connected administrative picture.", "跨境資產，\n需要完整的管理脈絡。", "跨境资产，\n需要完整的管理脉络。"],
    description: ["Connecting ownership, accounts and transaction records without assuming that one jurisdiction’s rules apply everywhere.", "連結所有權、賬戶與交易記錄，同時理解不同司法管轄區的要求。", "连接所有权、账户与交易记录，同时理解不同司法管辖区的要求。"],
    category: ["Cross-border arrangements", "跨境安排", "跨境安排"],
    image: "/images/hero-hong-kong.jpg",
    imageAlt: ["Victoria Harbour at dusk", "黃昏時分的維多利亞港", "黄昏时分的维多利亚港"],
    introduction: ["An asset, the entity that holds it and the account through which a transaction settles may sit in different places. A useful administrative picture connects those elements while keeping the requirements of each jurisdiction visible.", "資產、持有資產的實體，以及交易結算所用的賬戶，可能分處不同地點。有用的管理脈絡，能連結這些元素，同時清楚保留各司法管轄區的要求。", "资产、持有资产的实体，以及交易结算所用的账户，可能分处不同地点。有用的管理脉络，能连接这些元素，同时清楚保留各司法管辖区的要求。"],
    sections: [
      {
        id: "map", title: ["Separate the asset, the owner and the account.", "分清資產、持有人與賬戶。", "分清资产、持有人与账户。"],
        paragraphs: [
          ["Start by describing what is held, through which entity or trust arrangement, and at which institution. These are different parts of the same picture. An account location alone does not explain the ownership structure or the purpose of a transaction.", "先描述持有甚麼、透過哪個實體或信託安排持有，以及涉及哪間機構。這些是同一脈絡中的不同部分。單憑賬戶所在地，不能完整說明所有權架構或交易目的。", "先描述持有什么、通过哪个实体或信托安排持有，以及涉及哪间机构。这些是同一脉络中的不同部分。单凭账户所在地，不能完整说明所有权架构或交易目的。"],
          ["FIDERE’s published services include asset-holding administration, account coordination and cross-border transaction support. These roles bring the relevant records and procedures together; they do not make every account or service available in every location.", "FIDERE 已公佈服務包括資產持有管理、賬戶協調及跨境交易支持。這些角色連結相關記錄與程序，並不代表所有地點均可使用每種賬戶或服務。", "FIDERE 已公布服务包括资产持有管理、账户协调及跨境交易支持。这些角色连接相关记录与程序，并不代表所有地点均可使用每种账户或服务。"],
        ],
      },
      {
        id: "instructions", title: ["Understand what a transaction needs.", "了解交易所需條件。", "了解交易所需条件。"],
        paragraphs: [
          ["An instruction needs more context than an amount and a destination. The relevant parties, supporting documents and purpose must be understood within the agreed arrangement. Compliance review and the requirements of the institutions involved can affect whether and how it proceeds.", "一項指示所需的背景，不止金額與收款地點。相關各方、證明文件及目的，均須在約定安排內理解。合規審查及相關機構要求，可能影響交易能否進行及如何處理。", "一项指示所需的背景，不止金额与收款地点。相关各方、证明文件及目的，均须在约定安排内理解。合规审查及相关机构要求，可能影响交易能否进行及如何处理。"],
          ["Currency, intermediary processing and banking cut-off times also matter. The published Risk & Fees disclosure notes that processing can be delayed and some accepted instructions may become irreversible. Administrative planning should leave room for those conditions.", "幣種、中介處理及銀行截止時間亦需考慮。已公佈的《風險及費用》指出，處理可能延誤，部分已接納指示亦可能無法撤回。行政規劃應顧及這些條件。", "币种、中介处理及银行截止时间亦需考虑。已公布的《风险及费用》指出，处理可能延误，部分已接纳指示亦可能无法撤回。行政规划应顾及这些条件。"],
        ],
      },
      {
        id: "records", title: ["Connect records across the arrangement.", "連結各項安排的記錄。", "连接各项安排的记录。"],
        paragraphs: [
          ["Ownership records explain the structure; account and transaction records explain activity within it. Keeping them consistent helps identify when a new instruction differs from the expected pattern, or when a change in an entity requires updated information elsewhere.", "所有權記錄說明架構，賬戶與交易記錄則說明其中活動。保持資料一致，有助識別新指示是否偏離預期模式，或某個實體變動是否需要同步更新其他資料。", "所有权记录说明架构，账户与交易记录则说明其中活动。保持资料一致，有助识别新指示是否偏离预期模式，或某个实体变动是否需要同步更新其他资料。"],
          ["This is also why ongoing due diligence matters after an account has been established. The purpose is a current understanding of the client relationship, rather than reliance on a set of documents that once described it.", "這亦說明賬戶設立後持續盡職審查的重要性：目的是按現況了解客戶關係，而不是一直依賴曾經描述該關係的一組文件。", "这亦说明账户设立后持续尽职调查的重要性：目的是按现况了解客户关系，而不是一直依赖曾经描述该关系的一组文件。"],
        ],
      },
      {
        id: "jurisdiction", title: ["Keep jurisdiction-specific advice in the picture.", "保留各地專業意見的位置。", "保留各地专业意见的位置。"],
        paragraphs: [
          ["Coordination does not replace legal, tax or investment advice. Ownership, reporting and service eligibility must be considered under the rules that apply to the people, entities and assets involved. A connected structure should make those questions easier to identify, without promising a uniform outcome across borders.", "協調不能取代法律、稅務或投資意見。所有權、申報與服務資格，須按適用於相關人士、實體及資產的規則考慮。相互連結的架構應讓這些問題更易識別，而不是承諾各地均有相同結果。", "协调不能取代法律、税务或投资意见。所有权、申报与服务资格，须按适用于相关人士、实体及资产的规则考虑。相互连接的架构应让这些问题更易识别，而不是承诺各地均有相同结果。"],
        ],
      },
    ],
    related: ["preparing-for-due-diligence", "trust-governance-over-time"],
    furtherReading: [{ slug: "solutions/transaction-support", title: ["Transaction Support", "交易支持", "交易支持"] }, { slug: "wealth-management/global-markets", title: ["Global Markets", "環球市場", "环球市场"] }],
    sourceUrls: ["https://www.fideretrust.com/", "https://www.fideretrust.com/en/personal-trust", "https://www.fideretrust.com/en/risk-fees", "https://www.fideretrust.com/en/compliance-kyc"],
  },
];

export const insightSlugs = insightArticles.map((article) => article.slug);
