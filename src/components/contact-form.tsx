"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { type Locale, company, pathFor, text } from "@/lib/site";
import { solutionDetails } from "@/lib/solutions";
import { Arrow } from "./editorial";

type SubmissionState =
  | { status: "idle" | "submitting" }
  | { status: "success"; reference: string }
  | { status: "error" };

const formCopy: Record<Locale, {
  send: string;
  sending: string;
  delivery: string;
  successTitle: string;
  successBody: string;
  reference: string;
  errorTitle: string;
  errorBody: string;
  retry: string;
  emailDirectly: string;
}> = {
  en: {
    send: "Send enquiry",
    sending: "Sending…",
    delivery: "Your enquiry will be sent securely to our team.",
    successTitle: "Thank you. Your enquiry has been sent.",
    successBody: "Our team will review it and respond using the email address you provided.",
    reference: "Reference",
    errorTitle: "We could not send your enquiry.",
    errorBody: "Please try again or email us directly.",
    retry: "Try again",
    emailDirectly: "Email us directly",
  },
  "zh-hant": {
    send: "提交查詢",
    sending: "正在提交…",
    delivery: "您的查詢將安全地發送至我們的團隊。",
    successTitle: "謝謝，您的查詢已成功提交。",
    successBody: "我們的團隊將進行審閱，並透過您提供的電郵地址回覆。",
    reference: "參考編號",
    errorTitle: "暫時無法提交您的查詢。",
    errorBody: "請重試或直接電郵聯絡我們。",
    retry: "重新提交",
    emailDirectly: "直接發送電郵",
  },
  ja: {
    send: "お問い合わせを送信",
    sending: "送信中…",
    delivery: "お問い合わせは安全に当社チームへ送信されます。",
    successTitle: "お問い合わせを送信しました。",
    successBody: "内容を確認のうえ、ご入力いただいたメールアドレスへご連絡します。",
    reference: "受付番号",
    errorTitle: "お問い合わせを送信できませんでした。",
    errorBody: "もう一度お試しいただくか、メールで直接お問い合わせください。",
    retry: "もう一度送信",
    emailDirectly: "メールで問い合わせる",
  },
  ar: {
    send: "إرسال الاستفسار",
    sending: "جارٍ الإرسال…",
    delivery: "سيتم إرسال استفساركم بأمان إلى فريقنا.",
    successTitle: "شكرًا لكم. تم إرسال استفساركم.",
    successBody: "سيراجع فريقنا استفساركم ويرد عبر عنوان البريد الإلكتروني الذي قدمتموه.",
    reference: "الرقم المرجعي",
    errorTitle: "تعذر إرسال استفساركم.",
    errorBody: "يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة عبر البريد الإلكتروني.",
    retry: "المحاولة مرة أخرى",
    emailDirectly: "مراسلتنا مباشرة",
  },
};

export function ContactForm({ locale }: { locale: Locale }) {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const startedAt = useRef(0);
  const copy = formCopy[locale];
  const clientTypes = [
    ["Private Client", text(locale, "Private Client", "私人客戶", "私人客户")],
    ["Family Office", text(locale, "Family Office", "家族辦公室", "家族办公室")],
    ["Corporate", text(locale, "Corporate", "企業", "企业")],
    ["Professional Adviser", text(locale, "Professional Adviser", "專業顧問", "专业顾问")],
    ["Other", text(locale, "Other", "其他", "其他")],
  ];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const interest = new URLSearchParams(window.location.search).get("interest");
    const selectedSolution = solutionDetails.some((item) => item.slug === interest) ? interest : null;

    setSubmission({ status: "submitting" });
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          clientType: String(data.get("clientType") ?? ""),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? ""),
          interest: selectedSolution,
          locale,
          page: `${window.location.pathname}${window.location.search}`,
          startedAt: startedAt.current,
        }),
      });
      const result = await response.json() as { ok?: boolean; reference?: string };
      if (!response.ok || !result.ok || !result.reference) throw new Error("Submission failed");
      form.reset();
      startedAt.current = Date.now();
      setSubmission({ status: "success", reference: result.reference });
    } catch {
      setSubmission({ status: "error" });
    }
  }

  return <form className="enquiry-form" onSubmit={submit} onFocus={() => { if (!startedAt.current) startedAt.current = Date.now(); }} onChange={() => submission.status !== "submitting" && setSubmission({ status: "idle" })}>
    <div className="form-row"><div className="form-field"><label htmlFor="name">{text(locale, "Name", "姓名", "姓名")} <span>*</span></label><input id="name" name="name" dir="auto" autoComplete="name" required maxLength={100} pattern=".*\S.*" placeholder={text(locale, "Your full name", "您的姓名", "您的姓名")}/></div><div className="form-field"><label htmlFor="email">{text(locale, "Email", "電郵", "邮箱")} <span>*</span></label><input id="email" name="email" dir="ltr" type="email" autoComplete="email" required maxLength={254} placeholder={text(locale, "Your email address", "您的電郵地址", "您的邮箱地址")}/></div></div>
    <div className="form-field"><label htmlFor="client-type">{text(locale, "Client type", "客戶類別", "客户类别")} <span>*</span></label><select id="client-type" name="clientType" required defaultValue=""><option value="" disabled>{text(locale, "Please select", "請選擇", "请选择")}</option>{clientTypes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>
    <div className="form-field"><label htmlFor="message">{text(locale, "How can we help?", "我們可以如何協助您？", "我们可以如何协助您？")} <span>*</span></label><textarea id="message" name="message" dir="auto" required minLength={10} maxLength={4000} rows={5} placeholder={text(locale, "A brief outline of what you would like to discuss.", "請簡述您希望討論的事宜。", "请简述您希望讨论的事宜。")}/></div>
    <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off"/></div>
    <p className="form-privacy">{text(locale, "Please do not include account numbers, identity documents or confidential financial details. Read our ", "請勿填寫賬戶號碼、身份文件或機密財務資料。請參閱", "请勿填写账户号码、身份文件或机密财务资料。请参阅")}<Link href={pathFor(locale, "privacy")}>{text(locale, "Privacy Policy", "私隱政策", "隐私政策")}</Link>{locale === "en" || locale === "ar" ? "." : "。"}</p>
    <button className="submit-button" type="submit" disabled={submission.status === "submitting"}>{submission.status === "submitting" ? copy.sending : copy.send}<Arrow/></button>
    <p className="form-delivery-note">{copy.delivery}</p>
    <div className="submission-status" aria-live="polite">
      {submission.status === "success" && <div className="draft-result submission-success" role="status"><h3>{copy.successTitle}</h3><p>{copy.successBody}</p><p className="submission-reference">{copy.reference}: <strong>{submission.reference}</strong></p></div>}
      {submission.status === "error" && <div className="draft-result submission-error" role="alert"><h3>{copy.errorTitle}</h3><p>{copy.errorBody}</p><div className="draft-actions"><button type="submit">{copy.retry}<Arrow/></button><a href={`mailto:${company.email}`} className="text-link">{copy.emailDirectly}<Arrow/></a></div></div>}
    </div>
  </form>;
}
