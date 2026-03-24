const CERTIFICATIONS = [
  {
    badge: "Audited",
    title: "SOC 2 Type II",
    description:
      "Rigorous independent auditing of our security, availability, and processing integrity controls.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden
      >
        <path d="M12 3 6 5.5V11c0 4.1 2.5 7.8 6 9 3.5-1.2 6-4.9 6-9V5.5L12 3Z" />
        <path d="m9.5 11.8 1.7 1.7 3.6-3.7" />
      </svg>
    ),
  },
  {
    badge: "Certified",
    title: "ISO 27001",
    description:
      "Information security management designed to meet global expectations for risk controls and operational discipline.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a12.5 12.5 0 0 1 0 16" />
        <path d="M12 4a12.5 12.5 0 0 0 0 16" />
      </svg>
    ),
  },
  {
    badge: "Compliant",
    title: "GDPR",
    description:
      "Strict adherence to European Union data protection and privacy expectations for handling user and project data.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden
      >
        <rect x="7" y="11" width="10" height="8" rx="2" />
        <path d="M9 11V8a3 3 0 1 1 6 0v3" />
      </svg>
    ),
  },
  {
    badge: "Certified",
    title: "HIPAA",
    description:
      "Operational safeguards for protected health information workflows where healthcare privacy and confidentiality matter.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden
      >
        <rect x="5" y="6" width="14" height="14" rx="2" />
        <path d="M12 9v8" />
        <path d="M8 13h8" />
      </svg>
    ),
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050814] px-6 py-24 md:px-14 md:py-32"
      aria-labelledby="certifications-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(59, 79, 128, 0.18) 0%, transparent 55%), radial-gradient(ellipse 55% 40% at 12% 85%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-6 top-[clamp(6rem,18vw,10rem)] select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none tracking-tighter text-white md:right-14"
        style={{
          fontFamily: "var(--font-geist-sans)",
          opacity: 0.035,
          WebkitTextStroke: "1px rgba(255,255,255,0.08)",
        }}
        aria-hidden
      >
        06
      </div>

      <div
        className="absolute left-1/2 top-[clamp(4rem,10vw,5rem)] h-px w-full max-w-[min(88vw,56rem)] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--brand) 20%, var(--brand) 80%, transparent 100%)",
          opacity: 0.55,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.35em] text-(--brand)"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Enterprise certifications
          </p>
          <h2
            id="certifications-heading"
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Compliance infrastructure built into delivery.
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Transparency engineered into every engagement, with controls designed
            for enterprise procurement, privacy expectations, and sensitive model
            development workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CERTIFICATIONS.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/3 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 40%), radial-gradient(circle at top right, rgba(59,79,128,0.22) 0%, transparent 45%)",
                }}
                aria-hidden
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-[0.22em] text-white/55"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.badge}
                  </span>
                  <div className="text-(--brand)">{item.icon}</div>
                </div>

                <h3
                  className="mt-10 text-xl font-semibold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed text-white/70"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

