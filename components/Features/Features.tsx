'use client';

import React, { useState } from 'react';
import { FEATURES } from '../../constants';
import { IconDispatcher, ChevronDown } from '../Icons';

export default function Features() {
  // Shared active selection state (syncs Bento Grid and Mobile Accordion)
  const [activeId, setActiveId] = useState<string>(FEATURES[0].id);

  const toggleAccordion = (id: string) => {
    // If clicking the already open item, close it (or keep it open for consistency)
    setActiveId(activeId === id ? '' : id);
  };

  return (
    <section id="features" className="py-36 bg-brand-dark border-b border-brand-teal/10 relative">
      {/* Background blur glows */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs uppercase tracking-widest text-brand-yellow font-bold mb-4">
            Advanced Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Engineered for high-autonomy automation
          </p>
          <p className="text-brand-mint/70 text-lg leading-relaxed">
            Everything you need to orchestrate agent jobs safely. Powered by isolated runtime clusters and modern visual debugging dashboards.
          </p>
        </div>

        {/* Desktop Bento Grid: Hidden on mobile, visible on md and up */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const isActive = activeId === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`relative text-left overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[220px] focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark cursor-pointer ${
                  isActive
                    ? 'border-brand-yellow/60 bg-brand-teal/20 shadow-lg shadow-brand-yellow/5'
                    : 'border-brand-teal/20 bg-brand-dark/40 hover:border-brand-teal/40'
                } ${feature.gridSpanClass}`}
              >
                {/* Radial Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientClass} opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Icon & Title */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-brand-teal/10 flex items-center justify-center text-white mb-6 transition-all duration-300">
                    <IconDispatcher name={feature.iconName} className="text-brand-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight transition-colors">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="px-6 pb-6 text-sm text-brand-mint/75 leading-relaxed mt-auto relative z-10">
                  {feature.description}
                </p>

                {/* Border animation accent line */}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent transition-transform duration-500 ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Mobile Accordion: Visible on small screens, hidden on md and up */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {FEATURES.map((feature) => {
            const isOpen = activeId === feature.id;
            return (
              <div
                key={`accordion-${feature.id}`}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-brand-yellow/60 bg-brand-teal/20' : 'border-brand-teal/20 bg-brand-dark/40'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(feature.id)}
                  className="w-full px-5 py-5 flex items-center justify-between text-left focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-t-xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${feature.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-brand-teal/10 flex items-center justify-center text-brand-yellow">
                      <IconDispatcher name={feature.iconName} size={20} />
                    </div>
                    <span className="font-bold text-white tracking-tight">{feature.title}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}
                  />
                </button>

                {/* Collapsible Panel */}
                <div
                  id={`accordion-content-${feature.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-sm text-brand-mint/70 leading-relaxed border-t border-brand-teal/10 bg-brand-dark/20">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
