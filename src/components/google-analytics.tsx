"use client";

import Script from "next/script";
import { useEffect } from "react";

export const googleAnalyticsId = "G-DXNG1F7QFP";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

export function GoogleAnalytics() {
  useEffect(() => {
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer ??= [];
    analyticsWindow.gtag = (...args: unknown[]) => {
      analyticsWindow.dataLayer?.push(args);
    };
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", googleAnalyticsId);
  }, []);

  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />;
}
