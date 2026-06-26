'use client';

import React from 'react';

const LOGOS = [
  { name: 'Apex Automation', symbol: '▲' },
  { name: 'Zenith Tech', symbol: '◆' },
  { name: 'Spectra Code', symbol: '★' },
  { name: 'Novus Flow', symbol: '●' },
  { name: 'Pulse Agent', symbol: '❖' },
  { name: 'Echo Cloud', symbol: '▶' },
];

export default function TrustedBy() {
  // Duplicate list to ensure seamless marquee wrapping loop
  const marqueeItems = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 bg-brand-dark border-y border-brand-teal/10 relative overflow-hidden">
      {/* Decorative vertical gradient borders for contrast */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-brand-mint/55 font-semibold">
          Powering execution for fast-growing development teams
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-x-hidden select-none">
        <div className="flex gap-16 items-center animate-[marquee_40s_linear_infinite] whitespace-nowrap min-w-full">
          {marqueeItems.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 text-brand-mint/60 hover:text-brand-light transition-colors duration-300 font-medium tracking-wide text-lg cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-teal/20 border border-brand-teal/20 flex items-center justify-center text-brand-yellow font-bold text-sm">
                {logo.symbol}
              </div>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
