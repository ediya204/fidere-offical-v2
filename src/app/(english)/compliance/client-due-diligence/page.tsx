import { ComplianceTopic } from "@/components/compliance-topics";
import { pageMetadata } from "@/lib/metadata";
import { complianceTopics } from "@/lib/compliance-topics";

const topic = complianceTopics.find((item) => item.slug === "client-due-diligence")!;
export const metadata = pageMetadata("en", "compliance/client-due-diligence", topic.title[0], topic.description[0]);

export default function Page() {
  return <ComplianceTopic locale="en" slug="client-due-diligence" />;
}
