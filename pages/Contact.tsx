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
          contactEmail="hello@adzaat.com"
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
                  question: "What services does Adzzat offer?",
                  answer:
                    "Adzzat provides a comprehensive data marketplace platform, helping businesses unlock their data advantage with scalable, customizable solutions.",
                },
                {
                  question: "How do I get started?",
                  answer:
                    "Simply reach out via the contact form above or email us at hello@adzaat.com. Our team will guide you through onboarding and setup.",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Absolutely. Security is our top priority. We use industry-standard encryption and compliance measures to keep your data safe.",
                },
                {
                  question: "Can I customize the platform to my needs?",
                  answer:
                    "Yes — Adzzat is fully customizable. You can tailor dashboards, integrations, and workflows to fit your specific business requirements.",
                },
                {
                  question: "What kind of support do you provide?",
                  answer:
                    "We offer dedicated support via email, live chat, and scheduled calls. Our team is here to help you every step of the way.",
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
