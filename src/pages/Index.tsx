import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ExpertiseSection } from "@/components/landing/ExpertiseSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CollegeLogosSection } from "@/components/landing/CollegeLogosSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <HeroSection />
      <FeaturesSection />
      <ExpertiseSection />
      <HowItWorksSection />
      <MetricsSection />
      <BenefitsSection />
      <CollegeLogosSection />
      <FAQSection onContactClick={() => setIsContactModalOpen(true)} />
      <ContactSection />
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
};

export default Index;
