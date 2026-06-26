'use client';

import React from 'react';
import { ArrowRight, Sparkles } from '../Icons';

export default function Hero() {
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
    <section className="relative min-h-screen pt-48 pb-32 flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
      {/* Premium CSS background animations defined in globals.css */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b3442_1px,transparent_1px),linear-gradient(to_bottom,#1b3442_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      {/* Floating Glowing Lights */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] left-[25%] w-[350px] h-[350px] bg-brand-teal/25 rounded-full blur-[100px] pointer-events-none animate-[pulse_8s_infinite]" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 z-10 w-full">
        {/* Left Side: Headline & CTAs */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in-up">
            <Sparkles size={14} />
            Enterprise AI Automation Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-light leading-none mb-6 animate-fade-in-up [animation-delay:150ms] opacity-0">
            Enterprise AI Automation
            <span className="block mt-2 bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              for the Next Generation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-brand-mint/70 max-w-2xl lg:max-w-xl mb-10 leading-relaxed animate-fade-in-up [animation-delay:300ms] opacity-0">
            Automate complex workflows, transform enterprise data into actionable intelligence, and accelerate business operations with VectraOS.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up [animation-delay:450ms] opacity-0">
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, '#pricing')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-yellow text-black font-semibold hover:bg-brand-yellow/90 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,200,1,0.2)] cursor-pointer"
            >
              Start Free
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neutral-900 border border-brand-teal/20 text-neutral-300 font-semibold hover:bg-neutral-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Book a Demo
            </a>
          </div>

          {/* Statistic Cards */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-brand-teal/20 w-full max-w-lg lg:max-w-none text-left animate-fade-in-up [animation-delay:600ms] opacity-0">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-light tracking-tight">150M+</div>
              <div className="text-xs text-brand-mint/55 mt-1 font-medium uppercase tracking-wide">Tasks Run</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-light tracking-tight">99.9%</div>
              <div className="text-xs text-brand-mint/55 mt-1 font-medium uppercase tracking-wide">Sandbox Uptime</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-brand-light tracking-tight">250ms</div>
              <div className="text-xs text-brand-mint/55 mt-1 font-medium uppercase tracking-wide">Mean Latency</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Animated Floating Panels */}
        <div className="flex-1 relative w-full aspect-square max-w-[500px] lg:max-w-none flex items-center justify-center select-none">
          {/* Background ambient light */}
          <div className="absolute w-[80%] h-[80%] bg-brand-orange/5 rounded-full blur-[80px]" />

          {/* Floating Card 1: Console execution logs */}
          <div className="absolute top-[10%] left-[5%] w-[80%] bg-brand-dark/80 border border-brand-teal/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl animate-[float_6s_ease-in-out_infinite] hover:border-brand-yellow/40 transition-colors duration-500">
            <div className="flex items-center justify-between pb-4 border-b border-brand-teal/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-brand-mint/55 uppercase tracking-widest">agent-runner-main</span>
            </div>
            <div className="font-mono text-xs text-brand-mint/70 space-y-2">
              <p className="text-brand-yellow">$ vectraos deploy --env=prod</p>
              <p className="text-brand-mint/55">Initializing secure gVisor sandbox...</p>
              <p className="text-brand-mint">✔ Sandbox spun up successfully in 45ms</p>
              <p className="text-brand-mint/90">Evaluating execution path for multi-agents...</p>
              <div className="flex items-center gap-2 pl-3 border-l border-brand-teal/25 text-brand-mint/55">
                <span className="animate-[pulse_1s_infinite] text-brand-orange">●</span>
                <span>subagent-builder-01: Running typescript compilation...</span>
              </div>
              <p className="text-brand-yellow/90">$ logs --stream --id=0491a</p>
            </div>
          </div>

          {/* Floating Card 2: Interactive workflow metric */}
          <div className="absolute bottom-[10%] right-[5%] w-[65%] bg-brand-dark/95 border border-brand-teal/20 backdrop-blur-md rounded-2xl p-5 shadow-2xl animate-[float_8s_ease-in-out_infinite_1s] hover:border-brand-orange/40 transition-colors duration-500">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-brand-mint/90">Weekly System Efficiency</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-teal/20 text-brand-mint border border-brand-teal/30 font-bold">+28.4%</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[11px] text-brand-mint/55 mb-1">
                  <span>Pipeline Optimization Rate</span>
                  <span className="text-brand-mint/90 font-mono">94.2%</span>
                </div>
                <div className="h-1.5 w-full bg-brand-teal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-teal to-brand-orange rounded-full w-[94.2%] animate-[width_2s_ease-out]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-brand-mint/55 mb-1">
                  <span>Self-Healing Triggers</span>
                  <span className="text-brand-mint/90 font-mono">4,120 / week</span>
                </div>
                <div className="h-1.5 w-full bg-brand-teal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange rounded-full w-[78%] animate-[width_2s_ease-out]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
