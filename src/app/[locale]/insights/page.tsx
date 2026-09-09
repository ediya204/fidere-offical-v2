import { notFound } from "next/navigation";
import { InsightsIndex } from "@/components/insights-pages";
import { pageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, "insights");
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <InsightsIndex locale={locale} />;
}
