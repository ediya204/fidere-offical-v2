import { notFound } from "next/navigation";
import { InsightArticlePage } from "@/components/insights-pages";
import { insightArticles } from "@/lib/insights";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return pageMetadata("en", `insights/${slug}`, article.title[0], article.description[0]);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!insightArticles.some((article) => article.slug === slug)) notFound();
  return <InsightArticlePage locale="en" slug={slug} />;
}
