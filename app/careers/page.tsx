import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Footer } from "@/components/site/Footer";
import { Container, Section } from "@/components/site/Container";
import { ButtonLink } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { RoleEntry } from "@/components/careers/RoleEntry";
import { ROLES, ROLE_COUNT } from "@/lib/careers";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Adzzat Labs",
  description:
    "Research, engineering, operations, revenue and talent roles building AI evaluation and human-data infrastructure at Adzzat Labs.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
          <Container>
            <Reveal>
              <h1 className="t-display">Shape how AI learns.</h1>
              <p className="t-lead mt-5">
                We&rsquo;re hiring across research, engineering, operations and revenue to build the
                evaluation and human-data infrastructure reliable AI depends on.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=Application`} external>
                  Apply by email
                </ButtonLink>
                <span className="t-meta">{ROLE_COUNT} open roles</span>
              </div>
            </Reveal>
          </Container>
        </section>

        <Section tone="alt" className="py-12 sm:py-14">
          <Container>
            <Reveal>
              <h2 className="t-eyebrow">Open roles</h2>
              <ul className="mt-5 space-y-3">
                {ROLES.map((role) => (
                  <li key={role.slug}>
                    <a
                      href={`#${role.slug}`}
                      className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[15px] font-medium leading-snug text-ink/80 transition-opacity duration-150 hover:opacity-60"
                    >
                      <span className="underline underline-offset-4">{role.title}</span>
                      <span className="t-meta">{role.location}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </Section>

        <Section>
          <Container>
            {ROLES.map((role, index) => (
              <Reveal key={role.slug} delay={Math.min(index, 4) * 0.04}>
                <RoleEntry role={role} />
              </Reveal>
            ))}
          </Container>
        </Section>

        <Section tone="alt">
          <Container width="text">
            <Reveal>
              <h2 className="t-h3">How we hire</h2>
              <p className="t-small mt-3">
                Apply by email with whatever best shows your work &mdash; a CV, a GitHub profile, a
                paper, a shipped system. For research and engineering roles we weigh evidence of
                work over pedigree. If there&rsquo;s a fit, we&rsquo;ll send you a short,
                role-specific exercise before we take up much of your time.
              </p>
            </Reveal>
          </Container>
        </Section>

        <Section>
          <Container width="text">
            <Reveal>
              <div className="border-l-2 border-accent pl-5">
                <h2 className="text-[17px] font-semibold text-ink">
                  Verify the opportunity through official channels
                </h2>
                <p className="t-small mt-2">
                  Adzzat Labs never asks candidates for payment at any stage of hiring. All
                  correspondence comes from an{" "}
                  <span className="font-mono text-[13px]">@adzzat.com</span> address. If you receive
                  an offer or request that looks like it came from us and you are unsure, contact{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-ink underline underline-offset-4"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  before responding.
                </p>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
