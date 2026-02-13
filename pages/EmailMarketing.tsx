import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';
import { ServicePageData } from '../types';

const data: ServicePageData = {
  slug: 'email-marketing',
  heroTitle: "Email Automation That Retains Clients",
  heroSubtitle: "Stay top-of-mind with every lead and past client automatically. Nurture leads until they buy, and turn past clients into referral machines.",
  whatIsIt: {
    title: "What is Email Automation?",
    description: "It's a systematic approach to relationship maintenance. Instead of manual follow-ups, our system sends personalized welcome sequences, property alerts, market updates, and home anniversary emails based on client behavior. It ensures no lead falls through the cracks."
  },
  whyNeedIt: {
    title: "The Relationship Crisis",
    description: "Most agents give up after 2 contacts, but buyers need 8-12 touches. 88% of clients say they'd use their agent again, but only 12% do because they forget them. Automation solves this retention gap permanently.",
    stats: [
      { value: "$42", label: "ROI for every $1 spent on email" },
      { value: "320%", label: "More revenue from automated emails" },
      { value: "79%", label: "Leads lost without nurture" }
    ]
  },
  features: [
    { title: "Smart Drip Campaigns", description: "Behavior-triggered sequences for buyers, sellers, and investors." },
    { title: "Property Match Alerts", description: "Automated emails featuring new listings that match client criteria." },
    { title: "Market Newsletters", description: "Monthly local market stats and trends content created for you." },
    { title: "Client Retention", description: "Home anniversary, birthday, and home value update emails." },
    { title: "Behavioral Triggers", description: "Send specific emails when a lead visits your site or clicks a link." },
    { title: "Re-Engagement", description: "Win-back campaigns that reactivate cold leads from your database." }
  ],
  pricing: [
    { name: "Starter", price: "$297/mo", features: ["2,500 Contacts", "5 Campaigns", "Monthly Newsletter", "Basic Analytics"] },
    { name: "Professional", price: "$597/mo", features: ["10,000 Contacts", "Unlimited Campaigns", "Weekly Content", "Advanced Segments"], recommended: true },
    { name: "Enterprise", price: "$1,197/mo", features: ["50,000 Contacts", "Custom Content", "White Label", "Dedicated Manager"] }
  ],
  faq: [
    { question: "How often should I email?", answer: "New leads get frequent touches (2-3x/week), while long-term nurtures get value 2-4x/month. Our system handles this cadence." },
    { question: "What should I write?", answer: "We provide all content templates and topic calendars. You don't have to write a word unless you want to." },
    { question: "Will I end up in spam?", answer: "We handle technical setup (DKIM, SPF) and list hygiene to ensure 97%+ inbox placement rates." }
  ],
  ctaText: "Automate Email Marketing"
};

export const EmailMarketing: React.FC = () => <ServicePageLayout data={data} />;
