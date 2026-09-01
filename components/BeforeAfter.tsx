'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import type { BeforeAfterPair } from '@/lib/gallery';

type Props = {
  pair: BeforeAfterPair;
};

/** A draggable before/after comparison slider. Keyboard- and touch-accessible via the underlying range input. */
export default function BeforeAfter({ pair }: Props) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div>
      <div
        ref={frameRef}
        className="group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-card border border-stone bg-mist sm:aspect-[16/11]"
        onPointerDown={(e) => {
          setDragging(true);
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => setDragging(false)}
        onPointerLeave={() => setDragging(false)}
      >
        <Image
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="pointer-events-none object-cover"
          priority={false}
        />

        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={pair.before.src}
            alt={pair.before.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-cyan-brand/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-[3px] bg-white shadow-[0_0_0_1px_rgba(14,42,82,0.15)]"
          style={{ left: `${position}%`, transform: 'translateX(-1.5px)' }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_6px_18px_-6px_rgba(14,42,82,0.5)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5.5 3L2 8l3.5 5M10.5 3L14 8l-3.5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Comparison slider: drag to reveal before and after for ${pair.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <h3 className="mt-5 text-[1.2rem]">{pair.title}</h3>
      <p className="mt-2 text-[0.975rem] leading-relaxed text-ink/75">{pair.description}</p>
    </div>
  );
}
