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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai.klarve.com";

export default function Home() {
  return (
    <main id="top" className="min-h-screen w-full max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Klarve",
            url: SITE_URL,
          }),
        }}
      />
      <HeroScroll />
      <TrustEcosystemSection />
      <DataGapSection />
      <CoreCapabilitiesSection />
      <CustomizationLayersSection />
      <ProprietaryMethodologySection />
      <CertificationsSection />
      <TechnicalIntegrationSection />
      <AboutSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
