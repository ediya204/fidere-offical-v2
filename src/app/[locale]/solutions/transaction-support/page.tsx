import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="transaction-support")!;
import { notFound } from "next/navigation";
import { isLocale,text } from "@/lib/site";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale,"solutions/transaction-support",text(locale,...solution.title),text(locale,...solution.description));}
export default async function Page({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return <SolutionDetail locale={locale} slug="transaction-support"/>;}
