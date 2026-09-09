import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="succession-planning")!;
export const metadata=pageMetadata("en","solutions/succession-planning",solution.title[0],solution.description[0]);
export default function Page(){return <SolutionDetail locale="en" slug="succession-planning"/>;}
