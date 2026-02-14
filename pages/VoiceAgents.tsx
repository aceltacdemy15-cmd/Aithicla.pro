import React from 'react';
import { ServicePageLayout } from '../components/ServicePageLayout';

const data = {
  slug: 'voice-agents',
  heroTitle: "AI Voice Agents Answer Your Phone So You Don't Have To",
  heroSubtitle: "24/7 Phone Answering & Appointment Booking. Conversational AI that handles property questions and qualifies leads while you're in showings.",
  whatIsIt: {
    title: "What are Voice Agents?",
    description: "It's not an answering service taking messages; it's conversational software that handles the call start to finish. It answers property questions, books showings, and qualifies sellers.",
  },
  whyNeedIt: {
    title: "The Missed Call Problem",
    description: "Average agents miss 60% of calls while in appointments. 80% of callers won't leave a voicemail—they call the next agent. A missed call is a missed $15k commission.",
    stats: [
      { value: "60%", label: "Average missed call rate" },
      { value: "100%", label: "Answer rate with AI" },
      { value: "70%", label: "Calls resolved without human intervention" }
    ]
  },
  features: [
    { title: "Property Inquiry Handling", description: "Trained on your listings to provide price and spec info instantly." },
    { title: "Live Warm Transfers", description: "Urgent or VIP calls can be routed to your cell with context." },
    { title: "Booking Integration", description: "Scheduling showing appointments directly on your calendar." },
    { title: "CRM Logging", description: "Full transcripts and summaries automatically saved to your lead records." },
    { title: "Seller Qualification", description: "Asking address, timeline, and motivation during initial inbound." }
  ],
  process: {
    title: "Setup and Customization",
    steps: [
      { title: "Discovery", desc: "Gathering your listing info, talking points, and preferred call flows." },
      { title: "Training", desc: "Configuring the AI with your business hours, location, and specialties." },
      { title: "Testing & Launch", desc: "Refining responses through test calls before going live." }
    ]
  },
  timeline: [
    { period: "Limitations", desc: "AI can't handle complex negotiations or interpret market nuances. It hands these to you." },
    { period: "Outcome", desc: "Callers appreciate immediate help. 'They actually answer' becomes your differentiator." }
  ],
  pricing: [
    { 
      name: "Basic Voice Agent", 
      price: "$497/mo", 
      setup: "$300",
      features: [
        "Single phone number",
        "Property inquiry handling",
        "Appointment booking",
        "CRM integration",
        "Up to 500 minutes"
      ]
    },
    { 
      name: "Professional Voice Agent", 
      price: "$997/mo", 
      setup: "$300",
      features: [
        "Multiple phone numbers",
        "Custom scripting",
        "Advanced qualification",
        "Call transfer protocols",
        "Up to 1,500 minutes"
      ],
      recommended: true
    }
  ],
  faq: [
    { question: "What if someone demands to speak with a human?", answer: "The AI transfers immediately and notifies you with context about why they called." },
    { question: "Can it access my MLS listings?", answer: "Yes, we integrate with listing feeds so it has current property data to reference." }
  ],
  ctaText: "Listen to Tech Demo"
};

export const VoiceAgents: React.FC = () => <ServicePageLayout data={data} />;