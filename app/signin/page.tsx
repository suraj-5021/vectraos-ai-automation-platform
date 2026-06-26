'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-brand-light flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Card Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-mint/55 hover:text-brand-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1.5 py-0.5"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden rounded-3xl border border-brand-teal/20 bg-brand-dark/80 backdrop-blur-md p-8 sm:p-10 shadow-2xl">
          {/* Subtle inner gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/5 via-transparent to-brand-orange/5 pointer-events-none" />

          {/* Branding */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-yellow to-brand-orange flex items-center justify-center shadow-lg shadow-brand-yellow/20 mb-4">
              <span className="text-black font-extrabold text-xl leading-none">V</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Sign in to VectraOS</h1>
            <p className="text-xs text-brand-mint/55 mt-2">Enter your credentials to access your automation workspace.</p>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow mx-auto">
                ✓
              </div>
              <h2 className="text-lg font-bold text-brand-light">Access Authorized</h2>
              <p className="text-sm text-brand-mint/70">
                You have successfully signed in to the prototype workspace.
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="w-full inline-block text-center py-3 rounded-xl font-bold bg-brand-yellow text-black hover:bg-brand-yellow/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-brand-mint/65 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-teal/20 border border-brand-teal/20 rounded-xl px-4 py-3 text-sm text-brand-light placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow transition-colors"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-brand-mint/65">
                    Password
                  </label>
                  <a href="#" className="text-xs text-brand-yellow hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-brand-teal/20 border border-brand-teal/20 rounded-xl px-4 py-3 text-sm text-brand-light placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-brand-yellow text-black hover:bg-brand-yellow/90 hover:scale-[1.01] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark cursor-pointer flex items-center justify-center disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          )}

          {/* Prototype Notice Note */}
          <div className="mt-8 pt-6 border-t border-brand-teal/10 text-center">
            <div className="inline-block px-3 py-1.5 rounded-lg bg-neutral-900 border border-brand-teal/10 text-[11px] text-brand-mint/55 leading-normal">
              <span className="text-brand-orange font-bold uppercase mr-1">Prototype Notice:</span>
              This is a frontend prototype. Full authentication is mock-only.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
