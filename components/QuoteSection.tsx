import ContactForm from './ContactForm';
import { site } from '@/lib/site';

type Props = {
  source: string;
  heading?: string;
  intro?: string;
  id?: string;
};

/** Contact/quote block reused at the foot of the homepage, service and area pages. */
export default function QuoteSection({ source, heading, intro, id = 'quote' }: Props) {
  return (
    <section id={id} className="scroll-mt-24 bg-mist py-16 sm:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-3xl sm:text-[2.1rem]">{heading || 'Get a free quote'}</h2>
          <p className="copy mt-4 max-w-prose">
            {intro ||
              'Tell us where you are and what the garden needs. Quotes are given after seeing the space, so the price reflects the actual job rather than a guess.'}
          </p>

          <dl className="mt-8 space-y-5 border-t border-stone pt-8">
            <div>
              <dt className="text-sm font-semibold text-ink/55">Call</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="font-display text-2xl font-bold text-navy hover:text-blue-brand">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink/55">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="break-all text-blue-brand hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-ink/55">Opening hours</dt>
              <dd className="mt-1 text-ink/85">{site.openingHours}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-card border border-stone bg-white p-6 sm:p-8">
          <ContactForm source={source} />
        </div>
      </div>
    </section>
  );
}
