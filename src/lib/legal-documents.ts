// Published FIDERE policy text retrieved from the source URLs on 9 September 2026.
// This is an archival transcription, not newly drafted legal terms or a translation.
// Only page navigation, presentation markup and the shared footer were removed.
// Text, numbering, source document titles, dates and paragraph boundaries are preserved.
// sourceTextSha256 hashes title + each block text joined with two newlines, UTF-8.
export type LegalBlock = { tag: "h2" | "h3" | "p" | "li"; text: string };
export type LegalDocument = {
  slug: string;
  sourceUrl: string;
  retrievedAt: string;
  sourceTextSha256: string;
  title: string;
  blocks: LegalBlock[];
};

export const legalDocuments: LegalDocument[] = [
  {
    "slug": "privacy",
    "sourceUrl": "https://www.fideretrust.com/en/privacy",
    "retrievedAt": "2026-09-09",
    "sourceTextSha256": "45cc9fc157d5d5cafc2f23884eb9c2ed58b3dbb5b41742e87621ea0dd6934083",
    "title": "Privacy Policy",
    "blocks": [
      {
        "tag": "p",
        "text": "Last Updated: November 1, 2024"
      },
      {
        "tag": "p",
        "text": "This Privacy Policy Statement (the 'Privacy Policy') is formulated by FIDERE and its affiliated companies (collectively 'we') in accordance with the Personal Data (Privacy) Ordinance (Cap. 486) of the Laws of Hong Kong (the 'Privacy Ordinance'), to inform you of our policies and practices regarding the collection, use, retention, disclosure, transfer, protection and access of personal data."
      },
      {
        "tag": "h2",
        "text": "1. Our Commitment to Privacy"
      },
      {
        "tag": "p",
        "text": "We are committed to complying with the requirements of the Privacy Ordinance regarding the management of personal data to protect the privacy, confidentiality and security of the personal data we hold. We are equally committed to ensuring that all our staff and agents fulfill these obligations. If we ask you to provide certain information to identify you when using our services, you can rest assured that we will only use it in accordance with this Privacy Policy.\n\nOur commitment to comply with the Privacy Ordinance is based on the following principles:\n\n• We only collect personal data that we believe is relevant and necessary for providing our services and products\n• Personal data will only be used for specified purposes and will not be used for other purposes without your consent\n• We will not disclose personal data to any third party unless we (i) obtain your consent or (ii) are required by law, and we will only disclose under appropriate authorization\n• We will take all practicable steps to ensure your personal data is secure, confidential and accurate. This data will not be retained longer than necessary\n• Only authorized persons may access or process your personal data\n• You have the right to access or correct your personal data"
      },
      {
        "tag": "h2",
        "text": "2. Collection of Personal Data"
      },
      {
        "tag": "p",
        "text": "We will collect your personal data through various means, including but not limited to when you use our website and applications, contact us and apply for our services. Where appropriate, you may be asked to provide your name, address, phone number and email address. Providing us with your personal data is optional, but without your personal data, we may not be able to process your request or provide the services you request.\n\nWhen you browse our website and applications, certain data may be automatically collected. For example, your web browser will automatically send data to each website you visit, including our website, which is a standard feature. This data includes your Internet Protocol (IP) address, domain name, browser type and configuration, language settings, geographic location, operating system, time/duration and previously visited websites (visitor data). We may also collect data about your usage and activities on the website and applications. We use this data, which does not identify individual users, to analyze trends, administer the website and applications, track user activities around the website and applications, and collect demographic information about our entire user base."
      },
      {
        "tag": "h2",
        "text": "3. Use of Personal Data"
      },
      {
        "tag": "p",
        "text": "We use your personal data to provide you with our services, operate and improve the website and applications, send you information, and for other purposes described in this Privacy Policy or disclosed to you on the website or in connection with our services.\n\nYou agree and understand that any and all data provided to and collected by us may be used for the following purposes:\n\n• To provide and improve our services\n• To personalize and improve your experience on the website and applications\n• To process your applications or requests\n• To register an account with us to create applications\n• To apply to become a partner\n• To respond to and follow up on your inquiries and provide customer service\n• To provide service information and other services and content you request, and to send account and service-related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative information\n• To conduct statistical analysis, research, surveys, quality assurance and reviews\n• To notify you of changes that may affect your services\n• To send you information about new promotions, products and services offered by FIDERE and our selected partners\n• To conduct comprehensive analysis of promotional performance\n• To maintain internal records\n• To fulfill regulatory and/or compliance obligations\n• For other purposes directly related to any of the above"
      },
      {
        "tag": "h2",
        "text": "4. Transfer of Personal Data"
      },
      {
        "tag": "p",
        "text": "When you register to use our services, we may share the personal data you provide with the following third parties only when necessary for the third party to provide the service:\n\n• Credit card processing companies and payment providers to charge you for services\n• Email service providers to send emails on our behalf\n• Employment resource companies to process your job applications\n• Business partners, joint venture partners, service providers, suppliers, agents, consultants and independent contractors who provide administrative or other services to us in the normal course and scope of our business\n• To comply with any applicable laws, regulations, government orders or court orders, or respond to any lawful requests and legal proceedings\n• To protect the rights and property of FIDERE, our agents, members and others, including enforcing our agreements, policies and terms of use\n• Based on our good faith belief that disclosure is necessary to respond to emergencies or protect the personal safety of any person\n• In connection with any merger, sale of company assets, financing or acquisition of all or part of our business\n\nWe also reserve the right to disclose your personal data to our related companies, including FIDERE Group affiliates and associated companies in Hong Kong and outside Hong Kong.\n\nIn any such case, if your data is transferred and subject to a different privacy policy, we will provide notice."
      },
      {
        "tag": "h2",
        "text": "5. Direct Marketing"
      },
      {
        "tag": "p",
        "text": "We may from time to time use data collected or held by us, including your name, address, phone number and email address, for direct marketing purposes. We will not transfer or disclose your personal data to any third party for direct marketing purposes unless we obtain your consent or indication of no objection. However, we may transfer and disclose your name, address, phone number and email address to companies in our group in Hong Kong or overseas for direct marketing of products related to payment services. To conduct the above direct marketing, we may engage third-party data processors or service providers to complete tasks.\n\nWhen you give us consent or indicate no objection for the above purposes, it means you have agreed to our use of your personal data for the above purposes. You have the right to withdraw consent for such use. You can also contact us at info@fideretrust.com to change your preferences for using your data in direct marketing at any time."
      },
      {
        "tag": "h2",
        "text": "6. Security"
      },
      {
        "tag": "p",
        "text": "The security of your personal data is very important to us. We take reasonable security measures to protect your personal data from loss, misuse, unauthorized access, disclosure, modification and destruction. When you enter sensitive data (such as credit card numbers) on our online registration or order forms, we will encrypt that data using Secure Socket Layer (SSL) technology.\n\nIf you use a password on our website or applications, you are responsible for keeping it confidential and should not share it with others. If you believe your password has been misused, please notify us immediately.\n\nWe have also established appropriate procedures to maintain and protect data we collect offline.\n\nHowever, please note that despite our efforts, no security measures are impenetrable."
      },
      {
        "tag": "h2",
        "text": "7. Cookies"
      },
      {
        "tag": "p",
        "text": "We may automatically collect certain data through the use of 'cookies'. Cookies are small data files that can track and collect your browsing data from your web browser. Among other things, the use of cookies helps us improve the website, applications and your experience. We use cookies to see the most popular areas and features, count the number of computers visiting our website and applications, personalize your experience and remember your preferences. Cookies will also use this data during your future visits to the website and applications so that the server can immediately recognize that you have previously visited the website and applications. We will also link data stored in cookies to any personally identifiable data you submit on the website and applications. Cookies never allow us to access your computer or any data about you other than the data you choose to share with us.\n\nYou can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually change your browser settings to decline cookies if you prefer. However, if your browser is set to not accept cookies or you decline cookies, you may not be able to access certain features or services of the website or applications. Our Privacy Policy does not cover the use of cookies by our service providers, and we cannot access or control these cookies."
      },
      {
        "tag": "h2",
        "text": "8. Hyperlinks"
      },
      {
        "tag": "p",
        "text": "The website and applications may contain links to other websites. If you provide any data while browsing those websites, we cannot be responsible for the protection and privacy of that data, and those websites are not governed by this Privacy Policy. We encourage you to carefully read the privacy policies applicable to those websites."
      },
      {
        "tag": "h2",
        "text": "9. Retention of Personal Data"
      },
      {
        "tag": "p",
        "text": "We will retain all personal data in accordance with the guidelines set out in the Privacy Ordinance. We will only retain and use your personal data for as long as your account is active or as needed to provide you with services, and for as long as necessary to achieve the purposes for which such data is used (including any directly related purposes), fulfill our legal obligations, resolve disputes and enforce our agreements."
      },
      {
        "tag": "h2",
        "text": "10. Monitoring Your Personal Data"
      },
      {
        "tag": "p",
        "text": "You have the following rights regarding your personal data:\n\n• To know and access personal data held by us\n• To supplement, change or delete your personal data\n• To restrict or object to the processing of personal data\n• Data portability, i.e., to receive your personal data in a structured, commonly used and machine-readable format and transmit that personal data directly to another data user\n• To lodge a complaint with the relevant data protection authority\n\nYou may choose to restrict the collection or use of your personal data in the following ways:\n\n• Whenever you are asked to fill out a form on the website or applications, look for a box you can click to indicate that you do not want the data to be used for direct marketing purposes\n• If you have previously agreed to our use of your personal data for direct marketing purposes, you can change your mind at any time and notify us by sending an email to info@fideretrust.com\n\nIf you wish to exercise any of the above rights, please contact our Data Protection Officer by sending an email to info@fideretrust.com. To protect your privacy and identity, we will take reasonable steps to verify your identity before allowing you to access or correct your personal data. Please note that we have the right to charge a reasonable fee for processing any data access request in accordance with the Privacy Ordinance."
      },
      {
        "tag": "h2",
        "text": "11. Amendments to Privacy Policy"
      },
      {
        "tag": "p",
        "text": "We will revise the terms of this Privacy Policy from time to time, and we encourage you to review this Privacy Policy from time to time to ensure you are aware of the latest version."
      },
      {
        "tag": "h2",
        "text": "12. English Version Prevails"
      },
      {
        "tag": "p",
        "text": "In case of any conflict or ambiguity between the Chinese and English versions of this Privacy Policy, the English version shall prevail."
      },
      {
        "tag": "h2",
        "text": "13. Inquiries"
      },
      {
        "tag": "p",
        "text": "If you have any questions about this Privacy Policy, please contact us by sending an email to info@fideretrust.com."
      }
    ]
  },
  {
    "slug": "disclaimer",
    "sourceUrl": "https://www.fideretrust.com/en/disclaimer",
    "retrievedAt": "2026-09-09",
    "sourceTextSha256": "48f0b78016ee964bac84501904cb4b4ea1c4c10ad76379df0f029d1a178fae6c",
    "title": "Terms of Use",
    "blocks": [
      {
        "tag": "p",
        "text": "Last Updated: November 1, 2024"
      },
      {
        "tag": "p",
        "text": "Welcome to the FIDERE Trust website. The terms \"we\", \"us\" and \"our\" in these Terms of Use refer to FIDERE Trust Limited and its parent companies, subsidiaries, affiliates and associated companies. The term \"you\" in these Terms of Use refers to any user of this website.\n\nPlease read these Terms of Use carefully before using this website. If you do not agree to these Terms of Use, do not use this website.\n\nBy accessing, using or merely browsing the website, you agree to be legally bound by these Terms and all terms, policies and guidelines incorporated herein by reference. If you do not agree to all of these Terms, you may not use the website.\n\nIn these Terms, users of this website are collectively referred to as \"Users\".\n\nFIDERE Trust reserves the right to change or modify any of the terms and conditions in these Terms, or any policies or guidelines of the website, at any time in its sole discretion.\n\nUnless otherwise specified, any changes or modifications will take effect immediately upon posting on the website, and your continued use of the website after such time will constitute acceptance of such changes or modifications. You should review the Terms and any policies and documents incorporated therein from time to time to understand the terms and conditions applicable to your use of the website. The Terms will always display a \"Last Updated\" date at the top. If you do not agree to any revised Terms, you must stop using this website. If you have any questions about the Terms, please email us at: info@fideretrust.com."
      },
      {
        "tag": "h2",
        "text": "1. Privacy Policy"
      },
      {
        "tag": "p",
        "text": "Please refer to FIDERE Trust's Privacy Policy to understand how FIDERE Trust collects, uses and discloses personal data that can identify users. By using the website, you agree that we may use, collect and disclose personally identifiable information in accordance with our Privacy Policy."
      },
      {
        "tag": "h2",
        "text": "2. Registration Data; Account Security"
      },
      {
        "tag": "p",
        "text": "By registering an account on the website, you agree to (a) enter accurate, current and complete information as indicated on the website's registration form (\"Registration Data\"); (b) keep your password secure; (c) maintain and promptly update the Registration Data and any other information you provide to FIDERE Trust and keep the Registration Data accurate, current and complete; and (d) assume all risks associated with unauthorized access to the Registration Data and any other information you provide to FIDERE Trust. You are responsible for all activities that occur in your FIDERE Trust account and all charges incurred by your FIDERE Trust account."
      },
      {
        "tag": "h2",
        "text": "3. Intellectual Property"
      },
      {
        "tag": "p",
        "text": "All information, data, text, music, sounds, photographs, images, software, videos, information or other materials (collectively \"Content\") displayed or made available on this website are owned by us or licensed to us and are protected by copyright, trademarks, service marks, patents or other proprietary rights and laws. We and/or our licensors own copyrights in the selection, coordination, arrangement and enhancement of such Content as well as in the original Content. Although you may download or print such Content for the uses specified in these Terms or for personal non-commercial use, you do not own any rights in such Content. Unless otherwise specified in these Terms, you may not modify, alter, publish, transmit, redistribute, participate in the transfer or sale of, create derivative works from, or in any way exploit any Content in whole or in part without our prior written permission."
      },
      {
        "tag": "h2",
        "text": "4. Limited License to Content"
      },
      {
        "tag": "p",
        "text": "FIDERE Trust grants you a limited, revocable and non-exclusive license to access the website and view, copy and print portions of the Content made available to you. This license is subject to these Terms and is specifically subject to the following conditions: (i) you may only view, copy and print such portions of the Content for your own use; (ii) you may not modify or otherwise make derivative works of the website or Content, or copy, distribute or display the website or any Content (other than page caching) except as expressly permitted in these Terms; (iii) you may not remove or modify any copyright, trademark or other proprietary notices placed on the Content; (iv) you may not use any data mining, robots or similar data gathering or extraction methods; and (v) you may not use the website or Content for purposes other than their intended purpose. Except as expressly permitted above, use of any part of the Content without the prior written permission of the Content owner is strictly prohibited and will terminate the license granted in this section, this Agreement and any account you have opened with us. Any such unauthorized use may also violate applicable laws, including but not limited to copyright and trademark laws. Nothing in these Terms and Conditions may be construed as granting any license to any intellectual property rights (whether by estoppel, implication or otherwise) except as expressly provided in these Terms. FIDERE Trust may revoke the license in this section at any time."
      },
      {
        "tag": "h2",
        "text": "5. Providing Reliable and Secure Services"
      },
      {
        "tag": "p",
        "text": "We take security seriously. We strive to maintain a reliable and secure environment for your information. However, no system is completely secure or reliable, and the Internet itself is an insecure medium with no guarantee of the reliability of hosting services, Internet intermediaries, your Internet service provider and other service providers. In using this website, you accept these risks and are responsible for choosing to use technology that does not provide perfect security or reliability."
      },
      {
        "tag": "h2",
        "text": "6. Links to Other Websites"
      },
      {
        "tag": "p",
        "text": "This website contains links to third-party websites (\"Third-Party Websites\") and third-party content (\"Third-Party Content\") as a service to those interested in such information. Third-Party Websites include social networking platforms, subscriber and sponsor websites, payment processors and other payment intermediaries that you may use when using this website. You use links to Third-Party Websites and any Third-Party Content or services provided therein at your own risk. FIDERE Trust does not monitor or control Third-Party Content or Third-Party Websites and makes no representations or warranties about Third-Party Content or Third-Party Websites. FIDERE Trust provides such links solely for convenience, and a link to a Third-Party Website or Third-Party Content does not imply FIDERE Trust's endorsement, adoption or sponsorship of, or affiliation with, such Third-Party Website or Third-Party Content. FIDERE Trust is not responsible for reviewing changes or updates to Third-Party Content, Third-Party Websites or websites linked to this website, nor is it responsible for their quality, content, policies, nature or reliability. When you leave this website, our terms and policies will no longer apply. You should review the applicable terms and policies, including any Third-Party Website's privacy and data collection practices, and should make such inquiries as you deem necessary or appropriate before entering into any transactions with any third party."
      },
      {
        "tag": "h2",
        "text": "7. Disclaimer"
      },
      {
        "tag": "p",
        "text": "THIS WEBSITE, THE CONTENT AND SERVICES PROVIDED ON THIS WEBSITE ARE PROVIDED TO YOU ON AN \"AS IS\" BASIS AND FIDERE TRUST MAKES NO WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. FIDERE TRUST EXPRESSLY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. FIDERE TRUST MAKES NO REPRESENTATIONS OR WARRANTIES THAT THE CONTENT IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE AND EXPRESSLY DISCLAIMS ANY WARRANTY OR REPRESENTATION AS TO THE ACCURACY OR PROPRIETARY CHARACTER OF THIS WEBSITE, THE CONTENT OR ANY PART THEREOF. ALTHOUGH FIDERE TRUST ENDEAVORS TO ENSURE YOUR ACCESS TO AND USE OF THIS WEBSITE IS SECURE, FIDERE TRUST MAKES NO REPRESENTATION OR WARRANTY THAT THIS WEBSITE OR ANY CONTENT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS."
      },
      {
        "tag": "h2",
        "text": "8. Limitation of Liability; Indemnification"
      },
      {
        "tag": "p",
        "text": "You waive and will not assert against FIDERE Trust, its affiliates or subsidiaries, its sponsors, contractors, advertisers, vendors or other partners, any of their successors or assigns, or any of their respective officers, directors, agents or employees (collectively, the \"Released Parties\") any claims or allegations of any nature arising out of or in any way related to your use of the website or Content, including but not limited to any claims or allegations relating to alleged infringement of proprietary rights, alleged inaccuracy of Content, or any allegation that any Released Party has or should have indemnified, defended or held you or any third party harmless for any claims or allegations arising from your use or other exploitation of this website. Your use of this website is at your own risk. Without limiting the foregoing, neither FIDERE Trust nor any other Released Party shall be liable for any direct, special, indirect or consequential damages or any other type of damages arising out of or in any way connected with the use of this website or Content, including but not limited to loss of use, loss of profits or loss of data, whether in contract, tort (including but not limited to negligence) or other legal action. You irrevocably waive all rights to seek injunctive or other equitable relief, or to enjoin or restrain the operation of this website, the exploitation of any advertising or other materials related thereto, or the exploitation of any content or other materials used or displayed on or through this website, and agree that your claims shall be limited to monetary damages within the scope determined by this Agreement."
      },
      {
        "tag": "h2",
        "text": "9. Communications"
      },
      {
        "tag": "p",
        "text": "When notices are posted on this website, we will post them in the appropriate areas of this website. You are responsible for regularly checking this website for notices."
      },
      {
        "tag": "h2",
        "text": "10. Other Terms"
      },
      {
        "tag": "p",
        "text": "If any provision of these Terms is deemed illegal, invalid or unenforceable for any reason, such provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. FIDERE Trust may assign any or all of its rights under this Agreement to any party without your consent. You may not assign any of your rights or obligations under this Agreement without the prior written consent of FIDERE Trust, and any attempted assignment shall be void and unenforceable. These Terms constitute the entire agreement between you and FIDERE Trust regarding your use of the website and supersede all prior or contemporaneous electronic, oral or written communications between you and FIDERE Trust regarding your use of the website."
      },
      {
        "tag": "h2",
        "text": "11. Questions and Comments"
      },
      {
        "tag": "p",
        "text": "If you have any questions about these Terms or your use of this website, please contact us at info@fideretrust.com."
      }
    ]
  },
  {
    "slug": "terms",
    "sourceUrl": "https://www.fideretrust.com/en/terms",
    "retrievedAt": "2026-09-09",
    "sourceTextSha256": "614671f31aa6c01f4793f05d6e808cac0ccb3893917e6e04a0a61ee71e8a9f5d",
    "title": "Terms & Conditions",
    "blocks": [
      {
        "tag": "p",
        "text": "FIDERE TRUST Terms of Use"
      },
      {
        "tag": "h2",
        "text": "1. INTRODUCTION"
      },
      {
        "tag": "p",
        "text": "(1.1) These Terms of Use (\"Terms\") govern your access to and use of this website (\"Website\") which is owned, administered and maintained by FIDERE TRUST."
      },
      {
        "tag": "p",
        "text": "(1.2) The terms \"we\", \"us\" and \"our\" also refer to FIDERE TRUST. The term \"you\" refers to the person visiting the Website."
      },
      {
        "tag": "p",
        "text": "(1.3) Please read these Terms carefully. They contain important information regarding your legal rights, including limitations on FIDERE TRUST's and certain third parties' liability, disclaimers of warranties and a submission to jurisdiction."
      },
      {
        "tag": "p",
        "text": "(1.4) Each time you access the Website by any means, you irrevocably agree to comply with the version of the Terms posted on the Website at the time you access the Website. You may not use the Website if you do not agree to these Terms."
      },
      {
        "tag": "p",
        "text": "(1.5) We may revise these Terms from time to time, without prior notice. You are bound by any changes to these Terms upon our posting of such changes on the Website. You should check these Terms every time you access or use the Website to make certain that you are aware of the most updated Terms."
      },
      {
        "tag": "h2",
        "text": "2. ADVERTISING RIGHTS"
      },
      {
        "tag": "p",
        "text": "(2.1) We reserve the right to sell and display any advertising, attribution, links, promotional and distribution rights."
      },
      {
        "tag": "p",
        "text": "(2.2) We will be entitled to retain all revenue generated from any sales of such advertising, attribution, links, or promotional or distribution rights."
      },
      {
        "tag": "p",
        "text": "(2.3) Nothing in these Terms obligates or may be deemed to obligate us to sell or offer to sell any advertising, promotion, or distribution rights."
      },
      {
        "tag": "h2",
        "text": "3. DISCLAIMERS AND LIMITATIONS OF LIABILITY"
      },
      {
        "tag": "p",
        "text": "(3.1) The content on the Website is strictly for informational purposes only."
      },
      {
        "tag": "p",
        "text": "(3.2) Nothing on or in the Website shall constitute or be construed as an offering of any currency, security or any financial instrument or as investment advice or investment recommendations (such as recommendations as to whether to purchase a currency, security or instrument) by FIDERE TRUST or a recommendation as to an investment strategy by FIDERE TRUST."
      },
      {
        "tag": "p",
        "text": "(3.3) Content on the Website should not be considered as information sufficient upon which to base an investment strategy."
      },
      {
        "tag": "p",
        "text": "(3.4) No content on the Website is tailored to the specific needs of any individual, entity or group of individuals."
      },
      {
        "tag": "p",
        "text": "(3.5) FIDERE TRUST expresses no opinion as to the future or expected value of any currency, security or other interest."
      },
      {
        "tag": "p",
        "text": "(3.6) FIDERE TRUST does not explicitly or implicitly recommend or suggest any investment strategy of any kind."
      },
      {
        "tag": "p",
        "text": "(3.7) Content on the Website may not be used as a basis for any financial product or other product without the express prior written consent of FIDERE TRUST."
      },
      {
        "tag": "p",
        "text": "(3.8) FIDERE TRUST does not review the content on the Website for accuracy, completeness or reliability."
      },
      {
        "tag": "p",
        "text": "(3.9) FIDERE TRUST does not warrant or guarantee the accuracy, completeness, reliability, timeliness, security, availability or integrity of any content published on the Website."
      },
      {
        "tag": "p",
        "text": "(3.10) FIDERE TRUST disclaims all liabilities for any errors or other inaccuracies relating to the content on the Website."
      },
      {
        "tag": "p",
        "text": "(3.11) FIDERE TRUST makes no representations about any content of the Website, or that the content of the Website will be uninterrupted or operated in combination with any software, service, system or other data or information. The content on the Website are provided on an \"as is\" basis without warranty of any kind."
      },
      {
        "tag": "p",
        "text": "(3.12) FIDERE TRUST disclaims all warranties and conditions that the Website is free of viruses or other harmful components."
      },
      {
        "tag": "p",
        "text": "(3.13) FIDERE TRUST hereby disclaims all warranties and conditions with regard to the content on the Website, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title, and non-infringement."
      },
      {
        "tag": "p",
        "text": "(3.14) To the maximum extent permitted by applicable law, FIDERE TRUST assumes no liability or responsibility for any (i) errors, mistakes, or inaccuracies of any content on the Website; (ii) property damage, of any nature whatsoever, resulting from your access to or use of the Website; (iii) any unauthorised access to or use of the Website; (iv) any interruption or cessation of transmission to or from your access to the Website; (v) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the use or access of the Website by any third party; (vi) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, transmitted, or otherwise made available on the Website; and/or (vii) the defamatory, offensive, or illegal conduct of any third party."
      },
      {
        "tag": "p",
        "text": "(3.15) In no event shall FIDERE TRUST (and its respective officers, directors, employees, members, agents, and affiliates) be liable for any indirect, punitive, incidental, special, or consequential damages or damages for lost profits, arising out of, or in any way connected with, your access to or use of the Website or with the delay or inability to access, display, or use the Website; any computer viruses, information, software, linked services, products, and services obtained through the use or access of the Website; or otherwise arising out of the access to or use of the Website whether based on a theory of negligence, contract, tort, strict liability, or otherwise, and even if FIDERE TRUST has been advised of the possibility of such damages."
      },
      {
        "tag": "h2",
        "text": "4. INDEMNIFICATION"
      },
      {
        "tag": "p",
        "text": "(4.1) Except to the extent prohibited under applicable law, you shall indemnify, defend and hold harmless FIDERE TRUST and its members, managers, directors, officers, employees, partners, consultants, contractors, service providers, agents, affiliates, successors and assigns from and against any and all suits, actions, proceedings and claims by third parties (whether threatened or actual), and all losses, liabilities, damages, judgments, costs and expenses (including reasonable legal fees) arising out of, relating to or in connection with: (i) your use (or misuse) of and access to the Website; (ii) your violation of any of these Terms; (iii) your violation of any applicable law, rule or regulation arising out of your access or use of the Website; (iv) any claim that any information provided by you to FIDERE TRUST in connection with the Website caused damage to, infringed upon, misappropriated or otherwise violated the rights of any third party, including infringement, misappropriation or other violation of third-party intellectual property rights, or violation of any right of privacy or publicity; and/or (v) any dispute that you have with any third party relating to or in connection with the Website."
      },
      {
        "tag": "p",
        "text": "(4.2) FIDERE TRUST reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with FIDERE TRUST in asserting any available defenses and in the conduct of such defense."
      },
      {
        "tag": "h2",
        "text": "5. THIRD PARTY WEBSITES"
      },
      {
        "tag": "p",
        "text": "(5.1) The Website may contain links to third-party websites. Your use of all links to third-party websites is at your own risk. We do not monitor or have any control over, and make no claim or representation regarding third-party websites."
      },
      {
        "tag": "p",
        "text": "(5.2) To the extent such links are provided by us, they are provided only as a convenience, and a link to a third-party websites does not imply our endorsement, adoption or sponsorship of, or affiliation with, such third-party websites."
      },
      {
        "tag": "p",
        "text": "(5.3) When you leave the Website, whether via a link contained on the Website or through the use of your web browser, mobile device or other navigational tool, the information you view is not provided by us."
      },
      {
        "tag": "p",
        "text": "(5.4) These Terms do not govern your use of third-party websites. We are not responsible for, have no control over and do not monitor or review the content of any other website."
      },
      {
        "tag": "p",
        "text": "(5.5) A link to a third-party website does not imply sponsorship, approval, affiliation or endorsement by FIDERE TRUST of the linked third-party website or of that third party's products or services."
      },
      {
        "tag": "p",
        "text": "(5.6) You agree that FIDERE TRUST will not, under any circumstances, be responsible or liable, directly or indirectly, for any goods, services, information, resources and/or content available on or through any third-party website or services, for any dealings or communications you may have with third parties, or for any harm, damages or loss caused or alleged to be caused by or in connection with any of the foregoing or your use of or reliance on the materials or the content or business practices of any third party."
      },
      {
        "tag": "h2",
        "text": "6. MODIFICATION OF THE WEBSITE"
      },
      {
        "tag": "p",
        "text": "(6.1) At any time and in FIDERE TRUST's sole and absolute discretion, FIDERE TRUST may (in whole or in part) modify, suspend or discontinue the Website without prior notice, for any reason whatsoever."
      },
      {
        "tag": "p",
        "text": "(6.2) We shall have no liability to you or to any third party for any such modification, suspension or discontinuance of the Website."
      },
      {
        "tag": "h2",
        "text": "7. ENFORCEMENT"
      },
      {
        "tag": "p",
        "text": "(7.1) The remedies available to FIDERE TRUST in these Terms are cumulative and in addition to any others available to FIDERE TRUST."
      },
      {
        "tag": "p",
        "text": "(7.2) FIDERE TRUST may seek all remedies available to it at law and in equity for any violation of these Terms."
      },
      {
        "tag": "p",
        "text": "(7.3) FIDERE TRUST may suspend, terminate or block your access to the Website (in whole or in part) for any violation or suspected violation as we determine, without notice to you."
      },
      {
        "tag": "p",
        "text": "(7.4) Your violation of these Terms shall be considered a breach of contract."
      },
      {
        "tag": "p",
        "text": "(7.5) We reserve the right, but do not assume any obligation, to investigate any suspected violation of these Terms or any misuse of the Website."
      },
      {
        "tag": "p",
        "text": "(7.6) In addition, we further reserve the right to report any activity, data or persons to, and otherwise cooperate with: (i) law enforcement authorities; (ii) financial regulators; (iii) system administrators at Internet service providers, networks or computing facilities; and (iv) providers and/or third-party vendors if we suspect that you have violated these Terms or any law, rule or regulation."
      },
      {
        "tag": "p",
        "text": "(7.7) You acknowledge that such reporting or cooperation may include, without limitation, providing information relating to you and/or your use of the Website, including without limitation your email address, IP address or other identifying information, to law enforcement authorities, financial regulators, third-party providers, vendors or system administrators."
      },
      {
        "tag": "p",
        "text": "(7.8) Further, we may disclose any information we think necessary to comply with applicable law, regulation, subpoena or other legal process or governmental or regulatory request."
      },
      {
        "tag": "h2",
        "text": "8. GOVERNING LAW; SUBMISSION TO JURISDICTION"
      },
      {
        "tag": "p",
        "text": "(8.1) These Terms and any and all claims, disputes or other legal proceedings by or between you and us, including but not limited to any claims or disputes that are in any way related to or arising out of these Terms or your use of or access to the Website, shall be governed by and construed in accordance with the law of Hong Kong, without regard to any principles of conflicts of law."
      },
      {
        "tag": "p",
        "text": "(8.2) You agree that all disputes, controversies or claims between the Parties arising out of or in connection with this Agreement (including its existence, validity or termination) shall be finally resolved by the courts in Hong Kong."
      },
      {
        "tag": "h2",
        "text": "9. GENERAL"
      },
      {
        "tag": "p",
        "text": "(9.1) These Terms constitute the entire agreement between you and FIDERE TRUST relating to your use of the Website and supersede all prior or contemporaneous communications, whether electronic, oral or written, between you and FIDERE TRUST with respect to the Website."
      },
      {
        "tag": "p",
        "text": "(9.2) You agree that no joint venture, agency, partnership, or employment relationship exists between you and FIDERE TRUST and/or its affiliates as a result of these Terms or use of the Website."
      },
      {
        "tag": "p",
        "text": "(9.3) In no event shall FIDERE TRUST be responsible or liable for any failure or delay in the performance of its obligations hereunder arising out of or caused by, directly or indirectly, forces beyond its control."
      },
      {
        "tag": "p",
        "text": "(9.4) Our performance under these Terms is subject to existing laws and regulations, and nothing contained in these Terms limits our right to comply with law enforcement or other governmental or legal requests or requirements relating to your use of the Website or information provided to, or gathered by, us with respect to such use."
      },
      {
        "tag": "p",
        "text": "(9.5) If any provision of these Terms, including, but not limited to, the warranty disclaimers and limitations of liability set forth above, is determined to be invalid or unenforceable under applicable law, the invalid or unenforceable provisions in these Terms shall be deemed superseded by valid and enforceable provisions that, to the extent possible, fulfil the business purposes and intent of such invalid and unenforceable provisions."
      },
      {
        "tag": "p",
        "text": "(9.6) Unless expressly provided to the contrary in these Terms, a person who is not a party to these Terms has no rights at law and in equity to enforce or enjoy the benefit of any term in these Terms."
      },
      {
        "tag": "p",
        "text": "(9.7) All rights not granted herein are expressly reserved to FIDERE TRUST."
      }
    ]
  },
  {
    "slug": "regulatory-status",
    "sourceUrl": "https://www.fideretrust.com/en/regulatory-status",
    "retrievedAt": "2026-09-09",
    "sourceTextSha256": "d0db743dfd1cc95c649bc3f6d125cbc5d27f54313ad2b9e80ec3809b873bbd8e",
    "title": "Regulatory Status",
    "blocks": [
      {
        "tag": "p",
        "text": "TCSP licensing and Trust Company registration under the Trustee Ordinance (Chapter 29)"
      },
      {
        "tag": "p",
        "text": "Effective Date: 11 May 2026"
      },
      {
        "tag": "p",
        "text": "Version: 1.1"
      },
      {
        "tag": "p",
        "text": "Policy Owner: Compliance Department"
      },
      {
        "tag": "p",
        "text": "Contact: info@fideretrust.com"
      },
      {
        "tag": "p",
        "text": "Review Cycle: At least annually or when required by law/regulation"
      },
      {
        "tag": "h2",
        "text": "1. Legal Entity Information"
      },
      {
        "tag": "p",
        "text": "Operating Entity: FIDERE TRUST LIMITED."
      },
      {
        "tag": "p",
        "text": "Registered Jurisdiction: Hong Kong SAR."
      },
      {
        "tag": "p",
        "text": "Registered Office: RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom, Hong Kong."
      },
      {
        "tag": "p",
        "text": "Official Contact: info@fideretrust.com | +852 5128 6593."
      },
      {
        "tag": "h2",
        "text": "2. Licensing and Supervisory Status"
      },
      {
        "tag": "p",
        "text": "Trust or Company Service Provider Licensees Number: TC010497."
      },
      {
        "tag": "p",
        "text": "FIDERE TRUST LIMITED is registered as a Trust Company under section 78(1) of the Trustee Ordinance (Chapter 29) in Hong Kong."
      },
      {
        "tag": "p",
        "text": "The Certificate of Registration as a Trust Company was issued by the Companies Registry on 11 May 2026."
      },
      {
        "tag": "p",
        "text": "The certificate confirms that FIDERE TRUST LIMITED has complied with the requirements of section 77 of the Trustee Ordinance (Chapter 29) and is registered as a Trust Company."
      },
      {
        "tag": "p",
        "text": "The registration authority is the Registrar of Companies, Hong Kong Special Administrative Region."
      },
      {
        "tag": "h2",
        "text": "3. Scope of Trust and Corporate Services"
      },
      {
        "tag": "p",
        "text": "The company's services are provided through a compliance-oriented operating framework for trust administration, fiduciary arrangements, corporate services, client administration and related fund handling support."
      },
      {
        "tag": "p",
        "text": "Services are provided subject to applicable laws and regulatory requirements in relevant jurisdictions."
      },
      {
        "tag": "p",
        "text": "Where licensing is required for a specific service type, client segment, or territory, services will only be offered within the permitted scope."
      },
      {
        "tag": "p",
        "text": "Regulatory status and license coverage may differ by product and location. Additional eligibility checks may apply before onboarding."
      },
      {
        "tag": "h2",
        "text": "4. Permitted Scope and Restrictions"
      },
      {
        "tag": "p",
        "text": "Information on this website is for general information and does not constitute legal, tax, or investment advice."
      },
      {
        "tag": "p",
        "text": "Certain solutions may be available only to eligible or professional clients under applicable law."
      },
      {
        "tag": "p",
        "text": "FIDERE may decline, restrict, suspend, or terminate access where onboarding, compliance, or legal conditions are not met."
      },
      {
        "tag": "h2",
        "text": "5. Restricted Jurisdictions"
      },
      {
        "tag": "p",
        "text": "Services may not be available in sanctioned or restricted jurisdictions."
      },
      {
        "tag": "p",
        "text": "Users are responsible for ensuring that access and use of this website is lawful in their location."
      },
      {
        "tag": "p",
        "text": "FIDERE reserves the right to update jurisdiction restrictions and client eligibility criteria without prior notice."
      },
      {
        "tag": "h3",
        "text": "Document Control"
      },
      {
        "tag": "p",
        "text": "Approver: Authorized Management"
      },
      {
        "tag": "p",
        "text": "Next Review Date: 11 May 2027"
      },
      {
        "tag": "p",
        "text": "Change Log: Updated Trust Company registration disclosure under Trustee Ordinance (Cap. 29)"
      }
    ]
  },
  {
    "slug": "compliance-kyc",
    "sourceUrl": "https://www.fideretrust.com/en/compliance-kyc",
    "retrievedAt": "2026-09-09",
    "sourceTextSha256": "abb5cc4c942a28d0160d3bde9b0e24244d4e1a371efd3e4863e7aa95dca26dff",
    "title": "Compliance & KYC",
    "blocks": [
      {
        "tag": "p",
        "text": "AML/CTF, sanctions controls, onboarding standards and ongoing KYB governance"
      },
      {
        "tag": "p",
        "text": "Effective Date: 1 April 2026"
      },
      {
        "tag": "p",
        "text": "Version: 1.0"
      },
      {
        "tag": "p",
        "text": "Policy Owner: Compliance Department"
      },
      {
        "tag": "p",
        "text": "Contact: info@fideretrust.com"
      },
      {
        "tag": "p",
        "text": "Review Cycle: At least annually or when required by law/regulation"
      },
      {
        "tag": "h2",
        "text": "1. AML/CTF Framework"
      },
      {
        "tag": "p",
        "text": "FIDERE applies a risk-based AML/CTF program for client onboarding and ongoing monitoring."
      },
      {
        "tag": "p",
        "text": "Control measures include customer due diligence (CDD), beneficial ownership verification, transaction monitoring, and suspicious activity escalation."
      },
      {
        "tag": "p",
        "text": "Enhanced due diligence (EDD) may be required for high-risk clients, complex ownership structures, and unusual transaction patterns."
      },
      {
        "tag": "p",
        "text": "AML/CTF controls are reviewed periodically to align with legal, regulatory, and operational risk requirements."
      },
      {
        "tag": "h2",
        "text": "2. KYC/KYB Documentation"
      },
      {
        "tag": "p",
        "text": "Individual onboarding may require identity verification, address proof, source of funds/wealth evidence, and additional supporting documents."
      },
      {
        "tag": "p",
        "text": "Corporate onboarding may require incorporation records, constitutional documents, director/shareholder registers, UBO information, and business profile."
      },
      {
        "tag": "p",
        "text": "FIDERE may request supplementary documents where needed to satisfy legal, regulatory, operational, or risk requirements."
      },
      {
        "tag": "p",
        "text": "Document acceptance and re-validation requirements may differ by jurisdiction, product, channel, and client risk profile."
      },
      {
        "tag": "h2",
        "text": "3. Typical Corporate KYB Pack"
      },
      {
        "tag": "p",
        "text": "Certificate of incorporation, business registration, constitutional documents, and proof of registered address."
      },
      {
        "tag": "p",
        "text": "Director and authorized signatory information, board resolutions or mandates, and ownership charts up to ultimate beneficial owners."
      },
      {
        "tag": "p",
        "text": "Business model description, expected transaction profile, source of funds narrative, and key counterparty/market exposure details."
      },
      {
        "tag": "p",
        "text": "Where applicable, audited financials, tax residency information, and licensing or regulatory filings relevant to the proposed activity."
      },
      {
        "tag": "h2",
        "text": "4. Sanctions, PEP and Ongoing Review"
      },
      {
        "tag": "p",
        "text": "Clients and relevant connected parties may be screened against sanctions and watchlists during onboarding and periodically thereafter."
      },
      {
        "tag": "p",
        "text": "Politically exposed person (PEP) status and adverse media may be considered as part of risk assessment."
      },
      {
        "tag": "p",
        "text": "FIDERE reserves the right to delay, decline, restrict, or terminate services where risk acceptance criteria are not met."
      },
      {
        "tag": "p",
        "text": "Material changes in ownership, control, transaction behavior, geography, or business activities may trigger re-screening and profile refresh."
      },
      {
        "tag": "h2",
        "text": "5. EDD Triggers and Risk Acceptance"
      },
      {
        "tag": "p",
        "text": "EDD may apply to high-risk jurisdictions, opaque ownership chains, unusual transaction velocity, or mismatch between stated and observed activity."
      },
      {
        "tag": "p",
        "text": "Additional checks may include independent corroboration of source of wealth, senior management approval, and tighter transaction controls."
      },
      {
        "tag": "p",
        "text": "FIDERE may reject or exit relationships involving unacceptable sanctions, legal, fraud, or reputational risk."
      },
      {
        "tag": "h2",
        "text": "6. Compliance Cooperation and Recordkeeping"
      },
      {
        "tag": "p",
        "text": "FIDERE may retain onboarding and transaction records for the period required by applicable law and regulation."
      },
      {
        "tag": "p",
        "text": "Where legally required, FIDERE may cooperate with regulators, law enforcement, or competent authorities."
      },
      {
        "tag": "p",
        "text": "Service availability remains subject to successful compliance review and ongoing risk monitoring."
      },
      {
        "tag": "p",
        "text": "Clients are responsible for promptly providing accurate updates when there are material changes to corporate structure, controllers, or business operations."
      },
      {
        "tag": "h3",
        "text": "Document Control"
      },
      {
        "tag": "p",
        "text": "Approver: Authorized Management"
      },
      {
        "tag": "p",
        "text": "Next Review Date: 1 April 2027"
      },
      {
        "tag": "p",
        "text": "Change Log: Initial release"
      }
    ]
  },
  {
    "slug": "risk-fees",
    "sourceUrl": "https://www.fideretrust.com/en/risk-fees",
    "retrievedAt": "2026-09-09",
    "sourceTextSha256": "5238d3e05d2741a55cc87fe8ad0f605a4a438e78b9704974c26ffd5407924df5",
    "title": "Risk & Fees",
    "blocks": [
      {
        "tag": "p",
        "text": "Risk disclosures, service pricing principles and complaints handling"
      },
      {
        "tag": "p",
        "text": "Effective Date: 1 April 2026"
      },
      {
        "tag": "p",
        "text": "Version: 1.0"
      },
      {
        "tag": "p",
        "text": "Policy Owner: Compliance Department"
      },
      {
        "tag": "p",
        "text": "Contact: info@fideretrust.com"
      },
      {
        "tag": "p",
        "text": "Review Cycle: At least annually or when required by law/regulation"
      },
      {
        "tag": "h2",
        "text": "1. Risk Disclosure"
      },
      {
        "tag": "p",
        "text": "Services may involve regulatory, operational, market, FX, settlement, counterparty, and technology risks."
      },
      {
        "tag": "p",
        "text": "Cross-border transactions may be subject to local legal restrictions, cut-off times, intermediary processing, and settlement delays."
      },
      {
        "tag": "p",
        "text": "Nothing on this website constitutes guaranteed returns, principal protection, or personalized investment advice."
      },
      {
        "tag": "h2",
        "text": "2. Fees and Charges"
      },
      {
        "tag": "p",
        "text": "Applicable fees may include service fees, transaction fees, custody or administrative fees, and third-party charges."
      },
      {
        "tag": "p",
        "text": "Exchange rates, spreads, and intermediary deductions may affect final settlement amounts."
      },
      {
        "tag": "p",
        "text": "Exact charges depend on service type, jurisdiction, transaction complexity, and partner institution requirements."
      },
      {
        "tag": "h2",
        "text": "3. Payments, Reversals and Refunds"
      },
      {
        "tag": "p",
        "text": "Processing timelines vary by payment rail, jurisdiction, compliance checks, and banking cut-off times."
      },
      {
        "tag": "p",
        "text": "Certain payment instructions may become irreversible once accepted by upstream institutions."
      },
      {
        "tag": "p",
        "text": "Refunds, where available, remain subject to legal, operational, and counterparty constraints."
      },
      {
        "tag": "h2",
        "text": "4. Complaints Handling"
      },
      {
        "tag": "p",
        "text": "Clients may submit complaints via info@fideretrust.com with relevant case details and supporting documents."
      },
      {
        "tag": "p",
        "text": "FIDERE aims to acknowledge receipt and process complaints within a reasonable timeframe."
      },
      {
        "tag": "p",
        "text": "Where required, unresolved matters may be escalated according to applicable regulatory dispute channels."
      },
      {
        "tag": "h3",
        "text": "Document Control"
      },
      {
        "tag": "p",
        "text": "Approver: Authorized Management"
      },
      {
        "tag": "p",
        "text": "Next Review Date: 1 April 2027"
      },
      {
        "tag": "p",
        "text": "Change Log: Initial release"
      }
    ]
  }
];
