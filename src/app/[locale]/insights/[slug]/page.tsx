import { notFound } from "next/navigation";
import { InsightArticlePage } from "@/components/insights-pages";
import { insightArticles } from "@/lib/insights";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, text } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!isLocale(locale) || !article) notFound();
  return pageMetadata(locale, `insights/${slug}`, text(locale, ...article.title), text(locale, ...article.description));
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !insightArticles.some((article) => article.slug === slug)) notFound();
  return <InsightArticlePage locale={locale} slug={slug} />;
}
