import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';

const data = {
  slug: 'email-marketing',
  heroTitle: "Email Automation Sends the Right Message at the Right Time—Automatically",
  heroSubtitle: "Stay in Touch Without Manual Effort. Pre-written sequences that send based on where someone is in the buying/selling process.",
  whatIsIt: {
    title: "What is it?",
    description: "It replaces the 'intention vs. reality' cycle of database management. Every person gets relevant messages without you manually hitting send.",
  },
  whyNeedIt: {
    title: "The Follow-Up Problem",
    description: "Manual email follow-up doesn't scale. You do it for 2 months, get busy, and go silent for 6. Automation is consistent, relevant, and scalable.",
    stats: [
      { value: "35-42%", label: "Average Open Rate" },
      { value: "3-7%", label: "Link Click-through rate" },
      { value: "4x", label: "Likelihood of referrals from consistent presence" }
    ]
  },
  features: [
    { title: "New Lead Welcome", description: "Building trust and credibility before prospects are ready to commit." },
    { title: "Buyer/Seller Nurture", description: "Providing value (guides, stats) throughout the 3-12 month journey." },
    { title: "Past Client Retention", description: "Home anniversaries and market reports to generate repeat business." },
    { title: "Cold Lead Reactivation", description: "Specific campaigns designed to recover leads that went silent." },
    { title: "CRM Sync", description: "Ensuring contacts and activities stay updated without double entry." }
  ],
  process: {
    title: "The Email Programs",
    steps: [
      { title: "Import & Clean", desc: "Setting up your database and segmenting by buyer/seller/past client." },
      { title: "Sequence Build", desc: "Configuring pre-written templates that match your brand voice." },
      { title: "Automated Loop", desc: "System runs indefinitely, tracking opens and clicks for you." }
    ]
  },
  timeline: [
    { period: "Short Term", desc: "5-10% of dormant contacts typically re-engage in the first 90 days." },
    { period: "Long Term", desc: "8-15% of nurtured leads eventually convert versus near-zero without touchpoints." }
  ],
  pricing: [
    { 
      name: "Email Automation", 
      price: "$397/mo", 
      setup: "$200",
      features: [
        "Up to 2,500 contacts",
        "5 pre-built campaigns",
        "Monthly newsletter",
        "CRM integration",
        "Compliance management"
      ],
      recommended: true
    }
  ],
  faq: [
    { question: "Won't people get annoyed and unsubscribe?", answer: "Some will. That's okay—they weren't going to use you anyway. Those who stay are your real pipeline." },
    { question: "Do I have to write the content?", answer: "No. We provide proven real estate templates. You can use as-is or add your local flavor in 30 mins a month." }
  ],
  ctaText: "Automate My Database"
};

export const EmailMarketing: React.FC = () => <ServicePageLayout data={data} />;