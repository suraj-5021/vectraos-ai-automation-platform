'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useScroll } from '../../hooks/useScroll';
import { Menu, X } from '../Icons';

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.substring(1));
  const { isScrolled, activeSection } = useScroll(sectionIds);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-md border-b border-brand-teal/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-50 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none rounded-lg" aria-label="VectraOS Home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-yellow to-brand-orange flex items-center justify-center shadow-lg shadow-brand-yellow/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-black font-extrabold text-lg leading-none">V</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight group-hover:text-white/95 transition-colors">
            VectraOS<span className="text-brand-orange font-bold">.</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`relative text-sm tracking-wide transition-colors hover:text-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md px-1.5 py-0.5 ${
                  isActive ? 'text-brand-light font-medium' : 'text-brand-mint/70'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-yellow rounded-full animate-[fade_0.3s_ease-out-in]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="text-brand-mint/90 hover:text-brand-light text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded-md px-1.5 py-0.5"
          >
            Sign In
          </Link>
          <a
            href="#pricing"
            onClick={(e) => handleScrollTo(e, '#pricing')}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-yellow text-black hover:bg-brand-yellow/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(255,200,1,0.15)] cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Start Free
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-mint/70 hover:text-brand-light transition-colors duration-200 z-50 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center px-8 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-2xl font-medium">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg px-2 py-1 ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                } ${isActive ? 'text-brand-yellow' : 'text-brand-mint/70 hover:text-brand-light'}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {item.label}
              </a>
            );
          })}
          <hr className="border-brand-teal/30 my-4" />
          <div className="flex flex-col gap-4">
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="text-brand-mint/70 hover:text-brand-light text-lg py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg px-2"
            >
              Sign In
            </Link>
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, '#pricing')}
              className="w-full py-4 text-center rounded-xl font-bold bg-gradient-to-r from-brand-yellow to-brand-orange text-black shadow-lg shadow-brand-yellow/20 active:scale-[0.98] transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark cursor-pointer"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
