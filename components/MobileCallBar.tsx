import Link from 'next/link';
import { site } from '@/lib/site';

/** Sticky call/quote bar shown on small screens only. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy/15 bg-white/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <div className="flex gap-2.5">
        <a href={site.phoneHref} className="btn-navy flex-1 px-3 py-3 text-[0.9rem]">
          Call {site.phone}
        </a>
        <Link href="/contact" className="btn-primary flex-1 px-3 py-3 text-[0.9rem]">
          Get a free quote
        </Link>
      </div>
    </div>
  );
}
