export type Currency = 'USD' | 'EUR' | 'INR';
export type BillingCycle = 'monthly' | 'yearly';

export interface PricingPlan {
  id: 'starter' | 'professional' | 'enterprise';
  name: string;
  description: string;
  basePrice: {
    USD: number;
    EUR: number;
    INR: number;
  };
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  gridSpanClass: string;
  gradientClass: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
