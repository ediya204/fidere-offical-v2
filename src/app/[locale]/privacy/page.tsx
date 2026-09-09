import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { isLocale } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale,"privacy");}
export default async function Page({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return <LegalPage locale={locale} slug="privacy"/>;}
