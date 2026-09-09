"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { company, locales, localeNames, localeSeo, type Locale, navigation, pathFor, text } from "@/lib/site";
import { Arrow } from "./editorial";
import "./header-navigation.css";

type Copy = { en: string; tc: string; sc: string };
type TopicLink = Copy & { slug: string };
type TopicMenu = {
  label: Copy;
  description: Copy;
  groups: Array<{ label: Copy; links: TopicLink[] }>;
};

const topicMenus: Record<string, TopicMenu> = {
  about: {
    label: { en: "A considered partnership", tc: "以周全思考，建立長久關係", sc: "以周全思考，建立长久关系" },
    description: { en: "Get to know our perspective, the way we work, and the principles behind our responsibilities.", tc: "了解我們的理念、工作方式，以及履行責任所依循的原則。", sc: "了解我们的理念、工作方式，以及履行责任所依循的原则。" },
    groups: [
      { label: { en: "Our institution", tc: "認識我們", sc: "认识我们" }, links: [
        { slug: "who-we-are", en: "Who We Are", tc: "我們是誰", sc: "我们是谁" },
        { slug: "our-approach", en: "Our Approach", tc: "我們的方式", sc: "我们的方式" },
      ] },
      { label: { en: "Our responsibilities", tc: "我們的責任", sc: "我们的责任" }, links: [
        { slug: "governance", en: "Governance", tc: "管治原則", sc: "管治原则" },
      ] },
    ],
  },
  solutions: {
    label: { en: "Structures for what matters", tc: "為重要之事，構建周全方案", sc: "为重要之事，构建周全方案" },
    description: { en: "Explore trust, corporate and fiduciary services shaped around families, businesses and the years ahead.", tc: "探索圍繞家族、企業與長遠需要而設的信託、企業及受託服務。", sc: "探索围绕家族、企业与长远需要而设的信托、企业及受托服务。" },
    groups: [
      { label: { en: "Private wealth & family", tc: "私人財富與家族", sc: "私人财富与家族" }, links: [
        { slug: "private-trust", en: "Private Trust", tc: "私人信託", sc: "私人信托" },
        { slug: "succession-planning", en: "Succession Planning", tc: "傳承規劃", sc: "传承规划" },
        { slug: "family-office", en: "Family Office", tc: "家族辦公室", sc: "家族办公室" },
      ] },
      { label: { en: "Corporate & fiduciary", tc: "企業與受託服務", sc: "企业与受托服务" }, links: [
        { slug: "corporate-trust", en: "Corporate Trust", tc: "企業信託", sc: "企业信托" },
        { slug: "trustee-directors", en: "Trustee & Directors", tc: "受託人與董事服務", sc: "受托人与董事服务" },
        { slug: "company-formation", en: "Company Formation", tc: "公司設立", sc: "公司设立" },
        { slug: "tax-compliance", en: "Tax Compliance", tc: "稅務合規", sc: "税务合规" },
      ] },
      { label: { en: "Governance & transactions", tc: "管治與交易支持", sc: "管治与交易支持" }, links: [
        { slug: "regulatory-compliance", en: "Regulatory Compliance", tc: "監管合規", sc: "监管合规" },
        { slug: "transaction-support", en: "Transaction Support", tc: "交易支持", sc: "交易支持" },
        { slug: "equity-asset-custody", en: "Equity & Asset Custody", tc: "股權與資產託管", sc: "股权与资产托管" },
      ] },
    ],
  },
  "wealth-management": {
    label: { en: "Perspective across markets", tc: "以長遠視野，理解市場", sc: "以长远视野，理解市场" },
    description: { en: "Consider the role of markets, investment funds, fixed income and liquidity within a broader wealth plan.", tc: "從整體財富規劃出發，理解市場、基金、固定收益與流動性的不同角色。", sc: "从整体财富规划出发，理解市场、基金、固定收益与流动性的不同角色。" },
    groups: [
      { label: { en: "Markets & investments", tc: "市場與投資", sc: "市场与投资" }, links: [
        { slug: "global-markets", en: "Global Markets", tc: "全球市場", sc: "全球市场" },
        { slug: "funds", en: "Funds", tc: "基金", sc: "基金" },
      ] },
      { label: { en: "Income & liquidity", tc: "收益與流動性", sc: "收益与流动性" }, links: [
        { slug: "fixed-income", en: "Fixed Income", tc: "固定收益", sc: "固定收益" },
        { slug: "cash-management", en: "Cash Management", tc: "現金管理", sc: "现金管理" },
      ] },
    ],
  },
  compliance: {
    label: { en: "Clarity in every responsibility", tc: "清晰理解，每一份責任", sc: "清晰理解，每一份责任" },
    description: { en: "Understand the checks, information and ongoing responsibilities that support a considered client relationship.", tc: "了解客戶關係所涉及的審查、資料要求與持續責任。", sc: "了解客户关系所涉及的审查、资料要求与持续责任。" },
    groups: [
      { label: { en: "Client understanding", tc: "認識客戶", sc: "认识客户" }, links: [
        { slug: "client-due-diligence", en: "Client Due Diligence", tc: "客戶盡職審查", sc: "客户尽职审查" },
        { slug: "source-of-funds", en: "Source of Funds", tc: "資金來源", sc: "资金来源" },
      ] },
      { label: { en: "Standards & oversight", tc: "標準與監督", sc: "标准与监督" }, links: [
        { slug: "aml-ctf", en: "AML / CTF", tc: "打擊洗錢及恐怖分子資金籌集", sc: "打击洗钱及恐怖分子资金筹集" },
        { slug: "sanctions-screening", en: "Sanctions Screening", tc: "制裁篩查", sc: "制裁筛查" },
        { slug: "ongoing-monitoring", en: "Ongoing Monitoring", tc: "持續監察", sc: "持续监察" },
      ] },
    ],
  },
};

// Locale prefixes are optional for English; keep the full content path when switching languages.
function contentPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (locales.some((locale) => locale === segments[0])) segments.shift();
  return segments.join("/");
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const currentSlug = contentPath(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [mobileTopic, setMobileTopic] = useState<string | null>(null);
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const dialog = useRef<HTMLDialogElement>(null);
  const header = useRef<HTMLElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const desktopNavigation = useRef<HTMLElement>(null);
  const topicToggles = useRef<Record<string, HTMLButtonElement | null>>({});
  const mobileTopicToggles = useRef<Record<string, HTMLButtonElement | null>>({});
  const hoverTopic = useRef<string | null>(null);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copy = (value: Copy) => text(locale, value.en, value.tc, value.sc);

  // Reset on Back/Forward as well as navigation through the menu's links.
  if (previousPathname !== pathname) {
    setPreviousPathname(pathname);
    setMobileOpen(false);
    setActiveTopic(null);
    setMobileTopic(null);
  }
  useEffect(() => {
    const element = header.current;
    if (!element) return;
    let frame: number | null = null;
    let lastScroll = Math.max(0, window.scrollY);
    let direction = 0;
    let travel = 0;
    const setVisibility = (concealed: boolean) => {
      const value = String(concealed);
      const offset = concealed ? "0px" : `${element.offsetHeight}px`;
      if (element.dataset.concealed !== value) element.dataset.concealed = value;
      if (document.documentElement.style.getPropertyValue("--header-offset") !== offset) {
        document.documentElement.style.setProperty("--header-offset", offset);
      }
    };
    const update = () => {
      frame = null;
      const nextScroll = Math.max(0, window.scrollY);
      const delta = nextScroll - lastScroll;
      lastScroll = nextScroll;
      if (mobileOpen || activeTopic || element.contains(document.activeElement) || nextScroll < element.offsetHeight) {
        travel = 0;
        direction = 0;
        setVisibility(false);
        return;
      }
      if (!delta) return;
      const nextDirection = Math.sign(delta);
      if (direction !== nextDirection) { direction = nextDirection; travel = 0; }
      travel += Math.abs(delta);
      if (travel >= 8) { setVisibility(direction > 0); travel = 0; }
    };
    const onScroll = () => { if (frame === null) frame = requestAnimationFrame(update); };
    const reveal = () => { setVisibility(false); travel = 0; lastScroll = Math.max(0, window.scrollY); };
    reveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", reveal, { passive: true });
    element.addEventListener("focusin", reveal);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", reveal);
      element.removeEventListener("focusin", reveal);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [pathname, mobileOpen, activeTopic]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileOpen) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
    }
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeTopic) return;
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !desktopNavigation.current?.contains(event.target)) {
        setActiveTopic(null);
        hoverTopic.current = null;
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveTopic(null);
        hoverTopic.current = null;
        topicToggles.current[activeTopic]?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeTopic]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const onViewportChange = () => {
      setActiveTopic(null);
      setMobileTopic(null);
      setMobileOpen(false);
      hoverTopic.current = null;
    };
    desktop.addEventListener("change", onViewportChange);
    return () => {
      desktop.removeEventListener("change", onViewportChange);
      if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    };
  }, []);

  function clearHoverClose() {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
  }
  function closeNavigation() {
    clearHoverClose();
    setMobileOpen(false);
    setActiveTopic(null);
    setMobileTopic(null);
    hoverTopic.current = null;
  }
  function closeMenu() {
    closeNavigation();
    if (mobileOpen) menuToggle.current?.focus();
  }
  function enterTopic(slug: string) {
    clearHoverClose();
    if (activeTopic !== slug) {
      hoverTopic.current = slug;
      setActiveTopic(slug);
    }
  }
  function leaveTopic(slug: string, element: HTMLDivElement) {
    clearHoverClose();
    hoverCloseTimer.current = setTimeout(() => {
      if (!element.contains(document.activeElement)) {
        setActiveTopic((active) => active === slug ? null : active);
        if (hoverTopic.current === slug) hoverTopic.current = null;
      }
    }, 160);
  }
  function toggleTopic(slug: string) {
    clearHoverClose();
    if (hoverTopic.current === slug) {
      hoverTopic.current = null;
      setActiveTopic(slug);
    } else {
      setActiveTopic((active) => active === slug ? null : slug);
    }
  }
  function focusTopicLink(slug: string, last = false) {
    clearHoverClose();
    hoverTopic.current = null;
    setActiveTopic(slug);
    requestAnimationFrame(() => {
      const links = desktopNavigation.current?.querySelectorAll<HTMLAnchorElement>(`#topic-menu-${slug} a`);
      if (links?.length) links[last ? links.length - 1 : 0].focus();
    });
  }
  function topicToggleLabel(label: string, expanded: boolean) {
    return text(locale, `${expanded ? "Close" : "Explore"} ${label}`, `${expanded ? "收起" : "展開"}${label}`, `${expanded ? "收起" : "展开"}${label}`, `${expanded ? "إغلاق" : "تصفح"} ${label}`);
  }
  const languageLinks = (
    <div className="language-options" aria-label={text(locale, "Language", "語言", "语言")}>
      {locales.map((item) => <Link key={item} href={pathFor(item, currentSlug)} hrefLang={localeSeo[item].hrefLang} lang={localeSeo[item].htmlLang} dir={item === "ar" ? "rtl" : "ltr"} onNavigate={(event) => { event.preventDefault(); closeMenu(); router.push(pathFor(item, currentSlug) + window.location.search + window.location.hash); }} aria-current={locale === item ? "true" : undefined}>{localeNames[item]}</Link>)}
    </div>
  );
  return <>
    <header ref={header} className="site-header is-solid">
      <div className="header-inner">
        <div className="header-utility-row">
          <div className="header-utilities">
            <a className="login-link" href={company.portal} target="_blank" rel="noopener noreferrer" onClick={closeNavigation} aria-label={text(locale,"Client login — opens in a new tab","客戶登入——在新分頁開啟","客户登录——在新标签页打开","دخول العملاء — يفتح في علامة تبويب جديدة")}>{text(locale, "Login", "客戶登入", "客户登录", "دخول العملاء")}<span aria-hidden="true">↗</span></a>
            {languageLinks}
          </div>
        </div>
        <div className="header-primary-row">
        <Link href={pathFor(locale)} onClick={closeNavigation} className="brand" aria-label={text(locale,"FIDERE TRUST — Home","FIDERE TRUST — 首頁","FIDERE TRUST — 首页","FIDERE TRUST — الصفحة الرئيسية")}><Image src="/brand/fidere-logo.png" width={600} height={125} priority alt="FIDERE TRUST — Trusted partner. Lasting value." /></Link>
        <nav ref={desktopNavigation} className="desktop-navigation" aria-label={text(locale, "Main navigation", "主導覽", "主导航")}>
          {navigation.map((item) => {
            const topic = topicMenus[item.slug];
            const label = copy(item);
            const expanded = activeTopic === item.slug;
            if (!topic) return <Link key={item.slug} href={pathFor(locale, item.slug)} onClick={closeNavigation} onPointerEnter={() => setActiveTopic(null)} aria-current={currentSlug === item.slug ? "page" : undefined}>{label}</Link>;
            return (
              <div key={item.slug} className="nav-topic" data-active={currentSlug === item.slug || currentSlug.startsWith(`${item.slug}/`) || undefined}
                onPointerEnter={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") enterTopic(item.slug); }}
                onPointerLeave={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") leaveTopic(item.slug, event.currentTarget); }}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) { setActiveTopic((active) => active === item.slug ? null : active); if (hoverTopic.current === item.slug) hoverTopic.current = null; } }}>
                <Link className="nav-topic-link" href={pathFor(locale, item.slug)} onClick={closeNavigation} aria-current={currentSlug === item.slug ? "page" : undefined}>{label}</Link>
                <button type="button" ref={(element) => { topicToggles.current[item.slug] = element; }} className="nav-topic-toggle" aria-label={topicToggleLabel(label, expanded)} aria-expanded={expanded} aria-controls={`topic-menu-${item.slug}`} onClick={() => toggleTopic(item.slug)} onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); focusTopicLink(item.slug, event.key === "ArrowUp"); }
                }}><span aria-hidden="true" /></button>
                <div id={`topic-menu-${item.slug}`} className="editorial-mega-menu" hidden={!expanded}>
                  <div className="editorial-mega-menu-inner">
                    <div className="mega-menu-intro">
                      <span className="mega-menu-eyebrow">{label}</span>
                      <p className="mega-menu-statement">{copy(topic.label)}</p>
                      <p className="mega-menu-description">{copy(topic.description)}</p>
                      <Link className="mega-menu-view-all" href={pathFor(locale, item.slug)} onClick={closeNavigation}>{text(locale, `View all ${label.toLowerCase()}`, `查看全部${label}`, `查看全部${label}`, `عرض جميع ${label}`)}<Arrow /></Link>
                    </div>
                    <div className={`mega-menu-topics mega-menu-topics-${topic.groups.length}`}>
                      {topic.groups.map((group, index) => <section className="mega-menu-topic-group" key={group.label.en} aria-labelledby={`topic-${item.slug}-group-${index}`}>
                        <h3 id={`topic-${item.slug}-group-${index}`}>{copy(group.label)}</h3>
                        <ul>{group.links.map((link) => <li key={link.slug}><Link href={pathFor(locale, `${item.slug}/${link.slug}`)} onClick={closeNavigation} aria-current={currentSlug === `${item.slug}/${link.slug}` ? "page" : undefined}>{copy(link)}</Link></li>)}</ul>
                      </section>)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
          <button type="button" ref={menuToggle} className="menu-toggle" aria-label={text(locale, "Open menu", "開啟選單", "打开菜单")} aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => { clearHoverClose(); setActiveTopic(null); setMobileOpen(true); }}><span /><span /></button>
        </div>
      </div>
    </header>
    <dialog id="mobile-menu" ref={dialog} className="mobile-menu" onCancel={(event) => {
      if (mobileTopic) { event.preventDefault(); setMobileTopic(null); mobileTopicToggles.current[mobileTopic]?.focus(); }
      else closeMenu();
    }} aria-label={text(locale, "Navigation menu", "導覽選單", "导航菜单")}>
      <div className="mobile-menu-header">
        <div className="mobile-menu-utility-row">{languageLinks}</div>
        <div className="mobile-menu-top"><Link href={pathFor(locale)} onClick={closeMenu} className="brand"><Image src="/brand/fidere-logo.png" width={600} height={125} alt="FIDERE TRUST" /></Link><button type="button" className="menu-close" onClick={closeMenu} aria-label={text(locale, "Close menu", "關閉選單", "关闭菜单")}>×</button></div>
      </div>
      <nav aria-label={text(locale, "Mobile navigation", "行動版導覽", "移动版导航")}>
        {navigation.map((item, index) => {
          const topic = topicMenus[item.slug];
          const label = copy(item);
          const expanded = mobileTopic === item.slug;
          if (!topic) return <Link key={item.slug} onClick={closeMenu} href={pathFor(locale, item.slug)} aria-current={currentSlug === item.slug ? "page" : undefined}><span className="section-index">0{index + 1}</span><span>{label}</span><Arrow /></Link>;
          return <div className="mobile-topic" key={item.slug}>
            <div className="mobile-topic-row">
              <Link onClick={closeMenu} href={pathFor(locale, item.slug)} aria-current={currentSlug === item.slug ? "page" : undefined}><span className="section-index">0{index + 1}</span><span>{label}</span></Link>
              <button type="button" ref={(element) => { mobileTopicToggles.current[item.slug] = element; }} className="mobile-topic-toggle" aria-label={topicToggleLabel(label, expanded)} aria-expanded={expanded} aria-controls={`mobile-topic-${item.slug}`} onClick={() => setMobileTopic(expanded ? null : item.slug)}><span aria-hidden="true">{expanded ? "−" : "+"}</span></button>
            </div>
            <div id={`mobile-topic-${item.slug}`} className="mobile-topic-links" hidden={!expanded}>
              <p className="mobile-topic-description">{copy(topic.description)}</p>
              <Link className="mobile-topic-view-all" href={pathFor(locale, item.slug)} onClick={closeMenu}>{text(locale, `View all ${label.toLowerCase()}`, `查看全部${label}`, `查看全部${label}`, `عرض جميع ${label}`)}<Arrow /></Link>
              {topic.groups.map((group, groupIndex) => <section key={group.label.en} className="mobile-topic-group" aria-labelledby={`mobile-topic-${item.slug}-group-${groupIndex}`}>
                <h3 id={`mobile-topic-${item.slug}-group-${groupIndex}`}>{copy(group.label)}</h3>
                {group.links.map((link) => <Link key={link.slug} href={pathFor(locale, `${item.slug}/${link.slug}`)} onClick={closeMenu} aria-current={currentSlug === `${item.slug}/${link.slug}` ? "page" : undefined}>{copy(link)}</Link>)}
              </section>)}
            </div>
          </div>;
        })}
      </nav>
      <div className="mobile-menu-bottom">{languageLinks}<a href={company.portal} target="_blank" rel="noopener noreferrer" onClick={closeMenu} aria-label={text(locale,"Client login — opens in a new tab","客戶登入——在新分頁開啟","客户登录——在新标签页打开","دخول العملاء — يفتح في علامة تبويب جديدة")}>{text(locale, "Client access", "客戶登入", "客户登录", "دخول العملاء")} ↗</a><span>{locale==="ar"?"هونغ كونغ":"HONG KONG"}</span></div>
    </dialog>
  </>;
}
