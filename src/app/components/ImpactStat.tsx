import React, { useRef, useState, useEffect } from 'react';
import { useMotionValue, useMotionValueEvent, animate, useInView, useReducedMotion } from 'motion/react';

interface ImpactStatProps {
  value: number;
  label: string;
  size?: 'lg' | 'md';
}

export function ImpactStat({ value, label, size = 'lg' }: ImpactStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(mv, 'change', (latest) => setDisplay(latest));

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.1, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, value, reduced]);

  const shown = Number.isInteger(value) ? Math.round(display) : Math.round(display * 10) / 10;
  const sizeClass = size === 'lg' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl';

  return (
    <div ref={ref}>
      <div className={`${sizeClass} font-bold text-[#1DB954] leading-none tabular-nums`}>+{shown}%</div>
      <div className="text-[10px] uppercase tracking-wide text-[#B3B3B3] mt-1">{label}</div>
    </div>
  );
}
