"use client";

import { useEffect, useState } from "react";
import { company, pathFor, text, type Locale } from "@/lib/site";

const redirectDelaySeconds = 5;

function homepageUrl(locale: Locale) {
  const path = pathFor(locale);
  if (typeof window !== "undefined" && ["127.0.0.1", "localhost", "[::1]"].includes(window.location.hostname)) {
    return new URL(path, window.location.origin).href;
  }
  return new URL(path, company.website).href;
}

export function NotFoundContent({ locale }: { locale: Locale }) {
  const [seconds, setSeconds] = useState(redirectDelaySeconds);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const destination = homepageUrl(locale);
    if (cancelled) return;

    const deadline = Date.now() + redirectDelaySeconds * 1000;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSeconds(remaining);
      if (remaining === 0) {
        window.clearInterval(timer);
        window.location.replace(destination);
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, [cancelled, locale]);

  const timerLabel = cancelled
    ? text(locale, "Automatic return cancelled", "已取消自動返回", "已取消自动返回", "تم إلغاء العودة التلقائية")
    : `${text(locale, "Automatic return", "自動返回首頁", "自动返回首页", "العودة تلقائيًا")} · 00:${String(seconds).padStart(2, "0")}`;

  return (
    <section className="not-found-page container" aria-labelledby="not-found-title">
      <div className="not-found-code" aria-hidden="true">404</div>
      <div className="not-found-copy">
        <span className="eyebrow">{text(locale, "FIDERE TRUST · ERROR 404", "FIDERE TRUST · 錯誤 404", "FIDERE TRUST · 错误 404", "FIDERE TRUST · خطأ 404")}</span>
        <h1 id="not-found-title">{text(locale, "This page could not be found.", "找不到此頁面。", "找不到此页面。", "تعذّر العثور على هذه الصفحة.")}</h1>
        <p className="not-found-description">{text(locale, "The address may have changed, or the page may no longer be available.", "網址可能已更改，或此頁面已不再提供。", "网址可能已更改，或此页面已不再提供。", "ربما تغيّر العنوان، أو لم تعد الصفحة متاحة.")}</p>
        <p className="not-found-timer" aria-hidden="true">{timerLabel}</p>
        <p className="sr-only" role="status" aria-live="polite">
          {cancelled
            ? text(locale, "Automatic return cancelled.", "已取消自動返回。", "已取消自动返回。", "تم إلغاء العودة التلقائية.")
            : text(locale, "The home page will open automatically in five seconds.", "網站首頁將於五秒後自動開啟。", "网站首页将在五秒后自动打开。", "ستُفتح الصفحة الرئيسية تلقائيًا خلال خمس ثوانٍ.")}
        </p>
        <div className="not-found-actions">
          <a
            className="text-link"
            href={new URL(pathFor(locale), company.website).href}
            onClick={(event) => {
              event.preventDefault();
              window.location.assign(homepageUrl(locale));
            }}
          >
            {text(locale, "Return to the home page now", "立即返回首頁", "立即返回首页", "العودة إلى الصفحة الرئيسية الآن")}
            <span className="arrow" aria-hidden="true">→</span>
          </a>
          {!cancelled && <button type="button" className="not-found-cancel" onClick={() => setCancelled(true)}>
            {text(locale, "Cancel automatic return", "取消自動返回", "取消自动返回", "إلغاء العودة التلقائية")}
          </button>}
        </div>
      </div>
    </section>
  );
}
