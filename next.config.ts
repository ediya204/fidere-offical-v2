import type { NextConfig } from "next";

const cloudflareStaticExport = process.env.CF_STATIC_EXPORT === "1";

const config: NextConfig = {
  ...(cloudflareStaticExport ? { output: "export" as const } : {}),
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
    unoptimized: cloudflareStaticExport,
  },
  ...(!cloudflareStaticExport
    ? {
        async redirects() {
          return [
            { source: "/en", destination: "/", permanent: true },
            { source: "/personal-trust", destination: "/solutions/private-trust", permanent: true },
            { source: "/family-office", destination: "/solutions/family-office", permanent: true },
            { source: "/corporate-clients", destination: "/solutions/corporate-trust", permanent: true },
            { source: "/en/personal-trust", destination: "/solutions/private-trust", permanent: true },
            { source: "/en/family-office", destination: "/solutions/family-office", permanent: true },
            { source: "/en/corporate-clients", destination: "/solutions/corporate-trust", permanent: true },
            { source: "/zh-hans", destination: "/zh-hant", permanent: false },
            { source: "/zh-hans/:path+", destination: "/zh-hant/:path+", permanent: false },
            { source: "/services", destination: "/solutions", permanent: true },
            { source: "/asset-management", destination: "/wealth-management", permanent: true },
            {
              source: "/solutions/equity-custody",
              destination: "/solutions/equity-asset-custody",
              permanent: true,
            },
            ...["zh-hant", "ar"].map((locale) => ({
              source: `/${locale}/solutions/equity-custody`,
              destination: `/${locale}/solutions/equity-asset-custody`,
              permanent: true,
            })),
            { source: "/en/:path+", destination: "/:path+", permanent: true },
          ];
        },
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
                },
              ],
            },
          ];
        },
      }
    : {}),
};

export default config;
