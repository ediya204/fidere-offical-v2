import { ComplianceTopic } from "@/components/compliance-topics";
import { pageMetadata } from "@/lib/metadata";
import { complianceTopics } from "@/lib/compliance-topics";

const topic = complianceTopics.find((item) => item.slug === "aml-ctf")!;
export const metadata = pageMetadata("en", "compliance/aml-ctf", topic.title[0], topic.description[0]);

export default function Page() {
  return <ComplianceTopic locale="en" slug="aml-ctf" />;
}
