import React, { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mouseX.set(-200);
    mouseY.set(-200);
  };

  const background = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(29,185,84,0.14), transparent 75%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background }} />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
