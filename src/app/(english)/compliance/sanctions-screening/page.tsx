import { ComplianceTopic } from "@/components/compliance-topics";
import { pageMetadata } from "@/lib/metadata";
import { complianceTopics } from "@/lib/compliance-topics";

const topic = complianceTopics.find((item) => item.slug === "sanctions-screening")!;
export const metadata = pageMetadata("en", "compliance/sanctions-screening", topic.title[0], topic.description[0]);

export default function Page() {
  return <ComplianceTopic locale="en" slug="sanctions-screening" />;
}
