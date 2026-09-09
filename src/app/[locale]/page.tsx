import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { isLocale } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export async function generateMetadata({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale);}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();return <HomePage locale={locale}/>;}
