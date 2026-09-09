import { InsightsIndex } from "@/components/insights-pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "insights");

export default function Page() {
  return <InsightsIndex locale="en" />;
}
