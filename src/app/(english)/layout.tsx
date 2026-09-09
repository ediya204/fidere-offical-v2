import LocaleLayout, { metadata, viewport } from "../[locale]/layout";
export { metadata, viewport };
export default function EnglishLayout({children}:{children:React.ReactNode}) {
 return <LocaleLayout params={Promise.resolve({locale:"en"})}>{children}</LocaleLayout>;
}
