import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="equity-asset-custody")!;
import { notFound } from "next/navigation";
import { isLocale,text } from "@/lib/site";
type Props={params:Promise<{locale:string}>};
export async function generateMetadata({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return pageMetadata(locale,"solutions/equity-asset-custody",text(locale,...solution.title),text(locale,...solution.description));}
export default async function Page({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();return <SolutionDetail locale={locale} slug="equity-asset-custody"/>;}
