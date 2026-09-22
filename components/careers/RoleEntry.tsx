import { ButtonLink } from "@/components/site/Button";
import { CONTACT_EMAIL } from "@/lib/site";
import type { Role } from "@/lib/careers";

interface RoleEntryProps {
  role: Role;
}

/**
 * One open role, rendered as an anchored section so a link can be shared for a
 * single position. Applications go to the contact inbox with the role title
 * pre-filled in the subject.
 */
export function RoleEntry({ role }: RoleEntryProps) {
  const applyHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Application — ${role.title}`,
  )}`;

  return (
    <section
      id={role.slug}
      className="grid scroll-mt-28 gap-6 border-t border-rule py-12 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10 sm:py-14"
    >
      <div>
        <p className="t-meta">{role.team}</p>
        <p className="t-small mt-3">{role.location}</p>
        <p className="t-small">{role.type}</p>
      </div>

      <div>
        <h2 className="t-h3">{role.title}</h2>
        <p className="t-body mt-4">{role.summary}</p>

        <h3 className="t-eyebrow mt-8">What you&rsquo;ll do</h3>
        <ul className="mt-3 space-y-2">
          {role.responsibilities.map((item) => (
            <li
              key={item}
              className="relative max-w-[62ch] pl-5 text-[15px] font-medium leading-snug text-ink/70"
            >
              <span aria-hidden="true" className="absolute left-0 top-0 text-ink/30">
                &mdash;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h3 className="t-eyebrow mt-8">Who we&rsquo;re looking for</h3>
        <p className="t-small mt-3 max-w-[62ch]">{role.profile}</p>

        <h3 className="t-eyebrow mt-6">Strong pluses</h3>
        <p className="t-small mt-3 max-w-[62ch]">{role.pluses}</p>

        <div className="mt-8">
          <ButtonLink href={applyHref} size="sm" external>
            Apply for this role
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
