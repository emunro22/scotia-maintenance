'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type Slide = { readonly src: string; readonly alt: string };

type Props = {
  slides: readonly Slide[];
  /** Time each frame is held, in milliseconds. */
  intervalMs?: number;
};

/**
 * Cross-fading background of finished work behind the hero copy.
 *
 * Frames mount progressively: only the current slide, the one after it and
 * everything already shown are in the DOM, so the first paint carries a single
 * hero image rather than the whole set competing for bandwidth.
 *
 * The images sit behind the headline and repeat photography shown properly
 * elsewhere, so they are marked decorative rather than announced one by one.
 */
export default function HeroSlideshow({ slides, intervalMs = 6000 }: Props) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    if (reduced || slides.length < 2) return;

    const id = setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % slides.length;
        setReached((high) => Math.max(high, next));
        return next;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [reduced, slides.length, intervalMs]);

  // Current frame, everything already seen, and one ahead so the next fade is ready.
  const mountUpTo = Math.min(reached + 1, slides.length - 1);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, i) =>
        i <= mountUpTo ? (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null,
      )}
    </div>
  );
}
