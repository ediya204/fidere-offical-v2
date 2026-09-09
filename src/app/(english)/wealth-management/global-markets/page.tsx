import { WealthTopicPage } from "@/components/wealth-topics";
import { pageMetadata } from "@/lib/metadata";
import { wealthTopics } from "@/lib/wealth-topics";

const topic = wealthTopics.find((item) => item.slug === "global-markets")!;
export const metadata = pageMetadata("en", "wealth-management/global-markets", topic.title[0], topic.description[0]);

export default function Page() {
  return <WealthTopicPage locale="en" slug="global-markets" />;
}
