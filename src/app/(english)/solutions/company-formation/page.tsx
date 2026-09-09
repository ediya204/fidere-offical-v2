import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="company-formation")!;
export const metadata=pageMetadata("en","solutions/company-formation",solution.title[0],solution.description[0]);
export default function Page(){return <SolutionDetail locale="en" slug="company-formation"/>;}
