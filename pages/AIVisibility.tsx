import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';
import { ServicePageData } from '../types';

const data: ServicePageData = {
  slug: 'ai-visibility',
  heroTitle: "Get Found in ChatGPT, Perplexity & AI Search",
  heroSubtitle: "EthicalPro's AI visibility optimization ensures ChatGPT, Perplexity, and Google SGE recommend your services to potential clients first.",
  whatIsIt: {
    title: "What is AI Visibility?",
    description: "AI Visibility is the new SEO. While traditional search optimizes for blue links, AI Visibility ensures your business appears when users ask conversational questions to assistants like ChatGPT, Claude, and Gemini. We optimize your digital entity so AI engines recognize, trust, and recommend you as the authority."
  },
  whyNeedIt: {
    title: "Why AI Visibility Matters",
    description: "67% of home buyers now start their search using AI tools. If your business isn't optimized for AI, you are invisible to this growing audience. Competitors who optimize early gain a massive, defensible advantage.",
    stats: [
      { value: "40%", label: "Real estate queries answered by AI without clicks" },
      { value: "340%", label: "Higher brand recognition for AI-visible agents" },
      { value: "180M+", label: "Users asking ChatGPT business questions" }
    ]
  },
  features: [
    { title: "Entity & Schema Optimization", description: "We build robust knowledge graph entries and schema markup so AI understands exactly who you are." },
    { title: "AI Business Avatar", description: "We create a comprehensive knowledge base about your business that AI systems ingest and reference." },
    { title: "Competitive Gap Analysis", description: "Identify exactly where your competitors are weak in AI results and dominate those niches." },
    { title: "Google Business AI Opt", description: "Optimize your GMB profile specifically for Google's SGE (Search Generative Experience)." },
    { title: "Blue Ocean Strategy", description: "Find untapped market positioning that AI engines are desperate to find answers for." },
    { title: "Reputation Management", description: "Automated review systems that reinforce your authority signals to AI algorithms." }
  ],
  process: {
    title: "How We optimize you",
    steps: [
      { title: "Audit & Analysis", desc: "We test your visibility across 8+ AI platforms to find gaps." },
      { title: "Entity Construction", desc: "We build the structured data layer that speaks AI's language." },
      { title: "Authority Building", desc: "We distribute content and press that validates your expertise to the algorithms." }
    ]
  },
  faq: [
    { question: "How long does it take to appear in AI results?", answer: "Initial improvements typically appear within 30-45 days. Full optimization achieving consistent recommendations takes 60-90 days." },
    { question: "Will this replace traditional SEO?", answer: "No, they complement each other. Google is still huge, but AI search is the fastest growing channel. We optimize for both." },
    { question: "Can competitors copy my strategy?", answer: "We build defensible advantages through entity strength and unique market positioning that takes months to replicate." }
  ],
  ctaText: "Get AI Visibility Audit"
};

export const AIVisibility: React.FC = () => <ServicePageLayout data={data} />;
