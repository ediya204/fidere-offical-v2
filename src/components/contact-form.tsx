"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { type Locale, company, pathFor, text } from "@/lib/site";
import { solutionDetails } from "@/lib/solutions";
import { Arrow } from "./editorial";
export function ContactForm({locale}:{locale:Locale}) {
 const [draft,setDraft]=useState<{subject:string;body:string}|null>(null);
 const [copied,setCopied]=useState(false);
 const [copyError,setCopyError]=useState(false);
 function prepare(event:FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const name=String(data.get("name")??"").trim(),email=String(data.get("email")??"").trim(),message=String(data.get("message")??"").trim();
  if(!name||!message) return;
  const interest=new URLSearchParams(window.location.search).get("interest");
  const selectedSolution=solutionDetails.find(item=>item.slug===interest);
  const topic=interest&&/^[a-z-]{1,50}$/.test(interest)?` — ${locale==="ar"&&selectedSolution?text(locale,...selectedSolution.title):interest.replaceAll("-"," ")}`:"";
  const clientLabel=clientTypes.find(([value])=>value===data.get("clientType"))?.[1]??String(data.get("clientType"));
  setDraft(locale==="ar"?{subject:`استفسار إلى FIDERE — ${clientLabel}${topic}`,body:`الاسم: ${name}\nالبريد الإلكتروني: ${email}\nنوع العميل: ${clientLabel}\n\n${message}`}:{subject:`FIDERE enquiry — ${String(data.get("clientType"))}${topic}`,body:`Name: ${name}\nEmail: ${email}\nClient type: ${String(data.get("clientType"))}\n\n${message}`});
  setCopied(false);setCopyError(false);
 }
 const clientTypes=[
  ["Private Client",text(locale,"Private Client","私人客戶","私人客户")],
  ["Family Office",text(locale,"Family Office","家族辦公室","家族办公室")],
  ["Corporate",text(locale,"Corporate","企業","企业")],
  ["Professional Adviser",text(locale,"Professional Adviser","專業顧問","专业顾问")],
  ["Other",text(locale,"Other","其他","其他")],
 ];
 return <form className="enquiry-form" onSubmit={prepare} onChange={()=>{setDraft(null);setCopied(false);setCopyError(false);}}>
  <div className="form-row"><div className="form-field"><label htmlFor="name">{text(locale,"Name","姓名","姓名")} <span>*</span></label><input id="name" name="name" dir="auto" autoComplete="name" required maxLength={100} pattern=".*\S.*" placeholder={text(locale,"Your full name","您的姓名","您的姓名")}/></div><div className="form-field"><label htmlFor="email">{text(locale,"Email","電郵","邮箱")} <span>*</span></label><input id="email" name="email" dir="ltr" type="email" autoComplete="email" required maxLength={254} placeholder={text(locale,"Your email address","您的電郵地址","您的邮箱地址")}/></div></div>
  <div className="form-field"><label htmlFor="client-type">{text(locale,"Client type","客戶類別","客户类别")} <span>*</span></label><select id="client-type" name="clientType" required defaultValue=""><option value="" disabled>{text(locale,"Please select","請選擇","请选择")}</option>{clientTypes.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></div>
  <div className="form-field"><label htmlFor="message">{text(locale,"How can we help?","我們可以如何協助您？","我们可以如何协助您？")} <span>*</span></label><textarea id="message" name="message" dir="auto" required minLength={10} maxLength={4000} rows={5} placeholder={text(locale,"A brief outline of what you would like to discuss.","請簡述您希望討論的事宜。","请简述您希望讨论的事宜。")}/></div>
  <p className="form-privacy">{text(locale,"Please do not include account numbers, identity documents or confidential financial details. Read our ","請勿填寫賬戶號碼、身份文件或機密財務資料。請參閱","请勿填写账户号码、身份文件或机密财务资料。请参阅")}<Link href={pathFor(locale,"privacy")}>{text(locale,"Privacy Policy","私隱政策","隐私政策")}</Link>{locale==="en"||locale==="ar"?".":"。"}</p>
  <button className="submit-button" type="submit">{text(locale,"Prepare enquiry","準備查詢郵件","准备咨询邮件")}<Arrow/></button><p className="form-delivery-note">{text(locale,"Prepare a draft to send from your own email application. Nothing is sent automatically.","準備草稿後，您可透過自己的電郵程式發送。系統不會自動發送。","准备草稿后，您可通过自己的邮件程序发送。系统不会自动发送。")}</p>
  {draft&&<div className="draft-result" role="status" aria-live="polite"><h3>{text(locale,"Your enquiry is ready.","查詢草稿已準備就緒。","咨询草稿已准备就绪。")}</h3><p>{text(locale,`Open the draft, review it and send it to ${company.email}.`,`開啟草稿，檢查內容後發送至 ${company.email}。`,`打开草稿，检查内容后发送至 ${company.email}。`)}</p><div className="draft-actions"><a className="text-link" href={`mailto:${company.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>{text(locale,"Open email draft","開啟電郵草稿","打开邮件草稿")}<Arrow/></a><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(`${locale==="ar"?"إلى":"To"}: ${company.email}\n${locale==="ar"?"الموضوع":"Subject"}: ${draft.subject}\n\n${draft.body}`);setCopied(true);setCopyError(false);}catch{setCopyError(true);}}}>{copied?text(locale,"Copied","已複製","已复制"):text(locale,"Copy enquiry","複製查詢內容","复制咨询内容")}</button></div>{copyError&&<p>{text(locale,"Copy is unavailable in this browser. You can select the draft below.","此瀏覽器無法複製，您可選取以下草稿內容。","此浏览器无法复制，您可选取以下草稿内容。")}</p>}<details><summary>{text(locale,"Review draft","檢視草稿","查看草稿")}</summary><pre dir="auto">{draft.body}</pre></details></div>}
 </form>;
}
