import { Container, Section } from "@/components/site/Container";
import { ButtonLink, TextLink } from "@/components/site/Button";
import { Figure } from "@/components/site/Figure";
import { Reveal } from "@/components/site/Reveal";

export function DataPartnershipBand() {
  return (
    <Section id="data-partnerships" tone="alt">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.8fr] md:gap-16">
            <div>
              <p className="text-xs font-medium text-accent">Data partnerships / A new source of value</p>
              <h2 className="mt-6 max-w-[23ch] font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] tracking-[-0.02em]">
                Your company&rsquo;s data may be worth more than you think.
              </h2>
              <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.75] text-ink/70">
                The knowledge in your everyday workflows can help build more capable AI.
                Explore a paid data partnership, with the scope, permissions, and commercial terms agreed with your team.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href="/enterprise-data">Explore data partnerships <span aria-hidden="true">&#8599;</span></ButtonLink>
                <TextLink href="/enterprise-data#data-estimator">Try the value estimator</TextLink>
              </div>
            </div>
            <Figure src="/enterprise-data/records.webp" alt="A ledger of accumulated business knowledge, reviewed by hand" ratio="square" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
