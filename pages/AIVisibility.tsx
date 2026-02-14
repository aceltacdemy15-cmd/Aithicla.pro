import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';

const data = {
  slug: 'ai-visibility',
  heroTitle: "AI Visibility Means Showing Up When People Ask AI for Real Estate Recommendations",
  heroSubtitle: "Help AI assistants find and recommend your real estate business. Optimization for ChatGPT, Perplexity, Google Gemini, and other AI search platforms.",
  whatIsIt: {
    title: "What is AI Visibility?",
    description: "When someone opens ChatGPT and asks 'Who should I work with to buy a house in [city]?' the AI provides a list of names. Your goal is to be on that list.",
    extra: "It's not SEO. It's similar to SEO, but optimizing for large language models instead of traditional search algorithms."
  },
  whyNeedIt: {
    title: "The Search Behavior Shift",
    description: "Traditional search is keywords; AI search is natural language questions with 2-4 direct recommendations. ChatGPT gets over 3 billion visits monthly. If you aren't in the AI's knowledge base, you don't get recommended.",
    stats: [
      { value: "3B+", label: "Monthly ChatGPT visits" },
      { value: "67%", label: "Searchers trust direct AI answers" },
      { value: "12%", label: "Average organic click-through drop" }
    ]
  },
  features: [
    { title: "Entity Recognition", description: "Standardizing NAP and Google Business Profile for AI parsing." },
    { title: "Authoritative Mentions", description: "Getting featured on news and high-authority sites to weigh AI sources." },
    { title: "Recent Activity Signals", description: "Ensuring fresh content and reviews signal relevance to the models." },
    { title: "Contextual Relevance", description: "Matching recommendations to specific user contexts (e.g., family-friendly)." },
    { title: "Review Sentiment", description: "Strengthening position through analyzed sentiment across multiple platforms." },
    { title: "Network Signals", description: "Establishing credibility through associations with recognized entities." }
  ],
  process: {
    title: "The Actual Process",
    steps: [
      { title: "Audit (Week 1-2)", desc: "We test visibility across 8+ platforms and document missing information." },
      { title: "Foundation (Week 3-4)", desc: "Optimizing schema markup and standardizing entity basics." },
      { title: "Content (Week 5-8)", desc: "Developing guides and analysis that AI models can reference." },
      { title: "Authority (Week 9-12)", desc: "Building external signals via press releases and industry platforms." },
      { title: "Monitoring (Ongoing)", desc: "Tracking presence monthly and adjusting to algorithm shifts." }
    ]
  },
  timeline: [
    { period: "Month 1", desc: "Technical improvements installed. No major AI mention shifts yet as models ingest data." },
    { period: "Month 2", desc: "You'll start appearing in 2-3 out of 10 relevant test queries. You're on the board." },
    { period: "Month 3", desc: "Presence increases to 5-7 out of 10 queries. Consistent inclusion begins." },
    { period: "Month 4-6", desc: "Position strengthens. AI descriptions of your business become detailed and accurate." }
  ],
  pricing: [
    { 
      name: "AI Visibility Optimization", 
      price: "$1,500/mo", 
      setup: "$1,000",
      features: [
        "Initial comprehensive audit",
        "Technical schema/citation work",
        "4 monthly articles/guides",
        "1-2 press releases monthly",
        "Monthly monitoring & reporting",
        "Strategy adjustments"
      ],
      recommended: true
    }
  ],
  faq: [
    { question: "How do you prove AI visibility caused a lead to contact me?", answer: "Perfect attribution is hard, but we track queries and leads who report finding you via AI. If visibility rises, inquiries follow." },
    { question: "Can't I just do this myself?", answer: "Yes, if you have time to master LLM training patterns and monitor 8 platforms monthly. Most agents prefer to let us handle the technical work." },
    { question: "Do you guarantee first position?", answer: "No. We can't control AI decisions directly, but we make you far more likely to appear than an unoptimized competitor." }
  ],
  ctaText: "Get AI Visibility Audit"
};

export const AIVisibility: React.FC = () => <ServicePageLayout data={data} />;