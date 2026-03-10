"use client";

import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

const FAQ_ITEMS = [
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
      "We will offer curated, high-signal evaluation datasets for teams seeking faster integration. However, our core focus remains managed, custom evaluation and AI workflow execution.",
  },
  {
    question: "How do we get started?",
    answer:
      "Connect with our team to discuss your model goals and operational needs. From there, we design a structured engagement tailored to your scale and complexity.",
  },
];

export default function ContactPage() {
  const handleFormSubmit = (data: unknown) => {
    console.log("Contact form submitted", data);
  };

  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      <ContactSection onSubmit={handleFormSubmit} />
      <FAQSection items={FAQ_ITEMS} />
    </main>
  );
}

