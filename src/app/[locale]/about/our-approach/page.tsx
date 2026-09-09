import { notFound } from "next/navigation";
import { AboutTopic } from "@/components/about-topics";
import { pageMetadata } from "@/lib/metadata";
import { aboutTopics } from "@/lib/about-topics";
import { isLocale, text } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };
const topic = aboutTopics.find((item) => item.slug === "our-approach")!;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, "about/our-approach", text(locale, ...topic.title), text(locale, ...topic.description));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AboutTopic locale={locale} slug="our-approach" />;
}
