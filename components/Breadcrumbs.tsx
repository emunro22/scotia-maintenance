import Link from 'next/link';

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink/80">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-blue-brand hover:underline">
                  {item.name}
                </Link>
              )}
              {!last && <span aria-hidden="true" className="text-ink/30">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
