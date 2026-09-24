import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { MvpAiSection } from "@/components/mvp/MvpAiSection";
import { MvpCallSteps } from "@/components/mvp/MvpCallSteps";
import { MvpClarity } from "@/components/mvp/MvpClarity";
import { MvpDifferentiation } from "@/components/mvp/MvpDifferentiation";
import { MvpExperience } from "@/components/mvp/MvpExperience";
import { MvpFaq } from "@/components/mvp/MvpFaq";
import { MvpFinalCta } from "@/components/mvp/MvpFinalCta";
import { MvpFit } from "@/components/mvp/MvpFit";
import { MvpHero } from "@/components/mvp/MvpHero";
import { MvpOffer } from "@/components/mvp/MvpOffer";
import { MvpPreCta } from "@/components/mvp/MvpPreCta";
import { MvpProblem } from "@/components/mvp/MvpProblem";
import { MvpProof } from "@/components/mvp/MvpProof";
import { mvpFaq } from "@/content/mvp";
import { siteConfig } from "@/content/site";

const seoTitle = "Build Your SaaS or AI MVP | Ishraq Qureshi";
const seoDescription =
  "Turn your validated SaaS or AI idea into a working MVP without hiring a full-time engineering team. Get a free 15-minute MVP assessment.";
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

export default function MvpPage() {
  return (
    <main className="flex-1">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <MvpHero />
      <MvpClarity />
      <MvpProblem />
      <MvpOffer />
      <MvpPreCta />
      <MvpDifferentiation />
      <MvpProof />
      <MvpExperience />
      <MvpAiSection />
      <MvpFit />
      <MvpCallSteps />
      <MvpFaq />
      <MvpFinalCta />
    </main>
  );
}
