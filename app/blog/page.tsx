import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import Reveal from '@/components/Reveal';
import { blogPostsByDate } from '@/lib/blogPosts';
import { breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

const title = 'Garden & Landscaping Advice | Scotia Maintenance Blog';
const description =
  'Practical advice on lawns, planting, hedges and landscaping in Glasgow and the west of Scotland, from Scotia Maintenance.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/blog') },
  openGraph: {
    title,
    description,
    url: canonical('/blog'),
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: 'Scotia Maintenance blog' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) })))} />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <p className="eyebrow">Garden advice</p>
          <h1 className="mt-3 max-w-3xl text-[2.2rem] leading-[1.1] sm:text-[3rem]">
            Practical advice for gardens in the west of Scotland
          </h1>
          <p className="copy mt-5 max-w-prose text-[1.1rem]">
            Notes on lawns, planting, hedges and landscaping, grounded in the conditions and
            gardens Scotia Maintenance actually works on across Glasgow, Renfrewshire and
            Dunbartonshire.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-8">
        <ul className="grid gap-8 sm:grid-cols-2">
          {blogPostsByDate.map((post, i) => (
            <Reveal
              as="li"
              key={post.slug}
              delay={0.05 * (i % 2)}
              className="group flex flex-col overflow-hidden rounded-card border border-stone p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-brand/40 hover:shadow-[0_20px_40px_-24px_rgba(14,42,82,0.35)]"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-3 text-[1.3rem] leading-snug group-hover:text-blue-brand">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-ink/75">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-stone pt-4 text-[0.85rem] text-ink/55">
                  <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-blue-brand">
                    Read more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                      <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <QuoteSection
        source="blog-hub"
        heading="Have a garden that needs sorting?"
        intro="Describe the garden and where you are, and Scotia Maintenance will get back to you to arrange a visit and a free quote."
      />
    </>
  );
}
