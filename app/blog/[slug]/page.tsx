import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogBody from '@/components/BlogBody';
import JsonLd from '@/components/JsonLd';
import QuoteSection from '@/components/QuoteSection';
import Reveal from '@/components/Reveal';
import { blogPosts, blogPostsByDate, getBlogPost } from '@/lib/blogPosts';
import { getService } from '@/lib/services';
import { getArea } from '@/lib/areas';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { canonical, site } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const url = canonical(`/blog/${post.slug}`);
  return {
    title: `${post.title} | Scotia Maintenance`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.publishDate,
      images: [{ url: post.image, width: 1200, height: 900, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = canonical(`/blog/${post.slug}`);
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  const otherPosts = blogPostsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: canonical(c.href) }))),
          articleSchema({
            headline: post.title,
            description: post.metaDescription,
            url,
            datePublished: post.publishDate,
            image: `${site.url}${post.image}`,
          }),
        ]}
      />

      <div className="container-page pt-6">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="container-page py-8 lg:py-12">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-3 text-[2rem] leading-[1.15] sm:text-[2.6rem]">{post.title}</h1>
            <p className="mt-4 text-[0.9rem] text-ink/55">
              <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-card border border-stone">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="container-page grid gap-12 pb-8 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <BlogBody blocks={post.body} />

          {(post.relatedServices.length > 0 || post.relatedAreas.length > 0) && (
            <div className="mt-12 border-t border-stone pt-8">
              {post.relatedServices.length > 0 && (
                <>
                  <h2 className="text-xl">Related services</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {post.relatedServices.map((slug) => {
                      const service = getService(slug);
                      if (!service) return null;
                      return (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-block rounded-card border border-stone bg-white px-4 py-2.5 text-[0.9rem] text-navy transition-colors hover:border-blue-brand hover:text-blue-brand"
                          >
                            {service.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}

              {post.relatedAreas.length > 0 && (
                <>
                  <h2 className="mt-8 text-xl">Areas this applies to</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {post.relatedAreas.map((slug) => {
                      const area = getArea(slug);
                      if (!area) return null;
                      return (
                        <li key={area.slug}>
                          <Link
                            href={`/areas/${area.slug}`}
                            className="inline-block rounded-card border border-stone bg-white px-4 py-2.5 text-[0.9rem] text-navy transition-colors hover:border-blue-brand hover:text-blue-brand"
                          >
                            {area.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24">
          <div className="rounded-card border border-navy/15 bg-navy p-6 text-white">
            <h2 className="text-[1.15rem] text-white">Need this sorted?</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">
              Seven days a week, 8am to 4pm across Glasgow and the surrounding towns.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-5 w-full">
              Call {site.phone}
            </a>
            <Link href="/contact" className="btn-ghost-light mt-3 w-full">
              Send an enquiry
            </Link>
          </div>

          {otherPosts.length > 0 && (
            <div className="mt-6 rounded-card border border-stone p-6">
              <h2 className="text-[1.1rem]">More from the blog</h2>
              <ul className="mt-4 space-y-3 text-[0.95rem]">
                {otherPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-blue-brand hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      <QuoteSection
        source={`blog-${post.slug}`}
        heading="Get a free quote"
        intro="Tell us where you are and what the garden needs. Quotes are given after seeing the space, so the price reflects the actual job rather than a guess."
      />
    </>
  );
}
