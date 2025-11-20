import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { CollegeLogosSection } from "@/components/landing/CollegeLogosSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CollegeLogosSection />
      <MetricsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
