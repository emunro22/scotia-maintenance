import Link from 'next/link';
import { areasAlphabetical } from '@/lib/areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Page Not Found | Scotia Maintenance',
  description:
    'That page does not exist. Browse landscaping services and areas covered, or call Scotia Maintenance on 07766 636189.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-2 text-[2.2rem] leading-[1.1] sm:text-[3rem]">
          That page does not exist
        </h1>
        <p className="copy mt-5 text-[1.1rem]">
          The address may have changed or been typed incorrectly. The links below cover most of
          what is on the site, or you can call Scotia Maintenance directly.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-navy">
            Call {site.phone}
          </a>
          <Link href="/" className="btn-outline">
            Back to the homepage
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-[1.15rem]">Services</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-blue-brand hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[1.15rem]">Popular areas</h2>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              {areasAlphabetical.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-blue-brand hover:underline">
                    Landscaping in {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="font-semibold text-navy hover:text-blue-brand">
                  All areas covered
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
