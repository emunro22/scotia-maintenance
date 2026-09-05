'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas covered' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-white/95 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Scotia Maintenance home">
          <Image
            src="/scotia-maintenance-logo.png"
            alt="Scotia Maintenance"
            width={683}
            height={166}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.95rem] font-medium transition-colors ${
                  active ? 'text-blue-brand' : 'text-ink/75 hover:text-navy'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden btn-navy sm:inline-flex">
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-card border border-stone text-navy lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-stone bg-white lg:hidden">
          <ul className="container-page py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-stone/70 last:border-0">
                <Link href={item.href} className="block py-3.5 text-[1.05rem] font-medium text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <a href={site.phoneHref} className="btn-primary w-full">
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
