import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';
import { ServicePageData } from '../types';

const data: ServicePageData = {
  slug: 'voice-agents',
  heroTitle: "AI Voice Agents That Never Sleep",
  heroSubtitle: "24/7 automated phone answering, appointment booking, and lead qualification. Never miss a potential commission due to a missed call again.",
  whatIsIt: {
    title: "What are Voice Agents?",
    description: "Voice Agents are AI-powered assistants that handle calls with natural, human-like conversations. They answer instantly, book appointments on your calendar, answer property questions, and qualify leads. Unlike voicemail, they actually solve the caller's problem."
  },
  whyNeedIt: {
    title: "The Cost of Missed Calls",
    description: "The average agent misses 47% of calls. 80% of callers won't leave a voicemail—they just call the next agent. A missed call is often a lost $10k commission. Voice agents ensure 100% answer rate.",
    stats: [
      { value: "100%", label: "Call Answer Rate" },
      { value: "24/7", label: "Availability (Nights & Weekends)" },
      { value: "$0", label: "Cost of hiring human receptionists" }
    ]
  },
  features: [
    { title: "Intelligent Answering", description: "Answers within 2 rings with context-aware, natural conversation." },
    { title: "Appointment Scheduling", description: "Integrates with your calendar to book showings and consultations directly." },
    { title: "Lead Qualification", description: "Asks budget, timeline, and pre-approval questions before notifying you." },
    { title: "Property Q&A", description: "Pull info from your listings to answer specific questions about homes." },
    { title: "Multi-Language", description: "Fluent in Spanish and 40+ other languages to serve diverse markets." },
    { title: "Call Transcription", description: "Full text logs of every call sent to your CRM and email instantly." }
  ],
  pricing: [
    { name: "Essential", price: "$497/mo", features: ["1 Phone Number", "24/7 Answering", "Basic Booking", "500 Mins Included"] },
    { name: "Professional", price: "$997/mo", features: ["Multiple Numbers", "Advanced Qual.", "Lead Scoring", "1,500 Mins Included"], recommended: true },
    { name: "Enterprise", price: "$1,997/mo", features: ["Unlimited Numbers", "Team Routing", "Custom Logic", "5,000 Mins Included"] }
  ],
  faq: [
    { question: "Do they sound robotic?", answer: "No. Modern AI voice tech is remarkably natural, using pauses, fillers, and emotional tone matching." },
    { question: "Can they transfer to me?", answer: "Yes. For urgent matters or VIPs, the agent can warm transfer the call to your cell instantly." },
    { question: "Is it compliant?", answer: "Yes, our system complies with all recording laws and can include automatic disclosures if required." }
  ],
  ctaText: "Activate Voice Agents"
};

export const VoiceAgents: React.FC = () => <ServicePageLayout data={data} />;
