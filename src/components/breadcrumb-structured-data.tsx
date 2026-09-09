import { company, pathFor, type Locale } from "@/lib/site";

export type BreadcrumbStructuredDataItem = {
  name: string;
  slug?: string;
};

export function BreadcrumbStructuredData({
  locale,
  items,
}: {
  locale: Locale;
  items: readonly BreadcrumbStructuredDataItem[];
}) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name.replace(/\s+/g, " ").trim(),
    item: `${company.website}${pathFor(locale, item.slug)}`,
  }));
  const currentUrl = itemListElement.at(-1)?.item;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(currentUrl ? { "@id": `${currentUrl}#breadcrumb` } : {}),
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
