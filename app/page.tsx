import { HeroScroll } from "@/components/hero/HeroScroll";
import { CoreCapabilitiesSection } from "@/components/sections/CoreCapabilitiesSection";
import { DataGapSection } from "@/components/sections/DataGapSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ProprietaryMethodologySection } from "@/components/sections/ProprietaryMethodologySection";
import { TechnicalIntegrationSection } from "@/components/sections/TechnicalIntegrationSection";
import { TrustEcosystemSection } from "@/components/sections/TrustEcosystemSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <HeroScroll />
      {/* Gradient bridge: soft transition from hero into trust section */}
      <div
        className="relative h-[min(28vh,320px)] w-full shrink-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 35%, #000 100%)",
        }}
        aria-hidden
      />
      <TrustEcosystemSection />
      <DataGapSection />
      <CoreCapabilitiesSection />
      <ProprietaryMethodologySection />
      <TechnicalIntegrationSection />
      <FinalCtaSection />
    </main>
  );
}
