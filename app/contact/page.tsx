"use client";

import Link from "next/link";
import { useState } from "react";

const SERVICE_TYPES = [
  "Model Training",
  "Alignment & RLHF",
  "Evaluation & Benchmarking",
  "Domain-Specific Expertise",
  "Custom AI Engagement",
  "Other",
] as const;

const FAQS = [
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
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  company: string;
  serviceType: string;
  consent: boolean;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  company: "",
  serviceType: "",
  consent: false,
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          company: formData.company,
          serviceType: formData.serviceType,
          consent: formData.consent,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit");
      setSubmitStatus("success");
      setFormData(initialForm);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-[var(--brand)] focus:outline-none focus:ring-1 focus:ring-[var(--brand)] transition-colors";
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5";

  return (
    <main className="min-h-screen w-full bg-black">
      {/* Top bar: back to home */}
      <div className="border-b border-white/10 px-6 py-4 md:px-14">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            ← Back to home
          </Link>
          <span
            className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[var(--brand)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contact
          </span>
        </div>
      </div>

      {/* Hero + form section */}
      <section className="relative px-6 py-16 md:px-14 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-white"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Let&apos;s build your data advantage together
          </h1>
          <p
            className="mt-3 max-w-xl text-white/70"
            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.9375rem,1.25vw,1.0625rem)" }}
          >
            Contact our team at{" "}
            <a href="mailto:hello@adzzat.com" className="text-[var(--brand)] underline underline-offset-2 hover:opacity-90">
              hello@adzzat.com
            </a>{" "}
            or fill out the form below and we&apos;ll get back to you shortly.
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-xl md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="mobile" className={labelClass}>Mobile</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <span className={labelClass}>Engagement type</span>
                <div className="mt-2 flex flex-wrap gap-4">
                  {SERVICE_TYPES.map((value) => (
                    <label key={value} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="serviceType"
                        value={value}
                        checked={formData.serviceType === value}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 border-white/30 bg-white/5 text-[var(--brand)] focus:ring-[var(--brand)]"
                      />
                      <span className="text-sm text-white/80" style={{ fontFamily: "var(--font-inter)" }}>{value}</span>
                    </label>
                  ))}
                </div>
              </div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                  required
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-white/5 text-[var(--brand)] focus:ring-[var(--brand)]"
                />
                <span className="text-xs leading-relaxed text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                  I consent to Adzzat collecting and using my personal data to respond to my inquiry, in accordance with the Privacy Policy.
                </span>
              </label>
              {submitStatus === "success" && (
                <div className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-300">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Something went wrong. Please try again.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl border-2 border-[var(--brand)] bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-[0_0_32px_rgba(30,40,72,0.5)] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {isSubmitting ? "Submitting…" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-2 text-[0.6875rem] font-medium uppercase tracking-[0.35em] text-[var(--brand)]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            FAQ
          </p>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-tight text-white"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-xl text-white/70" style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}>
            Have questions? We have answers. Browse our most common inquiries below.
          </p>
          <div className="mt-10 space-y-2">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-white transition-colors hover:bg-white/5"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {faq.question}
                  <span className="shrink-0 pl-2 text-white/50">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div
                    className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/75"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
            Any other questions?{" "}
            <a href="mailto:hello@adzzat.com" className="text-[var(--brand)] underline underline-offset-2 hover:opacity-90">
              Reach out
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
