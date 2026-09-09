import type { BlogPost } from './blog/types';
import { coreGuides } from './blog/coreGuides';
import { practicalGuides } from './blog/practicalGuides';

export type { BlogPost, BlogBodyBlock } from './blog/types';

export const blogPosts: BlogPost[] = [...coreGuides, ...practicalGuides];

export const blogSlugs = blogPosts.map((p) => p.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Posts in publish order, newest first. */
export const blogPostsByDate = [...blogPosts].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);
