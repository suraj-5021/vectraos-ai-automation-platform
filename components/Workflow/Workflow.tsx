'use client';

import React from 'react';
import { WORKFLOW_STEPS } from '../../constants';
import { IconDispatcher } from '../Icons';

export default function Workflow() {
  return (
    <section id="workflow" className="py-36 bg-brand-dark border-b border-brand-teal/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs uppercase tracking-widest text-brand-yellow font-bold mb-4">
            How it works
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-light tracking-tight leading-none mb-6">
            Autonomous execution in four steps
          </p>
          <p className="text-brand-mint/70 text-lg leading-relaxed">
            Write your objective. Our multi-agent orchestrator makes plans, spins up secure compute runners, resolves issues, and commits the final code.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal Connection Track (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-brand-teal/20 pointer-events-none">
            {/* Active flow pulse line */}
            <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand-yellow to-brand-orange animate-[flowTrack_6s_linear_infinite]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={`step-${step.stepNumber}`} className="flex flex-col items-center text-center group">
                {/* Step Circle Indicator */}
                <div className="relative flex items-center justify-center mb-6">
                  {/* Outer animated ring */}
                  <div className="absolute inset-0 rounded-full bg-brand-yellow/10 scale-100 group-hover:scale-125 border border-brand-yellow/20 group-hover:border-brand-yellow/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Step Node */}
                  <div className="w-20 h-20 rounded-full bg-brand-dark border border-brand-teal/20 group-hover:border-brand-yellow/40 flex items-center justify-center text-brand-light relative z-10 shadow-2xl transition-all duration-300">
                    <IconDispatcher name={step.iconName} className="text-brand-mint/60 group-hover:text-brand-yellow transition-colors duration-300" size={28} />
                    
                    {/* Step Number Tag */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-tr from-brand-yellow to-brand-orange text-black font-extrabold text-[10px] flex items-center justify-center border border-brand-dark shadow">
                      {step.stepNumber}
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="max-w-[280px]">
                  <h3 className="text-lg font-bold text-brand-light mb-2 tracking-tight group-hover:text-brand-yellow transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-mint/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
