import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';
import { ServicePageData } from '../types';

const data: ServicePageData = {
  slug: 'lead-generation',
  heroTitle: "Automated Real Estate Lead Generation",
  heroSubtitle: "Generate qualified buyer and seller leads automatically. Our AI systems attract, capture, and qualify prospects 24/7 without manual effort.",
  whatIsIt: {
    title: "What is Automated Lead Gen?",
    description: "It transforms your business from hunting to gathering. We deploy high-converting funnels, smart chatbots, and automated nurture sequences that work continuously in the background. The system identifies prospects, captures their info, qualifies their readiness, and hands you sales-ready leads."
  },
  whyNeedIt: {
    title: "Why Manual Lead Gen Fails",
    description: "You can't be prospecting and showing homes at the same time. Manual efforts are inconsistent and slow. Research shows leads contacted within 5 minutes are 21x more likely to convert—our automation does this instantly.",
    stats: [
      { value: "47", label: "Avg. qualified leads/mo per client" },
      { value: "21x", label: "Higher conversion with instant response" },
      { value: "100%", label: "Leads followed up automatically" }
    ]
  },
  features: [
    { title: "AI-Powered Funnels", description: "High-converting landing pages for buyers, sellers, and home valuations." },
    { title: "Smart Lead Scoring", description: "Automatically prioritize leads based on budget, timeline, and engagement." },
    { title: "Multi-Channel Capture", description: "Capture leads from web, SMS, social media, and QR codes into one system." },
    { title: "Instant Qualification", description: "Chatbots ask the right questions to separate serious buyers from tire-kickers." },
    { title: "CRM Integration", description: "Real-time sync with Follow Up Boss, kvCORE, LionDesk, and more." },
    { title: "Nurture Sequences", description: "Long-term drip campaigns that keep you top-of-mind until they are ready to transact." }
  ],
  pricing: [
    { name: "Starter", price: "$997/mo", features: ["2 Lead Funnels", "Basic Chatbot", "Email Nurture", "CRM Integration"] },
    { name: "Professional", price: "$1,997/mo", features: ["5 Lead Funnels", "Advanced Chatbot", "SMS Automation", "Voice Agent Integration"], recommended: true },
    { name: "Enterprise", price: "$3,997/mo", features: ["Unlimited Funnels", "Custom Integrations", "Market Exclusivity", "Priority Support"] }
  ],
  faq: [
    { question: "How many leads can I expect?", answer: "Results vary, but clients average 40-80 qualified leads monthly. We focus on quality over quantity." },
    { question: "Do I need to pay for ads?", answer: "It is recommended for fastest results, but our system works with organic traffic too. Most successful clients use a hybrid approach." },
    { question: "Is this better than Zillow leads?", answer: "Yes. You OWN these leads. They aren't sold to 5 other agents, and the cost per acquisition is significantly lower." }
  ],
  ctaText: "Start Getting Leads Automatically"
};

export const LeadGen: React.FC = () => <ServicePageLayout data={data} />;
