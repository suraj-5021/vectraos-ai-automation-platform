'use client';

import React from 'react';
import { ArrowRight } from '../Icons';

export default function CTA() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="contact" className="py-36 bg-brand-dark border-b border-brand-teal/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-teal/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-brand-teal/20 bg-brand-dark/95 backdrop-blur-md px-8 py-24 md:py-36 text-center shadow-2xl">
          {/* Card subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/5 via-transparent to-brand-orange/5 pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-light mb-6 leading-none max-w-4xl mx-auto">
            Ready to accelerate your
            <span className="block mt-2 bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              software workflows?
            </span>
          </h2>

          {/* Description */}
          <p className="text-brand-mint/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join forward-thinking developer teams deploying secure, self-improving agents. Get started in minutes with zero credit card required.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, '#pricing')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-yellow text-black font-semibold hover:bg-brand-yellow/90 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,200,1,0.2)] cursor-pointer"
            >
              Get Started Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, '#pricing')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-teal/20 border border-brand-teal/20 text-brand-mint/90 font-semibold hover:bg-neutral-800 hover:text-brand-light transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Talk to Sales
            </a>
          </div>

          {/* Bottom badge */}
          <div className="mt-12 text-xs text-brand-mint/55 font-medium uppercase tracking-widest">
            No credit card required. Cancel anytime.
          </div>
        </div>
      </div>
    </section>
  );
}
