import { Currency, BillingCycle, PricingPlan } from '../types';
import { PRICING_PLANS } from '../constants';

export interface PricingEngineConfig {
  annualDiscountPercent: number;
  currencySymbols: Record<Currency, string>;
  currencyLocales: Record<Currency, string>;
}

export const DEFAULT_PRICING_CONFIG: PricingEngineConfig = {
  annualDiscountPercent: 20, // 20% discount on yearly cycles
  currencySymbols: {
    USD: '$',
    EUR: '€',
    INR: '₹'
  },
  currencyLocales: {
    USD: 'en-US',
    EUR: 'de-DE',
    INR: 'en-IN'
  }
};

export interface CalculatedPrice {
  rawPrice: number;
  monthlyEquivalent: number;
  formattedPrice: string;
  formattedMonthly: string;
  symbol: string;
}

export function calculatePlanPrice(
  planId: PricingPlan['id'],
  billingCycle: BillingCycle,
  currency: Currency,
  config: PricingEngineConfig = DEFAULT_PRICING_CONFIG
): CalculatedPrice {
  const plan = PRICING_PLANS.find((p) => p.id === planId);
  if (!plan) {
    throw new Error(`Plan with ID ${planId} was not found.`);
  }

  const baseMonthlyPrice = plan.basePrice[currency];
  
  let rawPrice = baseMonthlyPrice;
  let monthlyEquivalent = baseMonthlyPrice;

  if (billingCycle === 'yearly') {
    const discountMultiplier = (100 - config.annualDiscountPercent) / 100;
    monthlyEquivalent = Math.round(baseMonthlyPrice * discountMultiplier * 100) / 100;
    rawPrice = Math.round(monthlyEquivalent * 12 * 100) / 100;
  }

  const symbol = config.currencySymbols[currency];
  const locale = config.currencyLocales[currency];

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return {
    rawPrice,
    monthlyEquivalent,
    formattedPrice: formatter.format(rawPrice),
    formattedMonthly: formatter.format(monthlyEquivalent),
    symbol
  };
}
