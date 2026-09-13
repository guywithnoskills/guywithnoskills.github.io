import React, { useState } from 'react';
import { motion } from 'motion/react';

interface DivergingDatum {
  label: string;
  value: string;
  change: number;
}

export function DivergingBarChart({ data }: { data: DivergingDatum[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const maxAbs = Math.max(...data.map((d) => Math.abs(d.change)), 1);

  return (
    <div className="space-y-4">
      {data.map((d, i) => {
        const positive = d.change >= 0;
        const widthPct = (Math.abs(d.change) / maxAbs) * 50;
        return (
          <div
            key={d.label}
            className="relative"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-white font-medium">{d.label}</span>
              <span className="text-[#B3B3B3]">
                {d.value}
                <span className={`ml-2 font-medium ${positive ? 'text-[#1DB954]' : 'text-[#e0575b]'}`}>
                  {positive ? '+' : ''}
                  {d.change}%
                </span>
              </span>
            </div>
            <div className="relative h-2.5 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#404040]" />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${widthPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.06 }}
                className={`absolute top-0 bottom-0 rounded-full ${positive ? 'bg-[#1DB954]' : 'bg-[#e0575b]'} ${
                  positive ? 'left-1/2' : 'right-1/2'
                }`}
                style={{ opacity: hovered === null || hovered === i ? 1 : 0.35 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface DonutDatum {
  label: string;
  value: number;
  color: string;
}

export function DonutChart({ data, centerLabel, centerValue }: { data: DonutDatum[]; centerLabel: string; centerValue: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const total = data.reduce((s, d) => s + d.value, 0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let offsetAcc = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <div className="relative w-[160px] h-[160px] flex-shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="#1a1a1a" strokeWidth="18" />
          {data.map((d, i) => {
            const frac = d.value / total;
            const dash = frac * circumference;
            const dashArray = `${dash} ${circumference - dash}`;
            const dashOffset = -offsetAcc * circumference;
            offsetAcc += frac;
            return (
              <motion.circle
                key={d.label}
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth={hovered === i ? 22 : 18}
                strokeDasharray={dashArray}
                initial={{ strokeDashoffset: 0, opacity: 0 }}
                whileInView={{ strokeDashoffset: dashOffset, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: i * 0.15 }}
                strokeLinecap="butt"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer', transition: 'stroke-width 0.2s' }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-lg font-bold text-white">
            {hovered !== null ? `${Math.round((data[hovered].value / total) * 100)}%` : centerValue}
          </span>
          <span className="text-[10px] text-[#B3B3B3] text-center px-4">
            {hovered !== null ? data[hovered].label : centerLabel}
          </span>
        </div>
      </div>
      <div className="space-y-2 w-full">
        {data.map((d, i) => (
          <div
            key={d.label}
            className="flex items-center justify-between text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
            style={{ backgroundColor: hovered === i ? 'rgba(255,255,255,0.05)' : 'transparent' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="flex items-center gap-2 text-[#B3B3B3]">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
              {d.label}
            </span>
            <span className="text-white font-medium">{Math.round((d.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatChips({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="text-center bg-[#1a1a1a] rounded-lg py-3 px-2"
        >
          <div className="text-lg font-bold text-[#1DB954]">{item.value}</div>
          <div className="text-[10px] text-[#B3B3B3] mt-0.5">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
