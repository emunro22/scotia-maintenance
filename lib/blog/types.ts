/**
 * Blog content model.
 *
 * Paragraph and list text may carry inline links written as [label](/path).
 * BlogBody parses those into real Next links, which is what keeps the posts
 * pointing back at the service and area pages they describe.
 */
export type BlogBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  /** A real customer review, quoted as supporting evidence. */
  | { type: 'quote'; text: string; attribution: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
  publishDate: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: BlogBodyBlock[];
  relatedServices: string[];
  relatedAreas: string[];
};
