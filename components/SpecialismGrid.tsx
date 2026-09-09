import Link from 'next/link';
import { services } from '@/lib/services';
import { specialisms, specialismsByService } from '@/lib/specialisms';
import Reveal from './Reveal';

type Props = {
  /** Town name, when the list is shown on an area page. */
  areaName?: string;
  /** Heading level to render group titles at, so page outlines stay valid. */
  headingLevel?: 'h2' | 'h3';
};

/**
 * Every service Scotia Maintenance is listed under, grouped beneath the core
 * service page each one belongs to. Each group heading links through to that
 * service page, which is where the detail and the enquiry route live.
 */
export default function SpecialismGrid({ areaName, headingLevel = 'h3' }: Props) {
  const GroupHeading = headingLevel;

  const groups = services
    .map((service) => ({ service, items: specialismsByService(service.slug) }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="space-y-10">
      {groups.map((group, groupIndex) => (
        <Reveal key={group.service.slug} delay={0.04 * groupIndex}>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <GroupHeading className="text-[1.35rem] sm:text-[1.5rem]">
                {group.service.name}
                {areaName ? ` in ${areaName}` : ''}
              </GroupHeading>
              <Link
                href={`/services/${group.service.slug}`}
                className="text-[0.9rem] font-semibold text-blue-brand hover:underline"
              >
                More on {group.service.name.toLowerCase()}
              </Link>
            </div>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li
                  key={item.slug}
                  className="rounded-card border border-stone bg-white p-5 transition-colors hover:border-cyan-brand/40"
                >
                  <h4 className="text-[1.02rem] font-semibold">{item.name}</h4>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Compact comma-separated run of every specialism, for dense in-page linking. */
export function SpecialismRun({ areaName }: { areaName?: string }) {
  return (
    <p className="text-[0.95rem] leading-relaxed text-ink/70">
      {areaName ? `In ${areaName} that covers ` : 'That covers '}
      {specialisms.map((item, i) => (
        <span key={item.slug}>
          <Link
            href={`/services/${item.service}`}
            className="text-blue-brand hover:underline"
          >
            {item.name.toLowerCase()}
          </Link>
          {i < specialisms.length - 1 ? ', ' : '.'}
        </span>
      ))}
    </p>
  );
}
