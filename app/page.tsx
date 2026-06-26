import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Features from '../components/Features/Features';
import Workflow from '../components/Workflow/Workflow';
import Pricing from '../components/Pricing/Pricing';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex flex-col w-full min-h-screen bg-[#030303]">
        {/* Hero Section */}
        <Hero />

        {/* Logo Marquee */}
        <TrustedBy />

        {/* Bento / Mobile Accordion Features */}
        <Features />

        {/* 4-step AI Workflow Timeline */}
        <Workflow />

        {/* Pricing Engine Calculator */}
        <Pricing />

        {/* Testimonials Masonry Grid */}
        <Testimonials />

        {/* FAQ slide-down Accordion */}
        <FAQ />

        {/* Call to Action panel */}
        <CTA />
      </main>

      {/* Footer Navigation & Newsletter */}
      <Footer />
    </>
  );
}
