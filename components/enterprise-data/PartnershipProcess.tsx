const STEPS = [
  { title: "Agree the scope", text: "Identify useful records together. Confirm licensing rights, exclusions, permitted uses, and the commercial terms before moving forward." },
  { title: "Prepare the records", text: "Agree a preparation plan covering sensitive information, de-identification, formatting, and quality review for the proposed use." },
  { title: "Approve & deliver", text: "Review the proposed package and deliver approved material under the access, confidentiality, and usage terms in the agreement." },
  { title: "Receive payment", text: "Payment follows the acceptance criteria and milestones set in your agreement. Any future packages are scoped and priced separately." },
] as const;

export function PartnershipProcess() {
  return (
    <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.1fr] lg:gap-16">
      <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[440px]">
        <svg viewBox="0 0 440 440" fill="none" className="absolute inset-0 size-full text-accent">
          <circle cx="220" cy="220" r="150" stroke="currentColor" strokeOpacity="0.3" />
          <circle cx="220" cy="220" r="106" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="2 7" />
          <path d="m317 97 12 10-1-15M344 307l-8 14 14-2M124 341l-13-9 1 15M96 126l8-13-14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="absolute inset-[26%] flex flex-col items-center justify-center rounded-full border border-rule bg-paper px-4 text-center">
          <span className="text-[10px] uppercase tracking-widest text-accent">Data partnerships</span>
          <p className="mt-3 font-serif text-[clamp(1.4rem,3vw,2rem)] leading-tight">Your knowledge.<br /><span className="italic">New value.</span></p>
        </div>
        {[
          ["01", "Scope", "top-[8%] left-1/2 -translate-x-1/2"],
          ["02", "Prepare", "top-1/2 right-0 -translate-y-1/2"],
          ["03", "Deliver", "bottom-[7%] left-1/2 -translate-x-1/2"],
          ["04", "Get paid", "top-1/2 left-0 -translate-y-1/2"],
        ].map(([number, label, position]) => (
          <div key={number} className={`absolute flex flex-col items-center gap-2 bg-paper-alt px-3 py-2 ${position}`}>
            <span className="flex size-9 items-center justify-center rounded-full border border-accent/40 font-mono text-xs text-accent">{number}</span>
            <span className="text-xs font-medium">{label}</span>
          </div>
        ))}
      </div>
      <ol className="border-t border-rule-strong">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-5 border-b border-rule py-6">
            <span className="pt-1 font-mono text-xs text-accent">0{index + 1}</span>
            <div><h3 className="font-serif text-2xl">{step.title}</h3><p className="mt-2 text-sm leading-[1.75] text-ink/70">{step.text}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
