import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "out");
const arabicPage = await readFile(path.join(outputDirectory, "ar.html"), "utf8");

const htmlClass = arabicPage.match(/<html\b[^>]*\bclass="([^"]+)"/)?.[1];
if (!htmlClass) throw new Error("Could not find the generated font classes in out/ar.html");

const assetTags = [
  ...arabicPage.matchAll(/<link\b[^>]*\brel="(?:stylesheet|preload)"[^>]*>/g),
]
  .map((match) => match[0])
  .filter((tag) => tag.includes('rel="stylesheet"') || tag.includes('as="font"'))
  .filter((tag, index, tags) => tags.indexOf(tag) === index)
  .join("");

if (!assetTags.includes('rel="stylesheet"')) {
  throw new Error("Could not find generated stylesheet links in out/ar.html");
}

const messages = {
  en: {
    htmlLang: "en",
    dir: "ltr",
    title: "Page not found | FIDERE TRUST",
    navigation: "Language",
    eyebrow: "FIDERE TRUST · ERROR 404",
    heading: "This page could not be found.",
    description: "The address may have changed, or the page may no longer be available.",
    timer: "Automatic return",
    timerAnnouncement: "The home page will open automatically in five seconds.",
    cancelled: "Automatic return cancelled",
    cancelledAnnouncement: "Automatic return cancelled.",
    returnNow: "Return to the home page now",
    cancel: "Cancel automatic return",
    home: "Home",
  },
  "zh-hant": {
    htmlLang: "zh-Hant",
    dir: "ltr",
    title: "找不到頁面 | 承明信託",
    navigation: "語言選擇",
    eyebrow: "FIDERE TRUST · 錯誤 404",
    heading: "找不到此頁面。",
    description: "網址可能已更改，或此頁面已不再提供。",
    timer: "自動返回首頁",
    timerAnnouncement: "網站首頁將於五秒後自動開啟。",
    cancelled: "已取消自動返回",
    cancelledAnnouncement: "已取消自動返回。",
    returnNow: "立即返回首頁",
    cancel: "取消自動返回",
    home: "首頁",
  },
  ja: {
    htmlLang: "ja",
    dir: "ltr",
    title: "ページが見つかりません | FIDERE TRUST",
    navigation: "言語",
    eyebrow: "FIDERE TRUST · エラー 404",
    heading: "ページが見つかりません。",
    description: "URLが変更されたか、ページが利用できなくなった可能性があります。",
    timer: "自動的にホームへ戻ります",
    timerAnnouncement: "5秒後にホームページへ移動します。",
    cancelled: "自動移動をキャンセルしました",
    cancelledAnnouncement: "自動移動をキャンセルしました。",
    returnNow: "今すぐホームページへ戻る",
    cancel: "自動移動をキャンセル",
    home: "ホーム",
  },
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    title: "الصفحة غير موجودة | FIDERE TRUST",
    navigation: "اللغة",
    eyebrow: "FIDERE TRUST · خطأ 404",
    heading: "تعذّر العثور على هذه الصفحة.",
    description: "ربما تغيّر العنوان، أو لم تعد الصفحة متاحة.",
    timer: "العودة تلقائيًا",
    timerAnnouncement: "ستُفتح الصفحة الرئيسية تلقائيًا خلال خمس ثوانٍ.",
    cancelled: "تم إلغاء العودة التلقائية",
    cancelledAnnouncement: "تم إلغاء العودة التلقائية.",
    returnNow: "العودة إلى الصفحة الرئيسية الآن",
    cancel: "إلغاء العودة التلقائية",
    home: "الرئيسية",
  },
};

const safeMessages = JSON.stringify(messages).replaceAll("<", "\\u003c");

const document = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="${htmlClass}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="theme-color" content="#091f30">
  <title>Page not found | FIDERE TRUST</title>
  <link rel="icon" href="/fidere-mark-96.png" type="image/png" sizes="96x96">
  <link rel="icon" href="/fidere-mark.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
  ${assetTags}
  <script>
    (() => {
      const firstSegment = location.pathname.toLowerCase().split("/").filter(Boolean)[0];
      const locale = firstSegment === "ar" ? "ar" : firstSegment === "ja" ? "ja" : firstSegment === "zh-hant" ? "zh-hant" : "en";
      document.documentElement.lang = locale === "zh-hant" ? "zh-Hant" : locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      window.__fidereNotFoundLocale = locale;
    })();
  </script>
</head>
<body id="top" class="not-found-standalone">
  <header class="not-found-bar">
    <div class="not-found-bar-inner">
      <a class="brand" data-home-link href="https://www.fideretrust.com/" aria-label="FIDERE TRUST home">
        <img src="/brand/fidere-logo.png" width="600" height="125" alt="FIDERE TRUST — Trusted partner. Lasting value.">
      </a>
      <nav class="not-found-languages" id="not-found-languages" aria-label="Language">
        <a data-locale-home="en" href="https://www.fideretrust.com/">EN</a>
        <a data-locale-home="zh-hant" href="https://www.fideretrust.com/zh-hant">繁</a>
        <a data-locale-home="ja" href="https://www.fideretrust.com/ja" lang="ja">日本語</a>
        <a data-locale-home="ar" href="https://www.fideretrust.com/ar" lang="ar">العربية</a>
      </nav>
    </div>
  </header>
  <main class="not-found-page container" aria-labelledby="not-found-title">
    <div class="not-found-code" aria-hidden="true">404</div>
    <div class="not-found-copy">
      <span class="eyebrow" id="not-found-eyebrow">FIDERE TRUST · ERROR 404</span>
      <h1 id="not-found-title">This page could not be found.</h1>
      <p class="not-found-description" id="not-found-description">The address may have changed, or the page may no longer be available.</p>
      <p class="not-found-timer" id="not-found-timer" aria-hidden="true">Automatic return · 00:05</p>
      <p class="sr-only" id="not-found-status" role="status" aria-live="polite">The home page will open automatically in five seconds.</p>
      <div class="not-found-actions">
        <a class="text-link" id="not-found-return" data-home-link href="https://www.fideretrust.com/">
          <span id="not-found-return-label">Return to the home page now</span>
          <span class="arrow" id="not-found-arrow" aria-hidden="true">→</span>
        </a>
        <button type="button" class="not-found-cancel" id="not-found-cancel">Cancel automatic return</button>
      </div>
    </div>
  </main>
  <footer class="not-found-footer">
    <div class="not-found-footer-inner">
      <span dir="ltr">© 2026 FIDERE TRUST LIMITED</span>
      <a id="not-found-footer-home" data-home-link href="https://www.fideretrust.com/">Home</a>
    </div>
  </footer>
  <script>
    (() => {
      const messages = ${safeMessages};
      const locale = window.__fidereNotFoundLocale || "en";
      const copy = messages[locale];
      const pathFor = (value) => value === "en" ? "/" : "/" + value;
      const localHosts = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);
      const homeOrigin = localHosts.has(location.hostname) ? location.origin : "https://www.fideretrust.com";
      const homeFor = (value) => new URL(pathFor(value), homeOrigin).href;
      const destination = homeFor(locale);
      const byId = (id) => document.getElementById(id);

      document.title = copy.title;
      byId("not-found-languages").setAttribute("aria-label", copy.navigation);
      byId("not-found-eyebrow").textContent = copy.eyebrow;
      byId("not-found-title").textContent = copy.heading;
      byId("not-found-description").textContent = copy.description;
      byId("not-found-status").textContent = copy.timerAnnouncement;
      byId("not-found-return-label").textContent = copy.returnNow;
      byId("not-found-arrow").textContent = "→";
      byId("not-found-cancel").textContent = copy.cancel;
      byId("not-found-footer-home").textContent = copy.home;

      document.querySelectorAll("[data-home-link]").forEach((link) => {
        link.href = destination;
      });
      document.querySelectorAll("[data-locale-home]").forEach((link) => {
        const linkLocale = link.dataset.localeHome;
        link.href = homeFor(linkLocale);
        if (linkLocale === locale) link.setAttribute("aria-current", "true");
      });

      let cancelled = false;
      const deadline = Date.now() + 5000;
      const timerElement = byId("not-found-timer");
      const cancelButton = byId("not-found-cancel");
      const renderTime = () => {
        const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        timerElement.textContent = copy.timer + " · 00:" + String(seconds).padStart(2, "0");
        if (seconds === 0 && !cancelled) {
          clearInterval(interval);
          location.replace(destination);
        }
      };
      const interval = setInterval(renderTime, 250);
      renderTime();

      cancelButton.addEventListener("click", () => {
        cancelled = true;
        clearInterval(interval);
        timerElement.textContent = copy.cancelled;
        byId("not-found-status").textContent = copy.cancelledAnnouncement;
        cancelButton.hidden = true;
      });
    })();
  </script>
</body>
</html>
`;

await Promise.all([
  writeFile(path.join(outputDirectory, "404.html"), document),
  writeFile(path.join(outputDirectory, "_not-found.html"), document),
]);

console.log("Generated localized out/404.html and out/_not-found.html");
