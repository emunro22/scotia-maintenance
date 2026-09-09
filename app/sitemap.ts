import type { MetadataRoute } from 'next';
import { areas } from '@/lib/areas';
import { services } from '@/lib/services';
import { blogPosts } from '@/lib/blogPosts';
import { canonical } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: canonical('/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: canonical('/services'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/areas'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/reviews'), lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: canonical('/blog'), lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: canonical('/about'), lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: canonical('/contact'), lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: canonical('/privacy-policy'), lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: canonical('/terms'), lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: canonical(`/services/${service.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: canonical(`/areas/${area.slug}`),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: canonical(`/blog/${post.slug}`),
    lastModified: new Date(post.publishDate),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // /thank-you is intentionally excluded: it is noindex and has no search value.
  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
