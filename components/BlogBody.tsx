import type { BlogBodyBlock } from '@/lib/blogPosts';

/** Renders a blog post's typed body blocks (paragraph/heading/list) as plain server-rendered markup. */
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
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={key}>{block.text}</p>;
      })}
    </div>
  );
}
