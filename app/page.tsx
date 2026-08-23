import type { Metadata } from "next";
import { AboutSection } from "@/components/about/AboutSection";
import { CaseStudiesSection } from "@/components/case-studies/CaseStudiesSection";
import { Hero } from "@/components/hero/Hero";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AiNativeSection } from "@/components/sections/AiNativeSection";
import { AudienceStatement } from "@/components/sections/AudienceStatement";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  description: siteConfig.description,
  sameAs: [socialLinks.linkedin, socialLinks.github],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <Hero />
      <AudienceStatement />
      <ProblemSection />
      <ServicesSection />
      <AiNativeSection />
      <CaseStudiesSection />
      <ProcessSection />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}
