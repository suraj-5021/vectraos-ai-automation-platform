'use client';

import React, { useState } from 'react';
import { ArrowRight } from '../Icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API request latency
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <footer className="bg-brand-dark text-brand-mint/70 py-24 border-t border-brand-teal/10 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Branding, Links, and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 pb-12 border-b border-brand-teal/10">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group focus:ring-2 focus:ring-brand-yellow focus:outline-none rounded-lg" aria-label="VectraOS Home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-yellow to-brand-orange flex items-center justify-center shadow-lg">
                <span className="text-black font-extrabold text-lg leading-none">V</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">
                VectraOS<span className="text-brand-orange font-bold">.</span>
              </span>
            </a>
            <p className="text-sm text-brand-mint/55 leading-relaxed max-w-xs">
              VectraOS is an enterprise-grade AI automation platform that streamlines workflows, accelerates intelligent decision-making, and enables scalable enterprise data operations.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Features</a></li>
              <li><a href="#workflow" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Workflow</a></li>
              <li><a href="#pricing" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Changelog</a></li>
            </ul>
          </div>

          {/* Links Column 2: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">System Status</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Guides & Tutorials</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Community Slack</a></li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">About Us</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Careers</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Brand Assets</a></li>
              <li><a href="#" className="hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Security (SOC-2)</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-light mb-4">Newsletter</h4>
            <p className="text-xs text-brand-mint/55 leading-relaxed">
              Subscribe to get updates on runtime features, sandbox speedups, and documentation releases.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="you@domain.com"
                aria-label="Email address for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'success' || status === 'loading'}
                className="w-full bg-brand-teal/20 border border-brand-teal/20 rounded-lg px-4 py-3 text-sm text-brand-light placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'success' || status === 'loading'}
                aria-label="Subscribe to newsletter"
                className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-brand-yellow hover:bg-brand-yellow/90 text-black text-xs font-bold transition-all duration-200 flex items-center justify-center cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {status === 'loading' ? '...' : status === 'success' ? 'Joined!' : <ArrowRight size={14} />}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-[10px] text-brand-mint font-semibold animate-pulse">
                ✓ Check your inbox to confirm your subscription!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-brand-mint/40 gap-4">
          <div>
            &copy; {new Date().getFullYear()} VectraOS Systems Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-mint/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Twitter</a>
            <a href="#" className="hover:text-brand-mint/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">GitHub</a>
            <a href="#" className="hover:text-brand-mint/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Discord</a>
            <a href="#" className="hover:text-brand-mint/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Privacy Policy</a>
            <a href="#" className="hover:text-brand-mint/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
