import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionEnhancements } from "@/components/motion";
import { company,isLocale,localeSeo,locales,text } from "@/lib/site";
import "../globals.css";
import "../reference-system.css";
import "../white-system.css";
import "../rtl.css";

const editorial=localFont({src:"../../fonts/reference-editorial.woff2",weight:"300 700",style:"normal",variable:"--font-editorial",display:"swap"});
const body=localFont({src:"../../fonts/reference-body.woff2",weight:"300 700",style:"normal",variable:"--font-body",display:"swap"});
const arabicEditorial=localFont({src:"../../fonts/arabic-editorial.woff2",weight:"400 700",style:"normal",variable:"--font-arabic-editorial",display:"swap",preload:false});
const arabicBody=localFont({src:"../../fonts/arabic-body.woff2",weight:"100 900",style:"normal",variable:"--font-arabic-body",display:"swap",preload:false});
export const metadata:Metadata={metadataBase:new URL(company.website),applicationName:company.brand,title:{default:"FIDERE TRUST | Hong Kong",template:"FIDERE TRUST | %s"},creator:company.name,publisher:company.name,referrer:"strict-origin-when-cross-origin",manifest:"/site.webmanifest",icons:{icon:[{url:"/fidere-mark-96.png",type:"image/png",sizes:"96x96"},{url:"/fidere-mark.ico",sizes:"any"},{url:"/favicon-32x32.png",type:"image/png",sizes:"32x32"},{url:"/favicon-16x16.png",type:"image/png",sizes:"16x16"}],shortcut:[{url:"/fidere-mark.ico"}],apple:[{url:"/apple-touch-icon.png",type:"image/png",sizes:"180x180"}]}};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#091f30"};
export function generateStaticParams(){return locales.filter(locale=>locale!=="en").map(locale=>({locale}));}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}) {
 const {locale}=await params;if(!isLocale(locale))notFound();
 return <html lang={localeSeo[locale].htmlLang} dir={locale==="ar"?"rtl":"ltr"} className={`${editorial.variable} ${body.variable}${locale==="ar"?` ${arabicEditorial.variable} ${arabicBody.variable}`:""}`}><body id="top"><a className="skip-link" href="#main-content">{text(locale,"Skip to content","跳至主要內容","跳至主要内容")}</a><Header locale={locale}/><main id="main-content">{children}</main><Footer locale={locale}/><MotionEnhancements/></body></html>;
}
