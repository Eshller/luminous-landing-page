import { HeroScroll } from "@/components/hero/HeroScroll";
import { CoreCapabilitiesSection } from "@/components/sections/CoreCapabilitiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DataGapSection } from "@/components/sections/DataGapSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ProprietaryMethodologySection } from "@/components/sections/ProprietaryMethodologySection";
import { TechnicalIntegrationSection } from "@/components/sections/TechnicalIntegrationSection";
import { TrustEcosystemSection } from "@/components/sections/TrustEcosystemSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <HeroScroll />
      <TrustEcosystemSection />
      <DataGapSection />
      <CoreCapabilitiesSection />
      <ProprietaryMethodologySection />
      <TechnicalIntegrationSection />
      <AboutSection />
      <FinalCtaSection />
    </main>
  );
}
