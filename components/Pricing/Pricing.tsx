'use client';

import React, { useCallback } from 'react';
import { usePricing } from '../../hooks/usePricing';
import { PRICING_PLANS } from '../../constants';
import { Currency, BillingCycle } from '../../types';
import { Check } from '../Icons';

// Memoized Pricing Toggle Switch for Cycles
const BillingControls = React.memo(({
  billingCycle,
  onChange
}: {
  billingCycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}) => {
  return (
    <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-brand-teal/10">
      <button
        onClick={() => onChange('monthly')}
        aria-checked={billingCycle === 'monthly'}
        role="radio"
        className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none cursor-pointer ${
          billingCycle === 'monthly'
            ? 'bg-brand-teal/30 text-brand-light shadow-sm'
            : 'text-neutral-400 hover:text-neutral-200'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange('yearly')}
        aria-checked={billingCycle === 'yearly'}
        role="radio"
        className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none cursor-pointer ${
          billingCycle === 'yearly'
            ? 'bg-brand-teal/30 text-brand-light shadow-sm'
            : 'text-neutral-400 hover:text-neutral-200'
        }`}
      >
        Yearly
        <span className="px-1.5 py-0.5 rounded-full bg-brand-yellow/20 text-brand-yellow text-[9px] font-bold tracking-tight lowercase">
          -20%
        </span>
      </button>
    </div>
  );
});
BillingControls.displayName = 'BillingControls';

// Memoized Currency Selector Selector
const CurrencyControls = React.memo(({
  currency,
  onChange
}: {
  currency: Currency;
  onChange: (currency: Currency) => void;
}) => {
  const currencies: Currency[] = ['USD', 'EUR', 'INR'];
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Currency:</span>
      <div className="inline-flex rounded-lg bg-neutral-900 border border-brand-teal/10 overflow-hidden" role="radiogroup" aria-label="Currency selection">
        {currencies.map((curr) => (
          <button
            key={curr}
            onClick={() => onChange(curr)}
            aria-checked={currency === curr}
            role="radio"
            className={`px-3.5 py-1.5 text-xs font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none cursor-pointer ${
              currency === curr
                ? 'bg-brand-yellow text-black'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
            }`}
          >
            {curr}
          </button>
        ))}
      </div>
    </div>
  );
});
CurrencyControls.displayName = 'CurrencyControls';

// Memoized Pricing Card component to isolate pricing re-renders
const PricingCard = React.memo(({
  name,
  description,
  formattedPrice,
  formattedMonthly,
  billingCycle,
  features,
  ctaText,
  isPopular
}: {
  name: string;
  description: string;
  formattedPrice: string;
  formattedMonthly: string;
  billingCycle: BillingCycle;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}) => {
  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between p-8 backdrop-blur-sm transition-all duration-300 ${
        isPopular
          ? 'bg-brand-teal/10 border-2 border-brand-yellow shadow-[0_20px_50px_rgba(255,200,1,0.1)] scale-[1.03] z-10'
          : 'bg-brand-dark/40 border border-brand-teal/20 hover:border-brand-teal/30'
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange text-black text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold text-brand-light mb-2">{name}</h3>
        <p className="text-sm text-brand-mint/70 min-h-[40px] leading-relaxed mb-6">
          {description}
        </p>

        {/* Pricing text - only this updates when toggled */}
        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-extrabold text-brand-light tracking-tight">
            {billingCycle === 'yearly' ? formattedMonthly : formattedPrice}
          </span>
          <span className="text-neutral-500 text-sm font-medium">/ month</span>
        </div>

        {billingCycle === 'yearly' && (
          <div className="text-xs text-brand-yellow font-semibold mb-6">
            Billed annually ({formattedPrice} total)
          </div>
        )}

        <hr className="border-brand-teal/10 mb-6" />

        {/* Features list */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-brand-mint/80">
              <span className="flex-none w-5 h-5 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mt-0.5">
                <Check size={12} />
              </span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark cursor-pointer ${
          isPopular
            ? 'bg-gradient-to-r from-brand-yellow to-brand-orange text-black font-extrabold shadow-lg shadow-brand-yellow/25 hover:from-brand-yellow/90 hover:to-brand-orange/90'
            : 'bg-neutral-900 hover:bg-neutral-800 text-brand-light border border-brand-teal/20 hover:border-brand-teal/40'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
});
PricingCard.displayName = 'PricingCard';

export default function Pricing() {
  const { currency, billingCycle, setCurrency, setBillingCycle, getPlanPrice } = usePricing();

  // Memoize handlers to prevent toggle re-renders
  const handleCurrencyChange = useCallback((curr: Currency) => {
    setCurrency(curr);
  }, [setCurrency]);

  const handleBillingChange = useCallback((cycle: BillingCycle) => {
    setBillingCycle(cycle);
  }, [setBillingCycle]);

  return (
    <section id="pricing" className="py-36 bg-brand-dark border-b border-brand-teal/10 relative">
      {/* Background glow highlights */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-brand-teal/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-yellow font-bold mb-4">
            Pricing Plans
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-light tracking-tight leading-none mb-6">
            Transparent pricing for teams of any size
          </p>
          <p className="text-brand-mint/70 text-lg leading-relaxed">
            Choose the package that matches your operational needs. All plans include secure sandboxes. Change or cancel cycles anytime.
          </p>
        </div>

        {/* Filters Panel: Isolated re-rendering controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <BillingControls billingCycle={billingCycle} onChange={handleBillingChange} />
          <CurrencyControls currency={currency} onChange={handleCurrencyChange} />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            // Computed lookup is fast and memoized inside components
            const pricing = getPlanPrice(plan.id);

            return (
              <PricingCard
                key={plan.id}
                name={plan.name}
                description={plan.description}
                formattedPrice={pricing.formattedPrice}
                formattedMonthly={pricing.formattedMonthly}
                billingCycle={billingCycle}
                features={plan.features}
                ctaText={plan.ctaText}
                isPopular={plan.isPopular}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
