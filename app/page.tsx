import { AboutSection } from "@/components/about/AboutSection";
import { CaseStudiesSection } from "@/components/case-studies/CaseStudiesSection";
import { Hero } from "@/components/hero/Hero";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { AiNativeSection } from "@/components/sections/AiNativeSection";
import { AudienceStatement } from "@/components/sections/AudienceStatement";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function Home() {
  return (
    <main className="flex-1">
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
