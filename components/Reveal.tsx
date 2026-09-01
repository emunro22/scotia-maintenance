'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Element to render as — 'li' keeps list markup valid when revealing grid/list items. */
  as?: 'div' | 'li';
};

/**
 * Restrained scroll-reveal used across the site's sections and grids.
 * Motion is disabled entirely when the visitor prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    if (as === 'li') return <li className={className}>{children}</li>;
    return <div className={className}>{children}</div>;
  }

  const motionProps = {
    className,
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.32, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  };

  if (as === 'li') return <motion.li {...motionProps}>{children}</motion.li>;
  return <motion.div {...motionProps}>{children}</motion.div>;
}
