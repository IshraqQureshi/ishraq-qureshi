import type { Metadata } from "next";
import { headers } from "next/headers";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { PixelConsentProvider } from "@/components/analytics/PixelConsentProvider";
import { MvpAbout } from "@/components/mvp/MvpAbout";
import { MvpAiObjection } from "@/components/mvp/MvpAiObjection";
import { MvpCaseStudy } from "@/components/mvp/MvpCaseStudy";
import { EngagedViewTracker } from "@/components/mvp/EngagedViewTracker";
import { MvpFaq } from "@/components/mvp/MvpFaq";
import { MvpFinalCta } from "@/components/mvp/MvpFinalCta";
import { MvpFit } from "@/components/mvp/MvpFit";
import { MvpHero } from "@/components/mvp/MvpHero";
import { MvpHowItWorks } from "@/components/mvp/MvpHowItWorks";
import { MvpProblem } from "@/components/mvp/MvpProblem";
import { MvpStickyBar } from "@/components/mvp/MvpStickyBar";
import { MvpTestimonials } from "@/components/mvp/MvpTestimonials";
import { MvpWhatYouGet } from "@/components/mvp/MvpWhatYouGet";
import { isConsentRequiredCountry } from "@/lib/geo";
import { mvpFaq } from "@/content/mvp";
import { MVP_CONFIG } from "@/content/mvp-config";
import { siteConfig } from "@/content/site";

const seoTitle = "Build Your SaaS or AI MVP | Ishraq Qureshi";
const seoDescription = `Senior engineer who scopes, architects and builds SaaS & AI MVPs end-to-end. Typical MVP: ${MVP_CONFIG.priceMin}–${MVP_CONFIG.priceMax}, ${MVP_CONFIG.typicalTimeline}. Apply for a free 15-minute scoping call.`;
const canonicalPath = "/mvp";

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description: seoDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: `${siteConfig.url}${canonicalPath}`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "MVP Development",
  provider: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
  areaServed: "Worldwide",
  description: seoDescription,
  url: `${siteConfig.url}${canonicalPath}`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: mvpFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default async function MvpPage() {
  const headersList = await headers();
  const needsConsent = isConsentRequiredCountry(headersList.get("x-vercel-ip-country"));

  return (
    <PixelConsentProvider needsConsent={needsConsent}>
      <main className="flex-1">
        <JsonLd data={serviceSchema} />
        <JsonLd data={faqSchema} />
        <MetaPixel />
        <MvpHero />
        <MvpTestimonials />
        <MvpFit />
        <MvpProblem />
        <MvpAiObjection />
        <MvpCaseStudy />
        <EngagedViewTracker />
        <MvpHowItWorks />
        <MvpWhatYouGet />
        <MvpAbout />
        <MvpFaq />
        <MvpFinalCta />
        <MvpStickyBar />
        <ConsentBanner />
      </main>
    </PixelConsentProvider>
  );
}
