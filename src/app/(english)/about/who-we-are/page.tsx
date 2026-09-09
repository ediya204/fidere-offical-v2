import { AboutTopic } from "@/components/about-topics";
import { pageMetadata } from "@/lib/metadata";
import { aboutTopics } from "@/lib/about-topics";

const topic = aboutTopics.find((item) => item.slug === "who-we-are")!;
export const metadata = pageMetadata("en", "about/who-we-are", topic.title[0], topic.description[0]);

export default function Page() {
  return <AboutTopic locale="en" slug="who-we-are" />;
}
