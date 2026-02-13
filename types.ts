export interface ServiceFeature {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ServicePageData {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  whatIsIt: {
    title: string;
    description: string;
  };
  whyNeedIt: {
    title: string;
    description: string;
    stats: StatItem[];
  };
  features: ServiceFeature[];
  process?: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  pricing?: PricingPackage[];
  faq: FAQItem[];
  ctaText: string;
}
