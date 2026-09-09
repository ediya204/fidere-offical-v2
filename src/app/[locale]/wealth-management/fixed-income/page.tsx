import { notFound } from "next/navigation";
import { WealthTopicPage } from "@/components/wealth-topics";
import { pageMetadata } from "@/lib/metadata";
import { wealthTopics } from "@/lib/wealth-topics";
import { isLocale, text } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };
const topic = wealthTopics.find((item) => item.slug === "fixed-income")!;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, "wealth-management/fixed-income", text(locale, ...topic.title), text(locale, ...topic.description));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <WealthTopicPage locale={locale} slug="fixed-income" />;
}
