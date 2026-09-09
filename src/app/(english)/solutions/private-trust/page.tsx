import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="private-trust")!;
export const metadata=pageMetadata("en","solutions/private-trust",solution.title[0],solution.description[0]);
export default function Page(){return <SolutionDetail locale="en" slug="private-trust"/>;}
