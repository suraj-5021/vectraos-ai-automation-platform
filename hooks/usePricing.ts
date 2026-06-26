'use client';

import { useState, useMemo } from 'react';
import { Currency, BillingCycle, PricingPlan } from '../types';
import { calculatePlanPrice, CalculatedPrice } from '../utils/pricingEngine';

export interface UsePricingReturn {
  currency: Currency;
  billingCycle: BillingCycle;
  setCurrency: (currency: Currency) => void;
  setBillingCycle: (cycle: BillingCycle) => void;
  getPlanPrice: (planId: PricingPlan['id']) => CalculatedPrice;
}

export function usePricing(initialCurrency: Currency = 'USD', initialCycle: BillingCycle = 'monthly'): UsePricingReturn {
  const [currency, setCurrency] = useState<Currency>(initialCurrency);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);

  // Memoize the getter function to avoid redundant calculations on renders
  const pricingLookup = useMemo(() => {
    return (planId: PricingPlan['id']) => calculatePlanPrice(planId, billingCycle, currency);
  }, [billingCycle, currency]);

  return {
    currency,
    billingCycle,
    setCurrency,
    setBillingCycle,
    getPlanPrice: pricingLookup
  };
}
