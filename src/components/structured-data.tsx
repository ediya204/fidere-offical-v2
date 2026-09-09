import { pageSeoCopy } from "@/lib/metadata";
import { company, localeSeo, locales, pathFor, type Locale } from "@/lib/site";

export function HomeStructuredData({ locale }: { locale: Locale }) {
  if (locale !== "en") return null;

  const pageUrl = company.website + pathFor(locale);
  const { brandedTitle, description } = pageSeoCopy(locale);
  const organizationId = `${company.website}/#organization`;
  const websiteId = `${company.website}/#website`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: company.brand,
        legalName: company.name,
        alternateName: "FIDERE",
        url: company.website,
        email: company.email,
        telephone: company.phone,
        logo: {
          "@type": "ImageObject",
          url: `${company.website}/apple-touch-icon.png`,
          width: 180,
          height: 180,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          addressCountry: "HK",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: company.website,
        name: company.brand,
        alternateName: "FIDERE",
        publisher: { "@id": organizationId },
        inLanguage: locales.map((item) => localeSeo[item].htmlLang),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: brandedTitle,
        description,
        inLanguage: localeSeo[locale].htmlLang,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
