import { SolutionDetail } from "@/components/solution-detail";
import { solutionDetails } from "@/lib/solutions";
import { pageMetadata } from "@/lib/metadata";
const solution=solutionDetails.find(item=>item.slug==="transaction-support")!;
export const metadata=pageMetadata("en","solutions/transaction-support",solution.title[0],solution.description[0]);
export default function Page(){return <SolutionDetail locale="en" slug="transaction-support"/>;}
