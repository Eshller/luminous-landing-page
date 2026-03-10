"use client";

export function CustomizationLayersSection() {
  const layers = [
    {
      label: "Layer 01",
      title: "Inputs",
      items: ["Raw unstructured data", "User prompts", "System logs", "API parameters"],
    },
    {
      label: "Layer 02",
      title: "Domains",
      items: [
        "Healthcare & pharma",
        "Financial services",
        "Legal documents",
        "Retail & e‑commerce",
      ],
    },
    {
      label: "Layer 03",
      title: "Expertise",
      items: ["Fine‑tuning", "Prompt engineering", "RLHF training", "Knowledge graphs"],
    },
    {
      label: "Layer 04",
      title: "Use cases",
      items: [
        "Conversational agents",
        "Predictive analytics",
        "Content generation",
        "Code synthesis",
      ],
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#050814] px-6 py-24 md:px-14 md:py-32"
      aria-labelledby="layers-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
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
        04
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="max-w-3xl">
          <p
            className="mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.35em] text-(--brand)"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Customization layers
          </p>
          <h2
            id="layers-heading"
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Configure your AI stack layer by layer.
          </h2>
          <p
            className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 md:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            From raw inputs to specialized domain expertise, control every aspect of your
            model&apos;s behavior with precision. Each layer can be composed independently
            or deployed as an end‑to‑end stack.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer) => (
            <article
              key={layer.title}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/2 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p
                    className="text-[0.6875rem] font-semibold uppercase tracking-[0.23em] text-white/55"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {layer.label}
                  </p>
                  <h3
                    className="mt-1 text-base font-semibold tracking-tight text-white md:text-lg"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {layer.title}
                  </h3>
                </div>
                <div className="rounded-full bg-white/5 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-white/60">
                  Flow step
                </div>
              </div>
              <ul className="mt-1 space-y-1.5 text-[0.82rem] leading-relaxed text-white/80 md:text-sm">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-(--brand)" />
                    <span style={{ fontFamily: "var(--font-inter)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

