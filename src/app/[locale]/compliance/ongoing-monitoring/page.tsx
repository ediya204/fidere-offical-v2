import { notFound } from "next/navigation";
import { ComplianceTopic } from "@/components/compliance-topics";
import { pageMetadata } from "@/lib/metadata";
import { complianceTopics } from "@/lib/compliance-topics";
import { isLocale, text } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };
const topic = complianceTopics.find((item) => item.slug === "ongoing-monitoring")!;

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, "compliance/ongoing-monitoring", text(locale, ...topic.title), text(locale, ...topic.description));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ComplianceTopic locale={locale} slug="ongoing-monitoring" />;
}
