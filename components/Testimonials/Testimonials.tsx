'use client';

import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star } from '../Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-36 bg-brand-dark border-b border-brand-teal/10 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[40%] w-[450px] h-[450px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs uppercase tracking-widest text-brand-yellow font-bold mb-4">
            Testimonials
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-light tracking-tight leading-none mb-6">
            Loved by builders worldwide
          </p>
          <p className="text-brand-mint/70 text-lg leading-relaxed">
            See how engineering teams and software founders use our autonomous agents to scale up operations and cut development backlogs.
          </p>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-dark/40 border border-brand-teal/20 hover:border-brand-teal/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-sm group hover:scale-[1.01]"
            >
              {/* Card Body */}
              <div>
                {/* Star rating */}
                <div 
                  className="flex items-center gap-1 mb-6 text-brand-yellow"
                  role="img"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={15} aria-hidden="true" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={`empty-${i}`} size={15} className="text-neutral-700" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-brand-light/90 text-sm leading-relaxed mb-6 font-medium italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Card Footer: Profile Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-teal/10 mt-auto">
                {/* Avatar */}
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-brand-teal/20 border border-brand-teal/20">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-light tracking-tight">{testimonial.name}</div>
                  <div className="text-xs text-brand-mint/65 font-medium">
                    {testimonial.role} at <span className="text-brand-yellow/80">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
