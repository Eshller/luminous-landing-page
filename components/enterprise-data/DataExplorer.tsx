"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const SOURCES = [
  {
    name: "Engineering & product",
    description: "The reasoning behind what gets built.",
    records: ["Design documents", "Issue histories", "Code reviews", "Product requirements"],
    title: "From a problem to a considered decision.",
    steps: [
      { label: "Context", text: "A team investigates a recurring performance issue." },
      { label: "Judgment", text: "Engineers compare approaches, constraints, and trade-offs." },
      { label: "Outcome", text: "A reviewed change records what worked and why." },
    ],
    signal: "Technical reasoning, debugging, and multi-step problem solving.",
  },
  {
    name: "Customer operations",
    description: "The context behind a good resolution.",
    records: ["Support tickets", "Escalation histories", "Resolution notes", "Knowledge articles"],
    title: "More than an answer. The path to it.",
    steps: [
      { label: "Context", text: "A customer describes an unfamiliar product issue." },
      { label: "Judgment", text: "A specialist gathers context and tests possible explanations." },
      { label: "Outcome", text: "The resolution captures the diagnosis and next steps." },
    ],
    signal: "Troubleshooting, contextual assistance, and escalation judgment.",
  },
  {
    name: "Business workflows",
    description: "How decisions become real outcomes.",
    records: ["Process documentation", "Planning records", "Operational reports", "Approval histories"],
    title: "The decisions between the steps.",
    steps: [
      { label: "Context", text: "An operations team encounters an exception to a routine process." },
      { label: "Judgment", text: "The team weighs dependencies, policies, and available options." },
      { label: "Outcome", text: "An approved action links the decision to its result." },
    ],
    signal: "Planning, exception handling, and real-world workflow understanding.",
  },
  {
    name: "Institutional knowledge",
    description: "The expertise your people build over time.",
    records: ["Internal wikis", "Runbooks", "Training materials", "Decision records"],
    title: "Experience that does not live on the open web.",
    steps: [
      { label: "Context", text: "A recurring question calls for specialized domain knowledge." },
      { label: "Judgment", text: "An expert documents the rationale, limits, and exceptions." },
      { label: "Outcome", text: "A maintained reference helps the next person make a better decision." },
    ],
    signal: "Domain understanding, grounded answers, and expert decision making.",
  },
] as const;

export function DataExplorer() {
  const [selected, setSelected] = useState(0);
  const source = SOURCES[selected];

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
      <div>
        <div role="group" aria-label="Explore data categories" className="border-t border-rule">
          {SOURCES.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={selected === index}
              aria-controls="data-example"
              onClick={() => setSelected(index)}
              className={cn(
                "group flex w-full items-start gap-4 border-b border-rule px-3 py-6 text-left transition-colors",
                selected === index ? "bg-paper-sunk" : "hover:bg-paper-alt",
              )}
            >
              <span className="pt-1 font-mono text-xs text-ink/60">0{index + 1}</span>
              <span className="flex-1">
                <span className="block font-serif text-[23px] leading-tight">{item.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink/65">{item.description}</span>
              </span>
              <span aria-hidden="true" className={cn("pt-1 text-lg", selected !== index && "opacity-30")}>
                &#8599;
              </span>
            </button>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-ink/65">
          Examples of potential sources. Suitability depends on ownership, permissions, and the
          intended use.
        </p>
      </div>

      <div id="data-example" aria-live="polite" aria-atomic="true" className="min-w-0 border border-rule bg-paper-alt p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">
          Illustrative record / {String(selected + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-5 max-w-[25ch] font-serif text-[29px] leading-[1.12]">{source.title}</h3>
        <ol className="my-7 border-t border-rule">
          {source.steps.map((step) => (
            <li key={step.label} className="grid grid-cols-[68px_1fr] gap-4 border-b border-rule py-4">
              <span className="pt-0.5 text-xs text-ink/65">{step.label}</span>
              <p className="text-sm leading-relaxed text-ink/80">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs font-medium text-accent">What a model can learn</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">{source.signal}</p>
        <ul aria-label="Example record types" className="mt-6 flex flex-wrap gap-2">
          {source.records.map((record) => (
            <li key={record} className="rounded-full border border-rule px-3 py-1.5 text-[11px] text-ink/70">{record}</li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] text-ink/60">Illustrative example, not customer data.</p>
      </div>
    </div>
  );
}
