export type SolutionCopy = readonly [string, string, string];

export type SolutionDetailData = {
  slug: string;
  title: SolutionCopy;
  description: SolutionCopy;
  statement: SolutionCopy;
  overview: SolutionCopy;
  capabilities: { title: SolutionCopy; body: SolutionCopy }[];
  considerations: SolutionCopy;
  image: string;
  imageAlt: SolutionCopy;
  related: readonly string[];
};

// Editorial summaries of the current FIDERE service disclosures.
// Authority and factual boundaries: docs/content-sources.md.
// The capability headings organise the disclosed scope; they are not new products.
export const solutionDetails: SolutionDetailData[] = [
  {
    slug: "corporate-trust",
    title: ["Corporate Trust", "企業信託", "企业信托"],
    description: ["Fiduciary and corporate administration for business interests, holding structures and transactions.", "為企業權益、持有架構及交易提供受託與企業管理安排。", "为企业权益、持有架构及交易提供受托与企业管理安排。"],
    statement: ["The entity, the ownership,\nand the responsibilities.", "實體、所有權，\n以及相應責任。", "实体、所有权，\n以及相应责任。"],
    overview: ["Corporate interests may sit within a trust, a holding company or a wider family structure. FIDERE brings its disclosed trustee, director, company formation and administration services into that context. The starting point is a clear account of who owns and controls the structure, what it holds and what each appointment is intended to achieve.", "企業權益可以置於信託、控股公司或更廣泛的家族架構之中。FIDERE 將已披露的受託人、董事、公司設立及管理服務納入這一背景。首先需要了解架構的所有權與控制、持有資產，以及每項委任的目的。", "企业权益可以置于信托、控股公司或更广泛的家族架构之中。FIDERE 将已披露的受托人、董事、公司设立及管理服务纳入这一背景。首先需要了解架构的所有权与控制、持有资产，以及每项委任的目的。"],
    capabilities: [
      {title:["Ownership and purpose", "所有權與目的", "所有权与目的"],body:["Consider the proposed entity and its place in the wider arrangement. Corporate due diligence establishes the relevant ownership, control and business information before acceptance.","考慮擬定實體及其在整體安排中的位置，透過企業盡職審查，在接納前了解相關所有權、控制與業務資料。","考虑拟定实体及其在整体安排中的位置，通过企业尽职调查，在接纳前了解相关所有权、控制与业务资料。"]},
      {title:["Fiduciary appointments", "受託委任", "受托委任"],body:["Trustee and director roles are considered in relation to the governing documents and applicable responsibilities. The agreed appointment defines the work to be undertaken.","結合管治文件及適用責任，考慮受託人與董事角色，並由約定委任界定所需工作。","结合治理文件及适用责任，考虑受托人与董事角色，并由约定委任界定所需工作。"]},
      {title:["Continuing administration", "持續管理", "持续管理"],body:["Coordinate corporate records, relevant service providers and changes to the arrangement within the agreed mandate. Changes in ownership or activity may require further compliance review.","在約定職責範圍內協調企業記錄、相關服務提供者及安排變更。所有權或活動變更可能需要進一步合規覆核。","在约定职责范围内协调企业记录、相关服务提供者及安排变更。所有权或活动变更可能需要进一步合规复核。"]},
    ],
    considerations:["Corporate trust is used here as a grouping of FIDERE’s disclosed fiduciary and corporate services. It does not imply securities issuance, debenture trustee services or a regulated activity beyond the agreed and permitted scope. Each appointment remains subject to due diligence and applicable requirements.","本頁以企業信託統稱 FIDERE 已披露的受託與企業服務，不表示提供證券發行、債券受託或超出約定及允許範圍的受規管活動。各項委任仍須符合盡職審查及適用要求。","本页以企业信托统称 FIDERE 已披露的受托与企业服务，不表示提供证券发行、债券受托或超出约定及允许范围的受规管活动。各项委任仍须符合尽职调查及适用要求。"],
    image:"/images/hong-kong-architecture.jpg",
    imageAlt:["Hong Kong architecture","香港建築","香港建筑"],
    related:["trustee-directors","company-formation","transaction-support"],
  },
  {
    slug: "private-trust",
    title: ["Private Trust", "私人信託", "私人信托"],
    description: ["Trust structuring and administration shaped around the assets, beneficiaries and purposes of the trust.", "圍繞信託資產、受益人與設立目的，安排信託架構及管理。", "围绕信托资产、受益人与设立目的，安排信托架构及管理。"],
    statement: ["A structure for what\nyou wish to carry forward.", "為希望延續的事物，\n建立架構。", "为希望延续的事物，\n建立架构。"],
    overview: ["A private trust brings the holding and administration of assets into a defined arrangement. We work with clients to consider the purpose of the trust, the assets involved and the needs of its beneficiaries. Our role extends from structuring to ongoing administration and coordination with relevant service providers.", "私人信託將資產持有與管理納入明確的安排。我們與客戶一起考慮信託目的、涉及的資產及受益人的需要，服務涵蓋架構安排、持續管理，以及與相關服務提供者的協調。", "私人信托将资产持有与管理纳入明确的安排。我们与客户一起考虑信托目的、涉及的资产及受益人的需要，服务涵盖架构安排、持续管理，以及与相关服务提供者的协调。"],
    capabilities: [
      { title: ["Trust structuring", "信託架構安排", "信托架构安排"], body: ["Consider the trust’s purpose and asset-holding arrangements together, with attention to the circumstances of the client and intended beneficiaries.", "一併考慮信託目的與資產持有安排，兼顧客戶及擬定受益人的情況。", "一并考虑信托目的与资产持有安排，兼顾客户及拟定受益人的情况。"] },
      { title: ["Asset holding and coordination", "資產持有與協調", "资产持有与协调"], body: ["Support real-asset holding structures and coordinate account or custody arrangements through relevant institutions, subject to the agreed scope.", "在約定範圍內，支持實體資產持有架構，並透過相關機構協調賬戶或託管安排。", "在约定范围内，支持实体资产持有架构，并通过相关机构协调账户或托管安排。"] },
      { title: ["Ongoing administration", "持續管理", "持续管理"], body: ["Administer the trust and support relevant documentation, due diligence and transaction procedures as the arrangement continues over time.", "持續管理信託，並就相關文件、盡職審查及交易程序提供支持。", "持续管理信托，并就相关文件、尽职调查及交易程序提供支持。"] },
    ],
    considerations: ["Each arrangement is subject to client due diligence, applicable law and the trust documents. Legal and tax outcomes depend on individual circumstances and professional advice; a trust does not guarantee asset protection or tax treatment.", "每項安排均須符合客戶盡職審查、適用法律及信託文件要求。法律與稅務結果視乎個別情況及專業意見而定；信託並不保證資產保障或稅務待遇。", "每项安排均须符合客户尽职调查、适用法律及信托文件要求。法律与税务结果视乎个别情况及专业意见而定；信托并不保证资产保障或税务待遇。"],
    image: "/images/harbour-detail.jpg",
    imageAlt: ["Victoria Harbour, Hong Kong", "香港維多利亞港", "香港维多利亚港"],
    related: ["succession-planning", "family-office"],
  },
  {
    slug: "succession-planning",
    title: ["Succession Planning", "傳承規劃", "传承规划"],
    description: ["Arrangements for the orderly transition of wealth and responsibilities between generations.", "為世代之間的財富與責任交接作出有序安排。", "为世代之间的财富与责任交接作出有序安排。"],
    statement: ["Continuity begins\nwith a clear purpose.", "延續，\n始於清晰的目的。", "延续，\n始于清晰的目的。"],
    overview: ["Succession planning considers the people and responsibilities around an asset as well as the asset itself. We support trust and family arrangements that give form to a client’s longer-term intentions. The work connects the present holding structure with questions of continuity, family governance and the needs of the next generation.", "傳承規劃既考慮資產本身，亦關注相關的人與責任。我們透過信託與家族安排，支持客戶落實長遠意願，將現有持有架構與延續性、家族治理及下一代的需要連結起來。", "传承规划既考虑资产本身，亦关注相关的人与责任。我们通过信托与家族安排，支持客户落实长远意愿，将现有持有架构与延续性、家族治理及下一代的需要连接起来。"],
    capabilities: [
      { title: ["Long-term intentions", "長遠意願", "长远意愿"], body: ["Consider the intended purpose of the arrangements and the people they are designed to serve before defining the structure.", "在界定架構前，先考慮安排的預期目的及其服務對象。", "在界定架构前，先考虑安排的预期目的及其服务对象。"] },
      { title: ["Trust and family arrangements", "信託與家族安排", "信托与家族安排"], body: ["Bring succession considerations into trust administration and family governance, with appropriate attention to existing asset-holding arrangements.", "將傳承考慮納入信託管理及家族治理，同時適當考慮現有資產持有安排。", "将传承考虑纳入信托管理及家族治理，同时适当考虑现有资产持有安排。"] },
      { title: ["Next-generation continuity", "世代延續", "世代延续"], body: ["Support the administrative and governance arrangements associated with next-generation planning, alongside the family’s wider professional advice.", "配合家族的其他專業意見，支持下一代規劃所涉及的行政及治理安排。", "配合家族的其他专业意见，支持下一代规划所涉及的行政及治理安排。"] },
    ],
    considerations: ["Succession arrangements must be considered in the context of the relevant jurisdictions, governing documents and family circumstances. Independent legal and tax advice may be necessary. No particular inheritance, tax or asset-protection outcome is assured.", "傳承安排須結合相關司法管轄區、管治文件及家族情況考慮，並可能需要獨立法律與稅務意見。任何特定繼承、稅務或資產保障結果均不獲保證。", "传承安排须结合相关司法管辖区、治理文件及家族情况考虑，并可能需要独立法律与税务意见。任何特定继承、税务或资产保障结果均不获保证。"],
    image: "/images/harbour-detail.jpg",
    imageAlt: ["The waters of Hong Kong’s harbour", "香港海港水面", "香港海港水面"],
    related: ["private-trust", "family-office"],
  },
  {
    slug: "family-office",
    title: ["Family Office Services", "家族辦公室服務", "家族办公室服务"],
    description: ["Coordinated trust administration, custody, reporting and family governance arrangements.", "協調信託管理、託管、報告及家族治理安排。", "协调信托管理、托管、报告及家族治理安排。"],
    statement: ["One family.\nA connected arrangement.", "圍繞家族，\n連結各項安排。", "围绕家族，\n连接各项安排。"],
    overview: ["A family office brings together responsibilities that might otherwise sit in separate places. We support the architecture and administration of these arrangements, connecting trust, custody, payment and reporting needs. Family governance provides a further point of reference for how decisions are considered, communicated and carried forward across generations.", "家族辦公室將原本可能分散的責任連結起來。我們支持相關架構與管理安排，協調信託、託管、付款及報告需要。家族治理則為決策的考慮、溝通及世代延續提供依據。", "家族办公室将原本可能分散的责任连接起来。我们支持相关架构与管理安排，协调信托、托管、付款及报告需要。家族治理则为决策的考虑、沟通及世代延续提供依据。"],
    capabilities: [
      { title: ["Coordinated administration", "協調管理", "协调管理"], body: ["Bring trust administration, custody, payment and reporting arrangements into a coordinated framework around the family’s requirements.", "圍繞家族需要，將信託管理、託管、付款及報告安排納入協調框架。", "围绕家族需要，将信托管理、托管、付款及报告安排纳入协调框架。"] },
      { title: ["Family governance", "家族治理", "家族治理"], body: ["Support family charters, councils, meetings and decision protocols as part of the wider family-office architecture.", "在整體家族辦公室架構中，就家族憲章、理事會、會議及決策機制提供支持。", "在整体家族办公室架构中，就家族宪章、理事会、会议及决策机制提供支持。"] },
      { title: ["Planning across generations", "跨世代規劃", "跨世代规划"], body: ["Connect next-generation planning with the family’s ongoing governance and administrative arrangements, rather than treating each decision in isolation.", "將下一代規劃與家族持續治理及行政安排相連，整體考慮各項決策。", "将下一代规划与家族持续治理及行政安排相连，整体考虑各项决策。"] },
    ],
    considerations: ["The scope is agreed around the family’s structure and relevant jurisdictions. Account access, transactions and particular investment services remain subject to onboarding, eligibility and regulatory requirements. Legal and tax arrangements require case-specific professional advice.", "服務範圍按家族架構及相關司法管轄區約定。賬戶使用、交易及特定投資服務仍須符合開戶、資格及監管要求。法律與稅務安排須按個案尋求專業意見。", "服务范围按家族架构及相关司法管辖区约定。账户使用、交易及特定投资服务仍须符合开户、资格及监管要求。法律与税务安排须按个案寻求专业意见。"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["Architectural details in Hong Kong", "香港建築細節", "香港建筑细节"],
    related: ["private-trust", "succession-planning"],
  },
  {
    slug: "trustee-directors",
    title: ["Trustee & Directors", "受託人與董事服務", "受托人与董事服务"],
    description: ["Trustee and director services to support the administration of trusts and corporate structures.", "透過受託人與董事服務，支持信託及企業架構的管理。", "通过受托人与董事服务，支持信托及企业架构的管理。"],
    statement: ["Defined roles.\nConsidered responsibilities.", "明確角色，\n審慎履責。", "明确角色，\n审慎履责。"],
    overview: ["Trust and corporate structures need clearly understood roles as well as sound documentation. FIDERE provides trustee and director services within its disclosed fiduciary and corporate offering. The nature of each appointment, its responsibilities and the administration required are considered in the context of the structure and the relevant jurisdiction.", "信託與企業架構除了需要完善文件，亦需要清晰的角色分工。FIDERE 在已披露的受託及企業服務範圍內，提供受託人與董事服務。每項委任的性質、責任及所需管理工作，均按架構及相關司法管轄區考慮。", "信托与企业架构除了需要完善文件，亦需要清晰的角色分工。FIDERE 在已披露的受托及企业服务范围内，提供受托人与董事服务。每项委任的性质、责任及所需管理工作，均按架构及相关司法管辖区考虑。"],
    capabilities: [
      { title: ["Trustee services", "受託人服務", "受托人服务"], body: ["Act within the trust arrangement, with the scope of the role defined by its governing documents and applicable requirements.", "在信託安排內履行職責，角色範圍由管治文件及適用要求界定。", "在信托安排内履行职责，角色范围由治理文件及适用要求界定。"] },
      { title: ["Director services", "董事服務", "董事服务"], body: ["Support corporate structures through director services, with appointments considered according to the entity, jurisdiction and agreed arrangements.", "透過董事服務支持企業架構，按實體、司法管轄區及約定安排考慮委任。", "通过董事服务支持企业架构，按实体、司法管辖区及约定安排考虑委任。"] },
      { title: ["Related administration", "相關管理工作", "相关管理工作"], body: ["Coordinate the administrative responsibilities associated with the appointment and its place within the wider trust or corporate structure.", "協調與委任相關的行政責任，以及其在整體信託或企業架構中的安排。", "协调与委任相关的行政责任，以及其在整体信托或企业架构中的安排。"] },
    ],
    considerations: ["An appointment is subject to acceptance, due diligence and the applicable governing documents. Its legal responsibilities cannot be inferred from a service label. The proposed role and any need for independent professional advice should be established before proceeding.", "委任須經接納、盡職審查並符合適用管治文件。其法律責任不能僅憑服務名稱推斷。進行前應確定擬定角色，以及是否需要獨立專業意見。", "委任须经接纳、尽职调查并符合适用治理文件。其法律责任不能仅凭服务名称推断。进行前应确定拟定角色，以及是否需要独立专业意见。"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["Hong Kong’s architectural landscape", "香港建築景觀", "香港建筑景观"],
    related: ["company-formation", "private-trust"],
  },
  {
    slug: "company-formation",
    title: ["Company Formation", "公司設立", "公司设立"],
    description: ["Company incorporation and ongoing administration for private and corporate requirements.", "因應私人及企業需要，提供公司註冊及持續管理服務。", "因应私人及企业需要，提供公司注册及持续管理服务。"],
    statement: ["Establish the entity.\nConsider its place.", "設立實體，\n兼顧整體。", "设立实体，\n兼顾整体。"],
    overview: ["A company can form part of a wider asset-holding or business arrangement. FIDERE supports company incorporation and ongoing administration within its corporate services. We consider the entity in relation to the intended structure, its ownership and the jurisdictions involved, so that formation and subsequent administration can be discussed together.", "公司可以是整體資產持有或業務安排的一部分。FIDERE 透過企業服務支持公司註冊及持續管理。我們結合擬定架構、所有權及涉及的司法管轄區考慮實體，讓公司設立與後續管理得以一併規劃。", "公司可以是整体资产持有或业务安排的一部分。FIDERE 通过企业服务支持公司注册及持续管理。我们结合拟定架构、所有权及涉及的司法管辖区考虑实体，让公司设立与后续管理得以一并规划。"],
    capabilities: [
      { title: ["Incorporation support", "註冊成立支持", "注册成立支持"], body: ["Support the incorporation process for the agreed company arrangement, with the proposed activities and jurisdiction taken into account.", "按約定的公司安排支持註冊成立程序，並考慮擬進行的活動及司法管轄區。", "按约定的公司安排支持注册成立程序，并考虑拟进行的活动及司法管辖区。"] },
      { title: ["Ownership information", "所有權資料", "所有权资料"], body: ["Establish the relevant ownership and control information through corporate due diligence, including beneficial ownership verification where required.", "透過企業盡職審查了解相關所有權與控制資料，並按要求核實實益擁有人。", "通过企业尽职调查了解相关所有权与控制资料，并按要求核实实益拥有人。"] },
      { title: ["Ongoing company administration", "持續公司管理", "持续公司管理"], body: ["Support administration after incorporation and coordinate relevant corporate services within the scope agreed for the entity.", "在註冊成立後提供管理支持，並在實體的約定範圍內協調相關企業服務。", "在注册成立后提供管理支持，并在实体的约定范围内协调相关企业服务。"] },
    ],
    considerations: ["Formation is subject to the requirements of the relevant jurisdiction, client due diligence and acceptance of the proposed activity. Incorporation does not itself confer a licence for regulated business, determine tax residence or guarantee an account opening.", "公司設立須符合相關司法管轄區要求、客戶盡職審查及擬定活動的接納程序。公司註冊本身並不授予受規管業務牌照、決定稅務居民身份或保證成功開戶。", "公司设立须符合相关司法管辖区要求、客户尽职调查及拟定活动的接纳程序。公司注册本身并不授予受规管业务牌照、决定税务居民身份或保证成功开户。"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["Hong Kong commercial architecture", "香港商業建築", "香港商业建筑"],
    related: ["trustee-directors", "regulatory-compliance"],
  },
  {
    slug: "tax-compliance",
    title: ["Tax Compliance", "稅務合規", "税务合规"],
    description: ["Tax and accounting compliance support, with arrangements subject to the relevant jurisdiction and professional advice.", "提供稅務與會計合規支持，具體安排須按相關司法管轄區及專業意見而定。", "提供税务与会计合规支持，具体安排须按相关司法管辖区及专业意见而定。"],
    statement: ["Keep the obligations\nin view.", "清楚掌握，\n應有義務。", "清楚掌握，\n应有义务。"],
    overview: ["The administration of a corporate structure includes attention to its tax and accounting obligations. FIDERE’s corporate offering includes tax and accounting compliance support. The relevant work must be considered with the activities, records and jurisdictions of the entity in mind, alongside any specialist advice required for the client’s circumstances.", "企業架構的管理包括關注其稅務與會計義務。FIDERE 的企業服務涵蓋稅務與會計合規支持。相關工作須結合實體的活動、記錄及司法管轄區考慮，並配合客戶個別情況所需的專業意見。", "企业架构的管理包括关注其税务与会计义务。FIDERE 的企业服务涵盖税务与会计合规支持。相关工作须结合实体的活动、记录及司法管辖区考虑，并配合客户个别情况所需的专业意见。"],
    capabilities: [
      { title: ["Tax compliance support", "稅務合規支持", "税务合规支持"], body: ["Support the tax compliance work associated with the corporate arrangement, according to the relevant jurisdiction and the agreed scope.", "按照相關司法管轄區及約定範圍，支持企業安排所涉及的稅務合規工作。", "按照相关司法管辖区及约定范围，支持企业安排所涉及的税务合规工作。"] },
      { title: ["Accounting coordination", "會計協調", "会计协调"], body: ["Coordinate accounting compliance requirements as part of the wider administrative responsibilities of the company or holding structure.", "將會計合規要求納入公司或持有架構的整體行政責任中協調處理。", "将会计合规要求纳入公司或持有架构的整体行政责任中协调处理。"] },
      { title: ["Jurisdictional context", "司法管轄區考量", "司法管辖区考量"], body: ["Consider the relevant jurisdictions and the need for professional input when defining the compliance assistance to be provided.", "在界定合規協助範圍時，考慮相關司法管轄區及專業意見的需要。", "在界定合规协助范围时，考虑相关司法管辖区及专业意见的需要。"] },
    ],
    considerations: ["This service description is not tax advice. Tax treatment depends on the facts and applicable law, including requirements outside Hong Kong where relevant. No tax exemption, reduction or particular outcome is guaranteed. The scope of professional advice should be confirmed separately.", "本服務說明不構成稅務意見。稅務待遇取決於事實及適用法律，包括相關的香港以外要求。任何稅務豁免、減免或特定結果均不獲保證。專業意見的範圍應另行確認。", "本服务说明不构成税务意见。税务待遇取决于事实及适用法律，包括相关的香港以外要求。任何税务豁免、减免或特定结果均不获保证。专业意见的范围应另行确认。"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["Architectural lines in Hong Kong", "香港建築線條", "香港建筑线条"],
    related: ["company-formation", "regulatory-compliance"],
  },
  {
    slug: "regulatory-compliance",
    title: ["Regulatory Compliance", "監管合規", "监管合规"],
    description: ["Administrative support for the regulatory obligations associated with corporate structures.", "協助處理企業架構所涉及監管義務的行政工作。", "协助处理企业架构所涉及监管义务的行政工作。"],
    statement: ["The structure\nand its responsibilities.", "兼顧架構，\n與其責任。", "兼顾架构，\n与其责任。"],
    overview: ["Corporate administration must take account of the rules relevant to the entity and its activities. FIDERE provides regulatory compliance support as part of its corporate services. This work is considered alongside the entity’s ownership, purpose and operating jurisdictions. It is distinct from FIDERE’s own due diligence and acceptance requirements for each client relationship.", "企業管理須考慮適用於實體及其活動的規則。FIDERE 透過企業服務提供監管合規支持，並結合實體所有權、目的及營運司法管轄區考慮相關工作。這有別於 FIDERE 就每段客戶關係所作的自身盡職審查及接納要求。", "企业管理须考虑适用于实体及其活动的规则。FIDERE 通过企业服务提供监管合规支持，并结合实体所有权、目的及运营司法管辖区考虑相关工作。这有别于 FIDERE 就每段客户关系所作的自身尽职调查及接纳要求。"],
    capabilities: [
      { title: ["Corporate compliance administration", "企業合規管理", "企业合规管理"], body: ["Support administrative work connected with the entity’s regulatory obligations, within the agreed service scope and relevant jurisdiction.", "在約定服務範圍及相關司法管轄區內，支持實體監管義務相關的行政工作。", "在约定服务范围及相关司法管辖区内，支持实体监管义务相关的行政工作。"] },
      { title: ["Ownership and control records", "所有權與控制記錄", "所有权与控制记录"], body: ["Coordinate the corporate information relevant to due diligence, including ownership structures and director or shareholder records where required.", "協調盡職審查相關企業資料，包括按要求提供所有權架構、董事或股東記錄。", "协调尽职调查相关企业资料，包括按要求提供所有权架构、董事或股东记录。"] },
      { title: ["Changes to the arrangement", "安排變更", "安排变更"], body: ["Consider changes in ownership or business activities within ongoing administration and the corresponding need to refresh client information.", "在持續管理中考慮所有權或業務活動的變化，以及相應更新客戶資料的需要。", "在持续管理中考虑所有权或业务活动的变化，以及相应更新客户资料的需要。"] },
    ],
    considerations: ["Requirements depend on the entity, activity and jurisdiction. Administrative support does not amount to regulatory approval or authorisation to conduct a regulated activity. The need for legal or other specialist advice must be considered for the proposed arrangement.", "要求視乎實體、活動及司法管轄區而定。行政支持不等同監管批准，亦不授權進行受規管活動。擬定安排須考慮法律或其他專業意見的需要。", "要求视乎实体、活动及司法管辖区而定。行政支持不等同监管批准，亦不授权进行受规管活动。拟定安排须考虑法律或其他专业意见的需要。"],
    image: "/images/hong-kong-architecture.jpg",
    imageAlt: ["Hong Kong city architecture", "香港城市建築", "香港城市建筑"],
    related: ["company-formation", "tax-compliance"],
  },
  {
    slug: "transaction-support",
    title: ["Transaction Support", "交易支持", "交易支持"],
    description: ["Coordination of transaction procedures, documentation and administration across relevant parties.", "協調相關各方的交易程序、文件及行政安排。", "协调相关各方的交易程序、文件及行政安排。"],
    statement: ["Bring the parties\nand the process together.", "連結各方，\n協調程序。", "连接各方，\n协调程序。"],
    overview: ["A transaction may involve more than one entity, account or jurisdiction. FIDERE supports the coordination and administration around these arrangements, including relevant procedures and documentation. The starting point is the agreed transaction scope and the parties involved, with due diligence and the requirements of the relevant channels considered throughout.", "一項交易可能涉及多個實體、賬戶或司法管轄區。FIDERE 就相關安排的協調與管理提供支持，包括程序及文件。我們以約定交易範圍及參與各方為起點，在過程中考慮盡職審查及相關渠道的要求。", "一项交易可能涉及多个实体、账户或司法管辖区。FIDERE 就相关安排的协调与管理提供支持，包括程序及文件。我们以约定交易范围及参与各方为起点，在过程中考虑尽职调查及相关渠道的要求。"],
    capabilities: [
      { title: ["Process coordination", "程序協調", "程序协调"], body: ["Coordinate relevant transaction procedures across the parties and account arrangements within the accepted scope of the instruction.", "在已接納的指示範圍內，協調各方及賬戶安排所涉及的交易程序。", "在已接纳的指示范围内，协调各方及账户安排所涉及的交易程序。"] },
      { title: ["Documentation and due diligence", "文件與盡職審查", "文件与尽职调查"], body: ["Support the documentation and due diligence associated with the transaction, including further information where risk or activity requires it.", "支持交易相關文件與盡職審查工作，並按風險或活動要求補充資料。", "支持交易相关文件与尽职调查工作，并按风险或活动要求补充资料。"] },
      { title: ["Transaction administration", "交易管理", "交易管理"], body: ["Support the administrative arrangements around the transaction and coordinate with relevant parties as required by the agreed structure.", "支持交易周邊行政安排，並按約定架構所需與相關各方協調。", "支持交易周边行政安排，并按约定架构所需与相关各方协调。"] },
    ],
    considerations: ["Processing depends on the relevant channels, jurisdiction, compliance review and cut-off times. Settlement timing is not guaranteed, and some accepted instructions may be irreversible. Applicable fees and transaction-specific risks should be understood before an instruction is given.", "處理取決於相關渠道、司法管轄區、合規審查及截止時間。結算時間並不獲保證，部分已接納指示可能不可撤回。發出指示前，應了解適用費用及交易相關風險。", "处理取决于相关渠道、司法管辖区、合规审查及截止时间。结算时间并不获保证，部分已接纳指示可能不可撤回。发出指示前，应了解适用费用及交易相关风险。"],
    image: "/images/hero-hong-kong.jpg",
    imageAlt: ["Hong Kong and its harbour", "香港城市與海港", "香港城市与海港"],
    related: ["equity-asset-custody", "private-trust"],
  },
  {
    slug: "equity-asset-custody",
    title: ["Equity Custody Services", "股權託管服務", "股权托管服务"],
    description: ["Equity holding, custody administration and settlement support within agreed arrangements.", "按照約定安排，提供股權持有、託管管理及結算支持。", "按照约定安排，提供股权持有、托管管理及结算支持。"],
    statement: ["Consider the holding,\nas well as the asset.", "關注資產，\n亦關注持有方式。", "关注资产，\n亦关注持有方式。"],
    overview: ["Equity interests sit within a wider set of holding, administration and transaction arrangements. FIDERE’s disclosed services include equity custody, management and settlement support. We consider the relevant structure and account arrangements together, coordinating the administrative responsibilities associated with the holding and any related transaction within the agreed scope.", "股權涉及一整套持有、管理與交易安排。FIDERE 已披露的服務包括股權託管、管理及結算支持。我們一併考慮相關架構與賬戶安排，在約定範圍內協調持有及相關交易的行政責任。", "股权涉及一整套持有、管理与交易安排。FIDERE 已披露的服务包括股权托管、管理及结算支持。我们一并考虑相关架构与账户安排，在约定范围内协调持有及相关交易的行政责任。"],
    capabilities: [
      { title: ["Equity holding arrangements", "股權持有安排", "股权持有安排"], body: ["Support the holding arrangement for equity interests within the agreed trust or corporate structure and relevant account framework.", "在約定信託或企業架構及相關賬戶框架內，支持股權持有安排。", "在约定信托或企业架构及相关账户框架内，支持股权持有安排。"] },
      { title: ["Custody administration", "託管管理", "托管管理"], body: ["Coordinate custody-related administration with the relevant institutions or counterparties, according to the terms of the holding arrangement.", "按照持有安排的條款，與相關機構或交易對手協調託管行政工作。", "按照持有安排的条款，与相关机构或交易对手协调托管行政工作。"] },
      { title: ["Settlement support", "結算支持", "结算支持"], body: ["Support the administration of related settlement arrangements, with transaction procedures and relevant compliance requirements taken into account.", "考慮交易程序及相關合規要求，支持相關結算安排的行政工作。", "考虑交易程序及相关合规要求，支持相关结算安排的行政工作。"] },
    ],
    considerations: ["Availability depends on the asset, jurisdiction, account arrangements and client eligibility. Certain services are restricted to Professional Investors under Hong Kong’s Securities and Futures Ordinance (Cap. 571). Custody arrangements do not guarantee investment returns or eliminate counterparty and settlement risks.", "服務可用性取決於資產、司法管轄區、賬戶安排及客戶資格。部分服務僅向香港《證券及期貨條例》（第571章）所界定的專業投資者提供。託管安排不保證投資回報，亦不消除交易對手及結算風險。", "服务可用性取决于资产、司法管辖区、账户安排及客户资格。部分服务仅向香港《证券及期货条例》（第571章）所界定的专业投资者提供。托管安排不保证投资回报，亦不消除交易对手及结算风险。"],
    image: "/images/hero-hong-kong.jpg",
    imageAlt: ["Hong Kong harbour and skyline", "香港海港與天際線", "香港海港与天际线"],
    related: ["transaction-support", "private-trust"],
  },
];
