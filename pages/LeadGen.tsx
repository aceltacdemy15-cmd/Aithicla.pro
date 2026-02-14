import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';

const data = {
  slug: 'lead-generation',
  heroTitle: "Automated Lead Generation Is Actually Just Fast, Consistent Follow-Up",
  heroSubtitle: "Respond to every real estate lead in under 60 seconds. Automated qualification, instant follow-up, and appointment booking while you focus on closings.",
  whatIsIt: {
    title: "What is it?",
    description: "It replaces the parts of lead handling that don't require your personal expertise. It's not about finding leads; it's about responding to them fast enough to actually convert them.",
  },
  whyNeedIt: {
    title: "The Speed Problem",
    description: "Leads contacted within 5 minutes are 21x more likely to convert. Most agents take 4+ hours. Automation answers at 7:30 PM on a Saturday while you're at dinner.",
    stats: [
      { value: "21x", label: "Conversion rate increase" },
      { value: "50%", label: "Choose the FIRST agent who responds" },
      { value: "60s", label: "Target response time" }
    ]
  },
  features: [
    { title: "Instant Response System", description: "Email and SMS confirmation within 60 seconds of any web form submission." },
    { title: "Qualification Automation", description: "Asking the crucial questions (timeline, budget, pre-approval) via bot." },
    { title: "Appointment Booking", description: "Direct calendar links to skip the back-and-forth of phone tag." },
    { title: "Nurture Sequences", description: "Education guides and market updates sent automatically based on timeline." },
    { title: "CRM Integration", description: "Real-time sync with Follow Up Boss, kvCORE, and LionDesk." }
  ],
  process: {
    title: "The Components we Build",
    steps: [
      { title: "Capture & Respond", desc: "Hooking up all lead sources to instant email/SMS triggers." },
      { title: "Conversational Qual", desc: "Deploying bots to ask budget/timeline before you call." },
      { title: "Automated Nurture", desc: "Setting up sequences for long-term prospects (6-18 months)." }
    ]
  },
  timeline: [
    { period: "Response Time", desc: "Goes from hours to under 60s instantly. Booking rates typically rise 40-60%." },
    { period: "Time Saved", desc: "Most agents save 8-12 hours per week on repetitive repetitive follow-up tasks." }
  ],
  pricing: [
    { 
      name: "Lead Response Automation", 
      price: "$997/mo", 
      setup: "$500",
      features: [
        "Instant response (Email/SMS)",
        "Basic voice agent for calls",
        "Website Chatbot",
        "CRM integration",
        "3 Nurture sequences",
        "Appointment booking"
      ],
      recommended: true
    }
  ],
  faq: [
    { question: "Will leads know they're talking to a bot?", answer: "Most expect automated confirmations. People care more about quick answers than whether the responder is human." },
    { question: "Does this replace my CRM?", answer: "No, it enhances it. The automation sits on top and feeds data into your existing relationship manager." }
  ],
  ctaText: "Stop Losing Leads"
};

export const LeadGen: React.FC = () => <ServicePageLayout data={data} />;