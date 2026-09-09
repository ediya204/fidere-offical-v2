import { AboutTopic } from "@/components/about-topics";
import { pageMetadata } from "@/lib/metadata";
import { aboutTopics } from "@/lib/about-topics";

const topic = aboutTopics.find((item) => item.slug === "our-approach")!;
export const metadata = pageMetadata("en", "about/our-approach", topic.title[0], topic.description[0]);

export default function Page() {
  return <AboutTopic locale="en" slug="our-approach" />;
}
