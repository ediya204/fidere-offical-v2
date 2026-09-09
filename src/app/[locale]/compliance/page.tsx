import { notFound } from "next/navigation";
import { Compliance } from "@/components/inner-pages";
import { isLocale } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale,"compliance");}
export default async function Page({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return <Compliance locale={locale}/>;}
