"use client";

import Script from "next/script";
import { MVP_CONFIG } from "@/content/mvp-config";
import { usePixelConsent } from "@/components/analytics/PixelConsentProvider";

export function MetaPixel() {
  const { consentGiven } = usePixelConsent();

  if (!MVP_CONFIG.metaPixelId || !consentGiven) return null;

  return (
    <Script id="meta-pixel-base" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${MVP_CONFIG.metaPixelId}');
        fbq('track', 'PageView', {}, { eventID: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : ('pv_' + Date.now()) });
      `}
    </Script>
  );
}
