"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/site/Button";
import { DATA_SOURCES, estimateDataValue, SCENARIO_RATES } from "@/lib/data-estimator";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function DataEstimator() {
  const [employees, setEmployees] = useState(100);
  const [years, setYears] = useState(10);
  const [sources, setSources] = useState<readonly string[]>([...DATA_SOURCES]);
  const estimate = estimateDataValue(employees, years, sources.length);

  return (
    <div className="mt-12 grid overflow-hidden rounded-[var(--radius-figure)] border border-rule-strong lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-9 bg-paper px-6 py-9 sm:p-10">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="data-employees" className="text-sm font-medium">Number of employees</label>
            <span className="font-serif text-3xl tabular-nums">{employees}</span>
          </div>
          <input id="data-employees" type="range" min="20" max="300" step="1" value={employees} onChange={(event) => setEmployees(Number(event.target.value))} className="mt-4 h-8 w-full cursor-pointer accent-accent" />
          <div aria-hidden="true" className="flex justify-between text-xs text-ink/60"><span>20</span><span>300</span></div>
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor="data-years" className="text-sm font-medium">Years of usable records</label>
            <span className="font-serif text-3xl tabular-nums">{years}</span>
          </div>
          <input id="data-years" type="range" min="1" max="20" step="1" value={years} onChange={(event) => setYears(Number(event.target.value))} className="mt-4 h-8 w-full cursor-pointer accent-accent" />
          <div aria-hidden="true" className="flex justify-between text-xs text-ink/60"><span>1 year</span><span>20 years</span></div>
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Potential data sources</legend>
          <p className="mt-2 text-xs leading-relaxed text-ink/60">Select the categories your company may have rights to license.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {DATA_SOURCES.map((source) => (
              <label key={source} className="flex min-h-12 cursor-pointer items-center gap-3 border border-rule px-3 py-3 text-xs has-checked:border-accent has-checked:bg-accent/5">
                <input type="checkbox" checked={sources.includes(source)} onChange={(event) => setSources(event.target.checked ? [...sources, source] : sources.filter((item) => item !== source))} className="size-4 shrink-0 accent-accent" />
                {source}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col justify-center border-t border-rule-strong bg-paper-alt px-6 py-9 sm:p-10 lg:border-t-0 lg:border-l">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">Illustrative licensing value</p>
        <output aria-live="polite" aria-atomic="true" aria-label="Illustrative value range in US dollars" className="mt-7 block font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.1] tracking-[-0.03em] tabular-nums">
          {money.format(estimate.low)}<span className="mx-2 text-ink/40">–</span><wbr />{money.format(estimate.high)}
        </output>
        <p className="mt-4 text-xs text-ink/60">USD · one hypothetical licensing package</p>
        <p className="mt-6 text-sm leading-[1.75] text-ink/70">
          {sources.length === 0 ? "Select at least one source to explore a scenario." : "An illustration of potential scale, not an offer or a prediction. Actual payment depends on the records, rights, quality, buyer demand, and agreed terms."}
        </p>
        <details className="mt-6 border-y border-rule py-4 text-xs leading-[1.7] text-ink/70">
          <summary className="cursor-pointer font-medium text-ink">How this illustration is calculated</summary>
          <p className="mt-3">Employees × years of usable records × selected source categories ÷ 4 × an assumed {money.format(SCENARIO_RATES.low)}–{money.format(SCENARIO_RATES.high)} per employee-year. Categories have equal weight in this simplified model.</p>
          <p className="mt-2">These are demonstration assumptions, not observed market rates or Adzzat pricing. The range is for a single package, not annual recurring revenue. A real assessment may fall outside it, including no eligible value.</p>
        </details>
        <div className="mt-7"><ButtonLink href="/get-started">Discuss your data <span aria-hidden="true">&#8599;</span></ButtonLink></div>
        <p className="mt-4 text-[11px] text-ink/60">Calculated in your browser. No records or contact details required.</p>
      </div>
    </div>
  );
}
