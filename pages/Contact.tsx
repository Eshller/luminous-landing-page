import React from "react";
import { ContactSection } from "@/components/ui/contact";
import { FAQ } from "@/components/ui/faq-section";
import PillNav from "@/components/PillNav";
import { ThemeProvider } from "@/components/theme-provider";
import Grainient from "@/components/Grainient";

const ContactPage: React.FC = () => {
  const handleFormSubmit = (data: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    company: string;
  }) => {
    console.log("Contact form submitted:", data);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-white">
        <PillNav
          logo="/adzzat.png"
          logoAlt="Adzzat"
          items={navItems}
          baseColor="#0f172a"
          pillColor="transparent"
          hoverPillColor="rgba(15, 23, 42, 0.1)"
          hoveredPillTextColor="#0f172a"
          pillTextColor="#040b23ff"
        />
        <ContactSection
          title="Let's build your data advantage together"
          mainMessage="Contact our team"
          contactEmail="hello@adzzat.com"
          socialLinks={[
            {
              id: "1",
              name: "LinkedIn",
              iconSrc:
                "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg",
              href: "https://linkedin.com",
            },
            {
              id: "2",
              name: "X",
              iconSrc:
                "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg",
              href: "https://x.com",
            },
            {
              id: "3",
              name: "Instagram",
              iconSrc:
                "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg",
              href: "https://instagram.com",
            },
          ]}
          onSubmit={handleFormSubmit}
        />

        {/* FAQ Section */}
        <div className="relative z-20 bg-white overflow-hidden pb-0">
          {/* Grainient Background */}
          <div className="absolute inset-0 w-full h-full z-0 bg-white">
            <Grainient
              color1="#c0bfbc"
              color2="#deddda"
              color3="#c0bfbc"
              timeSpeed={0.3}
              colorBalance={0.49}
              warpStrength={3.75}
              warpFrequency={0}
              warpSpeed={2}
              warpAmplitude={50}
              blendAngle={0}
              blendSoftness={0.05}
              rotationAmount={500}
              noiseScale={3.3}
              grainAmount={0.1}
              grainScale={2}
              grainAnimated={false}
              contrast={1.5}
              gamma={1}
              saturation={1}
              centerX={0}
              centerY={0}
              zoom={0.75}
            />
          </div>
          <div className="relative z-10">
            <FAQ
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Have questions? We have answers. Browse our most common inquiries below."
              ctaText="Any questions? Reach out"
              onCtaClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              faqs={[
                {
                  question: "What types of AI projects does Adzzat support?",
                  answer:
                    "We support AI companies and frontier labs across RLHF, supervised fine-tuning, coding benchmarks, RAG training and evaluation, multi-modal annotation, advanced reasoning tasks, domain-specific validation, and custom AI workflows. If your model requires structured human intelligence, we can architect and execute it.",
                },
                {
                  question: "How is Adzzat different from traditional annotation platforms?",
                  answer:
                    "Adzzat does not operate as a crowdsourcing marketplace. We deploy a curated elite network of IIT graduates, PhDs, engineers, and domain specialists within managed workflows. Every engagement is structured, quality-controlled, and calibrated for signal, not volume.",
                },
                {
                  question: "How are contributors vetted?",
                  answer:
                    "All contributors undergo domain expertise screening, analytical reasoning assessment, technical validation, and structured onboarding before being deployed to live projects. We focus on depth and quality, not just numbers.",
                },
                {
                  question: "Do you offer fully managed execution?",
                  answer:
                    "Yes. Adzzat acts as an end-to-end execution partner. We design the evaluation architecture, deploy contributors, implement quality control frameworks, and manage performance calibration throughout the engagement.",
                },
                {
                  question: "Can you scale quickly?",
                  answer:
                    "Yes. Our infrastructure is built to support high-growth AI companies and frontier labs. We can rapidly expand contributor pools without compromising quality or workflow integrity.",
                },
                {
                  question: "Do you support domain-specific use cases?",
                  answer:
                    "Yes. We provide subject matter experts across finance, healthcare, legal, STEM, multilingual systems, coding, and other specialized domains where contextual depth is critical.",
                },
                {
                  question: "What security and compliance standards do you follow?",
                  answer:
                    "Adzzat aligns with enterprise security standards including SOC 2 Type II, ISO 27001, GDPR, and HIPAA frameworks to ensure data integrity and confidentiality.",
                },
                {
                  question: "Do you provide off-the-shelf datasets?",
                  answer:
                    "Yes, we will offer curated, high-signal evaluation datasets for teams seeking faster integration. However, our core focus remains managed, custom evaluation and AI workflow execution.",
                },
                {
                  question: "How do we get started?",
                  answer:
                    "Connect with our team to discuss your model goals and operational needs. From there, we design a structured engagement tailored to your scale and complexity.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContactPage;
