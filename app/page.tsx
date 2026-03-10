import { HeroScroll } from "@/components/hero/HeroScroll";
import { CoreCapabilitiesSection } from "@/components/sections/CoreCapabilitiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { DataGapSection } from "@/components/sections/DataGapSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { CustomizationLayersSection } from "@/components/sections/CustomizationLayersSection";
import { ProprietaryMethodologySection } from "@/components/sections/ProprietaryMethodologySection";
import { TechnicalIntegrationSection } from "@/components/sections/TechnicalIntegrationSection";
import { TrustEcosystemSection } from "@/components/sections/TrustEcosystemSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <HeroScroll />
      <TrustEcosystemSection />
      <CertificationsSection />
      <DataGapSection />
      <CoreCapabilitiesSection />
      <CustomizationLayersSection />
      <ProprietaryMethodologySection />
      <TechnicalIntegrationSection />
      <AboutSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
