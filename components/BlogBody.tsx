import type { ReactNode } from 'react';
import Link from 'next/link';
import type { BlogBodyBlock } from '@/lib/blogPosts';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Turns inline [label](/path) markers into real links, leaving the surrounding
 * text untouched. Anything that is not a marker is emitted verbatim, so a
 * stray bracket in ordinary prose renders as written.
 */
function withLinks(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  let match = LINK_PATTERN.exec(text);

  while (match !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    nodes.push(
      <Link key={`link-${key++}`} href={match[2]}>
        {match[1]}
      </Link>,
    );
    cursor = match.index + match[0].length;
    match = LINK_PATTERN.exec(text);
  }

  if (cursor === 0) return text;
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

/** Renders a blog post's typed body blocks as plain server-rendered markup. */
export default function BlogBody({ blocks }: { blocks: BlogBodyBlock[] }) {
  return (
    <div className="copy max-w-prose">
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`;

        if (block.type === 'heading') {
          return (
            <h2 key={key} className="mt-10 text-2xl sm:text-[1.75rem]">
              {block.text}
            </h2>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={key} className="mt-4 list-disc space-y-2 pl-6">
              {block.items.map((item) => (
                <li key={item.slice(0, 40)}>{withLinks(item)}</li>
              ))}
            </ul>
          );
        }

        if (block.type === 'quote') {
          return (
            <figure
              key={key}
              className="my-8 rounded-card border-l-[3px] border-cyan-brand bg-mist/70 py-5 pl-6 pr-5"
            >
              <blockquote className="text-[1.05rem] font-medium leading-relaxed text-navy">
                &ldquo;{block.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[0.9rem] text-ink/60">
                {block.attribution} &middot;{' '}
                <Link href="/reviews" className="font-semibold">
                  see all reviews
                </Link>
              </figcaption>
            </figure>
          );
        }

        return <p key={key}>{withLinks(block.text)}</p>;
      })}
    </div>
  );
}
