import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import { areasAlphabetical } from '@/lib/areas';
import { services } from '@/lib/services';
import { workGallery } from '@/lib/gallery';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'About Scotia Maintenance | Landscaper in Glasgow';
const description =
  'Scotia Maintenance is a landscaping and garden maintenance business serving Glasgow and the surrounding towns, seven days a week from 8am to 4pm.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/about') },
  openGraph: {
    title,
    description,
    url: canonical('/about'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'About Scotia Maintenance' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page grid items-start gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
        <Reveal>
          <p className="eyebrow">Local &amp; independent</p>
          <h1 className="mt-3 text-[2.2rem] leading-[1.1] sm:text-[3rem]">About Scotia Maintenance</h1>
          <p className="copy mt-5 max-w-prose text-[1.1rem]">
            Scotia Maintenance is a landscaping and garden maintenance business serving Glasgow
            and the surrounding towns. The work covers landscaping, garden maintenance, lawn and
            grass maintenance, garden improvements, planting and general outdoor maintenance.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-navy">
              Call {site.phone}
            </a>
            <Link href="/contact" className="btn-outline">
              Get a free quote
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group overflow-hidden rounded-card border border-stone">
            <Image
              src="/images/rear-garden-after-4.jpg"
              alt="Finished rear garden with sandstone patio, gold gravel and a painted shed, typical Scotia Maintenance work in the Glasgow area"
              width={1400}
              height={1050}
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-4">
        <Reveal>
          <ul className="grid grid-cols-3 gap-3 sm:gap-4">
            {workGallery.slice(0, 3).map((image) => (
              <li key={image.src} className="overflow-hidden rounded-card border border-stone">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 640px) 33vw, 20vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="container-page grid gap-12 py-8 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div className="copy max-w-prose">
          <h2 className="text-2xl sm:text-3xl">A local service across a wide area</h2>
          <p className="mt-4">
            Scotia Maintenance is listed on Google as a landscaper, and covers a genuinely wide
            area across Glasgow and the surrounding towns, from Kilmacolm, Langbank and Bridge
            of Weir in the west, through Renfrewshire and the north bank of the Clyde, to
            Rutherglen and East Kilbride on the eastern side.
          </p>
          <p>
            That coverage matters practically. A lot of people looking for a landscaper end up
            phoning round because their address falls just outside someone else&rsquo;s patch, or
            because they have a second property in a different town. Working across the whole of
            this area means one point of contact for a garden in Paisley and a garden in
            Bearsden.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl">Available seven days a week</h2>
          <p className="mt-4">
            Scotia Maintenance works Monday to Sunday, 8:00am to 4:00pm. Weekend availability is
            genuinely useful for garden work: it makes it far easier to be at home when a garden
            is being looked at and quoted, and it means jobs are not restricted to weekdays when
            most people are out.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl">How the work is priced</h2>
          <p className="mt-4">
            Quotes are given after seeing the garden. In this line of work, a price given over
            the phone is a guess: access, levels, the condition of the ground and how much
            clearance is needed all change what a job involves, and none of it is visible from a
            description or a photograph. Seeing the space first means the quote reflects the
            actual work.
          </p>
          <p>
            Work is available as a one-off (a clearance, a tidy-up before a sale or an event, a
            single landscaping project) or as a regular arrangement through the growing season.
            There is no obligation to commit to ongoing visits.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl">Working with west of Scotland conditions</h2>
          <p className="mt-4">
            Gardens here deal with high rainfall, heavy ground in the low-lying areas, exposure
            to wind coming up the Clyde and a long growing season running from early spring well
            into autumn. Those conditions decide what succeeds. Planting is chosen for the
            exposure a garden actually has, drainage is considered before surfaces go in, and
            maintenance is scheduled around how fast things really grow here.
          </p>

          <h2 className="mt-12 text-2xl sm:text-3xl">Get in touch</h2>
          <p className="mt-4">
            The quickest way to arrange anything is to call{' '}
            <a href={site.phoneHref}>{site.phone}</a>. Enquiries can also be sent through the{' '}
            <Link href="/contact">contact page</Link> or emailed to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-card border border-stone p-6">
            <h2 className="text-[1.1rem]">Services</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-blue-brand hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-card border border-stone p-6">
            <h2 className="text-[1.1rem]">Areas covered</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.9rem]">
              {areasAlphabetical.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-blue-brand hover:underline">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-card border border-navy/15 bg-navy p-6 text-white">
            <h2 className="text-[1.15rem] text-white">Opening hours</h2>
            <p className="mt-2 text-[0.95rem] text-white/80">{site.openingHours}</p>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full">
              Call {site.phone}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
