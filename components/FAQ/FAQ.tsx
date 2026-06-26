'use client';

import React, { useState } from 'react';
import { FAQS } from '../../constants';
import { ChevronDown } from '../Icons';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-36 bg-brand-dark border-b border-brand-teal/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs uppercase tracking-widest text-brand-yellow font-bold mb-4">
            FAQ
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-light tracking-tight leading-none mb-6">
            Frequently Asked Questions
          </p>
          <p className="text-brand-mint/70 text-lg leading-relaxed">
            Got questions about integrations, security sandboxes, or billing calculations? We have compiled responses to help you get started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-brand-teal/20 bg-brand-dark/40 backdrop-blur-sm transition-all duration-300"
              >
                {/* Accordion Title Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-t-xl group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <span className="font-bold text-brand-light text-base sm:text-lg tracking-tight group-hover:text-brand-yellow transition-colors duration-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-brand-mint/70 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-light' : 'group-hover:text-neutral-200'}`}
                  />
                </button>

                {/* Collapsible Panel with smooth CSS transition */}
                <div
                  id={`faq-content-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-mint/70 leading-relaxed border-t border-brand-teal/10 bg-brand-dark/20">
                      {faq.answer}
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
