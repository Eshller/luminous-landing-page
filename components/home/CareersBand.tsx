import { Container } from "@/components/site/Container";
import { Banner } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { ROLE_COUNT } from "@/lib/careers";

export function CareersBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <Banner
            title="Careers"
            action={{ href: "/careers", label: `See all ${ROLE_COUNT} roles` }}
          >
            We&rsquo;re hiring across research, engineering, frontier engagement, revenue and
            talent. Come build the evaluation and human-data layer that production AI depends on.
          </Banner>
        </Reveal>
      </Container>
    </section>
  );
}
