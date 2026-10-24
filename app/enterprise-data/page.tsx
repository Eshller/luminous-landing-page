import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Footer } from "@/components/site/Footer";
import { Container, Section } from "@/components/site/Container";
import { ButtonLink, TextLink } from "@/components/site/Button";
import { Figure } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";
import { DataEstimator } from "@/components/enterprise-data/DataEstimator";
import { PartnershipProcess } from "@/components/enterprise-data/PartnershipProcess";
import { DataExplorer } from "@/components/enterprise-data/DataExplorer";

const TITLE = "Enterprise Data Partnerships — Adzzat Labs";
const DESCRIPTION = "Explore how your company's operational knowledge can support AI training and evaluation through a scoped enterprise data partnership.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/enterprise-data" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/enterprise-data",
    type: "website",
    images: [{ url: "/enterprise-data/archive.webp", width: 1916, height: 821, alt: "A quiet archive of human knowledge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/enterprise-data/archive.webp"],
  },
};

const FAQS = [
  { question: "When would we be paid?", answer: "Payment amounts, acceptance criteria, and timing are agreed before delivery. Any payment follows those contractual milestones. Additional datasets or future updates would need their own agreed scope and commercial terms; recurring revenue is not automatic." },
  { question: "What is an enterprise data partnership?", answer: "A scoped arrangement to license business records for agreed AI training or evaluation uses. The conversation starts with the knowledge in your organization, whether you have the rights to license it, and how it might meet a research need." },
  { question: "What kinds of data could be relevant?", answer: "Operational records that capture context, decisions, and outcomes: engineering documents, support histories, internal knowledge, and business workflows. A record that explains why a decision was made can be more useful than a large volume of disconnected information." },
  { question: "Do we need to share data to start the conversation?", answer: "No. Start with a high-level description of your organization and the types of records you hold. Do not send raw records, personal information, or confidential material through the enquiry form. Any later sample review or access should be agreed separately." },
  { question: "How are sensitive information and permissions handled?", answer: "The proposed scope needs an ownership and permissions review, together with explicit exclusions and dataset-specific privacy requirements. Redaction, anonymization, or other preparation depends on the material and intended use. Removing direct identifiers alone does not guarantee that a dataset is anonymous." },
  { question: "What determines the commercial terms?", answer: "Relevance to the research task, depth of context, quality, uniqueness, and the rights available all matter. Terms are assessed for each partnership; there is no standard payout or guaranteed valuation. The calculator uses transparent demonstration assumptions and does not quote an actual price." },
  { question: "Can an AI lab request a particular type of data?", answer: "Yes. Tell us the domain, capability, or evaluation gap you are working on. We can discuss the data characteristics and expert input the project would need, then explore the fit with potential sources." },
] as const;

export default function EnterpriseDataPage() {
  return (
    <>
      <a href="#enterprise-main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-3">Skip to content</a>
      <SiteHeader />
      <main id="enterprise-main">
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-20">
          <Container>
            <Reveal>
              <div className="mb-7 flex items-center gap-3 text-xs font-medium text-ink/65">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                Enterprise data partnerships
              </div>
              <div className="grid items-end gap-8 lg:grid-cols-[1.5fr_0.7fr] lg:gap-16">
                <div>
                  <h1 className="t-display max-w-[20ch]">Your company&rsquo;s data may be worth more than you think.</h1>
                  <p className="t-lead mt-6 max-w-[43ch]">
                    Years of decisions, expertise, and experience live inside your business.
                    Explore how licensing that knowledge could create a new source of revenue and help build the next generation of AI.
                  </p>
                </div>
                <p className="max-w-[34ch] text-sm leading-[1.7] text-ink/70 lg:pb-1">
                  Explore a new source of value through a data partnership with Adzzat Labs.
                  Real operational knowledge, licensed for a clearly defined purpose.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="/get-started">Explore a partnership <span aria-hidden="true" className="arrow-nudge">&#8599;</span></ButtonLink>
                <ButtonLink href="#data-estimator" variant="ghost">Estimate the potential <span aria-hidden="true">&#8595;</span></ButtonLink>
              </div>
            </Reveal>

            <figure className="mt-12 sm:mt-16">
              <Figure src="/enterprise-data/archive.webp" alt="An archivist walking through shelves of paper records in a softly lit archive" ratio="cinema" priority />
              <figcaption className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-[11px] text-ink/60">
                <span>Human knowledge. Beyond the open web.</span>
                <span>Adzzat Labs / Enterprise data</span>
              </figcaption>
            </figure>
            <div className="mt-9 grid gap-5 border-y border-rule py-6 text-sm sm:grid-cols-3 sm:gap-8">
              {["Your knowledge, a defined license", "Permissions before access", "Context that makes data useful"].map((item, index) => (
                <p key={item} className="flex items-center gap-3"><span className="font-mono text-[10px] text-ink/50">0{index + 1}</span>{item}</p>
              ))}
            </div>
          </Container>
        </section>

        {/* Hidden for now; kept for possible reuse.
        <Section tone="alt" id="why-it-matters">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1fr] md:gap-20">
              <Reveal>
                <Figure src="/enterprise-data/records.webp" alt="Hands reviewing a ledger and paper records in natural light" ratio="portrait" className="max-h-[490px]" />
              </Reveal>
              <Reveal>
                <p className="text-xs text-ink/65">01 / The value in real work</p>
                <h2 className="mt-6 max-w-[22ch] font-serif text-[clamp(2rem,3vw,2.8rem)] leading-[1.1] tracking-[-0.02em]">
                  The most useful knowledge isn&rsquo;t always public.
                </h2>
                <p className="mt-6 text-[15px] leading-[1.75] text-ink/70">
                  It is in the ticket that took three teams to resolve. The design review that
                  changed a product. The runbook refined through years of experience.
                </p>
                <p className="mt-4 text-[15px] leading-[1.75] text-ink/70">
                  These records capture something the open web often misses: how people reason
                  through real constraints. With the right permissions and preparation, that
                  context can help train and evaluate more capable AI.
                </p>
                <p className="mt-7 border-t border-rule pt-6 font-serif text-2xl leading-snug">
                  Not just what happened.<br /><span className="italic text-ink/65">How people decided what to do.</span>
                </p>
              </Reveal>
            </div>
          </Container>
        </Section>
        */}

        <Section id="how-it-works" tone="alt">
          <Container>
            <Reveal>
              <p className="text-xs text-ink/65">02 / A considered path to partnership</p>
              <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
                <h2 className="t-h2">How a data partnership works.</h2>
                <TextLink href="/get-started">Talk to our team</TextLink>
              </div>
              <p className="mt-6 max-w-[64ch] text-[15px] leading-[1.75] text-ink/70">From the first conversation to an approved licensing package, establish what can be shared, how it will be prepared, and when payment is due.</p>
              <PartnershipProcess />
            </Reveal>
          </Container>
        </Section>

        <Section id="the-data">
          <Container>
            <Reveal>
              <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:gap-16">
                <div><p className="text-xs text-ink/65">03 / What useful data looks like</p><h2 className="t-h2 mt-5">Target industries</h2></div>
                <div className="self-end">
                  <p className="max-w-[50ch] text-[15px] leading-[1.75] text-ink/70">
                    You do not need to manufacture a dataset. Start with the knowledge your
                    organization already creates. Explore a few examples below.
                  </p>
                  <ButtonLink href="/get-started" className="mt-6">Check if you qualify <span aria-hidden="true" className="arrow-nudge">&#8599;</span></ButtonLink>
                </div>
              </div>
              <DataExplorer />
              <div className="mt-14 border-t border-rule pt-8">
                <h3 className="font-serif text-2xl">Start with the systems your team already uses.</h3>
                <p className="mt-3 max-w-[65ch] text-sm leading-[1.75] text-ink/70">These are examples of potential sources, not requests for unrestricted access. Only records you have the rights to license belong in an agreed package.</p>
                <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {[
                    ["Team conversations", "Slack, Teams, or other internal discussions that show how work moves from question to resolution."],
                    ["Email & calendars", "Business correspondence and project coordination, reviewed for permissions and sensitive information."],
                    ["Documents & files", "Design briefs, reports, spreadsheets, and knowledge bases with useful context and provenance."],
                    ["Business systems", "Approved CRM, support, and operational records that connect a task to a decision and outcome."],
                  ].map(([title, text]) => <div key={title} className="border-t border-rule pt-5"><dt className="font-medium text-sm">{title}</dt><dd className="mt-3 text-sm leading-[1.75] text-ink/65">{text}</dd></div>)}
                </dl>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* Hidden for now; kept for possible reuse.
        <Section id="partner-fit">
          <Container>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.3fr] md:gap-20">
              <div><p className="text-xs text-ink/65">Who this is for</p><h2 className="t-h2 mt-5">Established workflows.<br />Knowledge worth sharing.</h2></div>
              <div className="space-y-6 text-sm leading-[1.75] text-ink/70">
                <p>We want to hear from businesses with a history of real operational work, records that preserve useful context, and a team able to review the rights and permissions involved.</p>
                <p>A good starting point is a decision-maker who knows the business, a clear view of the available records, and agreement on what must stay outside the partnership. You do not need to send raw data to find out whether there is a fit.</p>
                <TextLink href="/get-started">Explore your company&rsquo;s fit</TextLink>
              </div>
            </div>
          </Container>
        </Section>
        */}

        <Section id="partnership-principles" tone="alt">
          <Container>
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.3fr] md:gap-20">
              <Reveal>
                <p className="text-xs text-ink/65">04 / Built around trust</p>
                <h2 className="t-h2 mt-5">Your business.<br />Your boundaries.</h2>
                <p className="mt-5 max-w-[35ch] text-sm leading-[1.75] text-ink/70">A valuable partnership starts with clarity about what belongs in it, and what does not.</p>
              </Reveal>
              <Reveal>
                <dl className="border-t border-rule">
                  {[
                    ["Ownership & permitted use", "Define the material, duration, and uses covered by the license. Your underlying records remain part of your business."],
                    ["Explicit exclusions", "Identify restricted records, third-party material, and sensitive information before agreeing the scope."],
                    ["Preparation & provenance", "Agree privacy handling and quality requirements for the specific dataset, with a documented source and preparation process."],
                  ].map(([title, text]) => (
                    <div key={title} className="border-b border-rule py-6"><dt className="font-serif text-2xl">{title}</dt><dd className="mt-3 max-w-[55ch] text-sm leading-[1.75] text-ink/70">{text}</dd></div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Section id="data-estimator">
          <Container>
            <p className="text-xs text-ink/65">05 / Explore the potential</p>
            <div className="mt-5 grid gap-6 md:grid-cols-[1fr_1fr] md:gap-16">
              <h2 className="t-h2">What could your<br />data be worth?</h2>
              <p className="max-w-[48ch] text-[15px] leading-[1.75] text-ink/70">Adjust your team size, available history, and source coverage to explore an illustrative licensing scenario. A conversation with our team is the next step toward a real assessment.</p>
            </div>
            <DataEstimator />
          </Container>
        </Section>

        <section className="border-t border-rule py-16 sm:py-24" aria-labelledby="faq-title">
          <Container>
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.3fr] md:gap-20">
              <div><p className="text-xs text-ink/65">A little more context</p><h2 id="faq-title" className="t-h2 mt-5">Good questions.<br />Clear answers.</h2><div className="mt-7"><TextLink href="/get-started">Ask us something else</TextLink></div></div>
              <div className="border-t border-rule">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="group border-b border-rule">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                      {faq.question}<span aria-hidden="true" className="mt-0.5 shrink-0 text-lg font-normal leading-none group-open:hidden">+</span><span aria-hidden="true" className="mt-0.5 hidden shrink-0 text-lg font-normal leading-none group-open:block">&#8722;</span>
                    </summary>
                    <p className="pb-6 pr-6 text-sm leading-[1.8] text-ink/70">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-20 sm:pb-28" aria-labelledby="partnership-cta">
          <Container>
            <div className="rounded-[var(--radius-figure)] bg-shell px-7 py-12 text-shell-ink sm:px-12 sm:py-16">
              <p className="text-xs opacity-65">A new chapter for your company&rsquo;s knowledge</p>
              <div className="mt-6 grid items-end gap-10 md:grid-cols-[1.3fr_0.8fr] md:gap-16">
                <h2 id="partnership-cta" className="max-w-[22ch] font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.02em]">You have the experience.<br />Let&rsquo;s explore its potential.</h2>
                <div>
                  <p className="max-w-[36ch] text-sm leading-[1.75] opacity-70">Tell us a little about your business and the knowledge it holds. We&rsquo;ll start with the possibilities.</p>
                  <Link href="/get-started" className="mt-7 inline-flex items-center gap-3 rounded-full bg-shell-ink px-5 py-3 text-sm font-medium text-shell transition-opacity hover:opacity-75">Explore a partnership <span aria-hidden="true" className="arrow-nudge">&#8599;</span></Link>
                  <p className="mt-4 text-[11px] opacity-60">An initial conversation. No data upload required.</p>
                </div>
              </div>
            </div>
            <p className="mt-7 text-center text-sm text-ink/65">Building models? <Link href="/get-started" className="text-ink underline underline-offset-4">Discuss your data requirements <span aria-hidden="true">&#8599;</span></Link></p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
