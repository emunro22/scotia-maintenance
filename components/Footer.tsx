import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { areasAlphabetical } from '@/lib/areas';
import { services } from '@/lib/services';

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-white/75">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:gap-10">
        <div>
          <Image
            src="/scotia-maintenance-logo-white.png"
            alt="Scotia Maintenance"
            width={683}
            height={166}
            className="h-9 w-auto"
          />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">
            Landscaping and garden maintenance across Glasgow, Renfrewshire, Dunbartonshire
            and the surrounding towns.
          </p>
          <dl className="mt-6 space-y-2 text-[0.95rem]">
            <div className="flex gap-2">
              <dt className="text-white/55">Phone</dt>
              <dd>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-cyan-light">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="break-all hover:text-cyan-light">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">Hours</dt>
              <dd>{site.openingHours}</dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-cyan-light">
                  {s.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/blog" className="hover:text-cyan-light">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-light">
                About Scotia Maintenance
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-light">
                Request a quote
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Areas covered">
          <h2 className="font-display text-sm font-semibold text-white">Areas covered</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[0.95rem]">
            {areasAlphabetical.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="hover:text-cyan-light">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Serving Glasgow and the west of Scotland.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy-policy" className="hover:text-cyan-light">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-cyan-light">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
