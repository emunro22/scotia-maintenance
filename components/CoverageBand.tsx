import Link from 'next/link';
import Reveal from './Reveal';
import { areasAlphabetical } from '@/lib/areas';

/**
 * The signature element of the site: every town covered, set as large type.
 * Doubles as the primary internal link path into the area pages.
 */
export default function CoverageBand() {
  return (
    <section className="bg-navy py-16 text-white sm:py-24">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <h2 className="max-w-md text-3xl text-white sm:text-4xl">
            Twenty towns across the west of Scotland
          </h2>
          <p className="max-w-md text-[1.0625rem] leading-relaxed text-white/70">
            Scotia Maintenance travels across Glasgow, Renfrewshire, Dunbartonshire and
            Inverclyde. Pick your town for what the work looks like there.
          </p>
        </div>

        <Reveal className="mt-12">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-10">
            {areasAlphabetical.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="font-display text-[1.6rem] font-semibold leading-tight text-white/85 underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-cyan-light hover:decoration-cyan-brand sm:text-[2rem]"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-12 text-white/70">
          Not sure if your street is covered?{' '}
          <a href="tel:+447766636189" className="font-semibold text-white underline underline-offset-4 hover:text-cyan-light">
            Call 07766 636189
          </a>{' '}
          and ask.
        </p>
      </div>
    </section>
  );
}
