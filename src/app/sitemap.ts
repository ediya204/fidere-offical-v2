import type { MetadataRoute } from "next";
import { company, localeSeo, locales, navigation, legalNavigation, pathFor } from "@/lib/site";
import { aboutTopics } from "@/lib/about-topics";
import { complianceTopics } from "@/lib/compliance-topics";
import { insightArticles } from "@/lib/insights";
import { solutionDetails } from "@/lib/solutions";
import { wealthTopics } from "@/lib/wealth-topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...new Set([
    "",
    ...navigation.map((item) => item.slug),
    ...legalNavigation.map((item) => item.slug),
    ...aboutTopics.map((topic) => `about/${topic.slug}`),
    ...solutionDetails.map((solution) => `solutions/${solution.slug}`),
    ...wealthTopics.map((topic) => `wealth-management/${topic.slug}`),
    ...complianceTopics.map((topic) => `compliance/${topic.slug}`),
    ...insightArticles.map((article) => `insights/${article.slug}`),
  ])].filter((path) => path !== "login");

  return locales.flatMap((locale) => paths.map((path) => ({
    url: company.website + pathFor(locale, path),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.includes("/") ? 0.6 : 0.8,
    alternates: {
      languages: Object.fromEntries([
        ...locales.map((language) => [
          localeSeo[language].hrefLang,
          company.website + pathFor(language, path),
        ]),
        ["x-default", company.website + pathFor("en", path)],
      ]),
    },
  })));
}
export const dynamic = "force-static";
