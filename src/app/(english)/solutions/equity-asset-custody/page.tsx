import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="equity-asset-custody")!;
export const metadata=pageMetadata("en","solutions/equity-asset-custody",solution.title[0],solution.description[0]);
export default function Page(){return <SolutionDetail locale="en" slug="equity-asset-custody"/>;}
