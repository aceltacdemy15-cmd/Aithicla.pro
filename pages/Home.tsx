import React from 'react';
import { Section, Button, Card, Badge } from '../components/UI';
import { Search, Phone, Mail, ArrowRight, Zap, Users, ShieldCheck, Globe, Cpu, X, Check } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-brand-darker pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
            <div className="scroll-reveal max-w-5xl mx-auto">
              <div className="flex justify-center">
                 <Badge className="mb-8 animate-float bg-brand-teal/10 border-brand-teal/40">
                  Aithical.pro AI System 2.0
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500">
                Your Real Estate Business Needs to Show Up <br />
                <span className="text-brand-teal text-3xl md:text-5xl lg:text-6xl">When People Ask AI Where to Find an Agent</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed font-medium max-w-4xl mx-auto">
                Most agents still optimize for Google. Meanwhile, buyers are asking ChatGPT, Perplexity, and Gemini for recommendations. If AI doesn't know you exist, you're invisible to a growing segment of your market.
              </p>

              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed italic">
                "We help real estate professionals appear in AI search results, automate lead follow-up, and handle routine client communication. It's not revolutionary. It's just adapting to how people search now."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <Button size="lg" variant="primary" className="px-12 py-6 text-lg">See Where You Appear in AI Search</Button>
                <Button size="lg" variant="glow" icon={ArrowRight} className="px-12 py-6 text-lg">
                  View Tech Demo
                </Button>
              </div>
            </div>
        </div>
      </section>

      {/* The Actual Problem */}
      <Section className="bg-brand-dark/50 backdrop-blur-sm">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Here's What's Actually Happening</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="h-full" glow>
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-teal border border-brand-teal/20">
              <Search size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Visibility Gap</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              A potential seller opens ChatGPT and types: "I need to sell my house in [your city]. Who are the most recommended real estate agents?"
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              If you're not in AI training data, you simply don't appear. This isn't about being the best agent; it's about being where AI looks for info.
            </p>
          </Card>

          <Card className="h-full" glow>
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-teal border border-brand-teal/20">
              <Phone size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Follow-Up Problem</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              You capture a lead while in a showing. By the time you call back three hours later, they've already scheduled appointments with two other agents who responded in 10 minutes.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              You can't answer every call immediately. But automated systems can, and the agents using them get the appointment.
            </p>
          </Card>

          <Card className="h-full" glow>
            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-teal border border-brand-teal/20">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">The Database Decay</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              You have 400 contacts in your CRM. You know you should email them monthly, but you get busy. Months pass. When they need an agent again, they don't remember you.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Manual follow-up doesn't scale. Automated follow-up does. It's that simple.
            </p>
          </Card>
        </div>
      </Section>

      {/* Services Overview */}
      <Section dark className="bg-brand-darker">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-4">Solutions</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Four Services Addressing Specific Problems</h2>
          <p className="text-xl text-gray-400">No flashy promises. Just straightforward descriptions of what we actually do.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "AI Visibility Optimization", 
              desc: "We make sure your business appears when people ask AI assistants about real estate services in your area. We optimize your GBP, create structured content, and monitor presence across ChatGPT and Gemini.",
              icon: Search
            },
            { 
              title: "Automated Lead Response", 
              desc: "Systems that respond to incoming leads immediately, qualify them through conversation, and book them on your calendar. Leads get instant responses; you get qualified appointments.",
              icon: Zap
            },
            { 
              title: "AI Voice Agents", 
              desc: "Phone answering service that uses AI instead of call centers. It answers property questions, books showings, and qualifies leads 24/7. Urgent calls can still transfer to you.",
              icon: Phone
            },
            { 
              title: "Email Automation", 
              desc: "Pre-written sequences that send automatically based on where someone is in the journey. Consistent communication with every contact without manual effort.",
              icon: Mail
            }
          ].map((service, i) => (
            <Card key={i} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex-shrink-0 flex items-center justify-center text-brand-teal border border-brand-teal/20">
                <service.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Realistic Outcomes */}
      <Section className="bg-brand-dark/50">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">What Actually Happens</h2>
          <p className="text-xl text-gray-400 font-light">Avoid inflated stats. Here are the honest ranges our clients see.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI Visibility", val: "5-7 / 10", label: "Query inclusion by month 4" },
            { title: "Lead Response", val: "< 60s", label: "Response time drop from hours" },
            { title: "Voice Agents", val: "100%", label: "Call answer rate, 70% resolved" },
            { title: "Email Nurture", val: "35-42%", label: "Average open rates (v. 21% std)" }
          ].map((outcome, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2 font-mono">{outcome.val}</div>
              <div className="text-lg font-bold text-white mb-1">{outcome.title}</div>
              <div className="text-sm text-gray-500">{outcome.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-2xl bg-brand-orange/5 border border-brand-orange/20 text-center max-w-3xl mx-auto">
          <p className="text-gray-300">
            <strong>Real Cost Comparison:</strong> One closed deal typically covers 6-12 months of service costs. If you close 2-3 deals per year that you wouldn't have without better visibility and follow-up, it pays for itself.
          </p>
        </div>
      </Section>

      {/* Fit Section */}
      <Section dark className="bg-brand-darker">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-white">This Probably Isn't Right for You If...</h2>
            <div className="space-y-4">
              {[
                "You're brand new (less than 6 months) and have no track record.",
                "You hate technology and refuse to learn basic CRM systems.",
                "You're looking for instant miracles (AI takes 60-90 days).",
                "You work pure referral-only and plan to keep it that way.",
                "You're not willing to compete in a saturated market."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start text-gray-400">
                  <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-white">This Makes Sense If...</h2>
            <div className="space-y-4">
              {[
                "You're doing okay but hit a plateau and want to scale.",
                "You're losing deals to agents with better response systems.",
                "You have a database you're not using effectively.",
                "You're open to AI handling repetitive manual tasks.",
                "You can give it 90 days to see meaningful results."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start text-gray-400">
                  <Check className="text-brand-teal mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-dark overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white tracking-tight leading-tight">
             The Window to Optimize <br /> <span className="text-brand-teal">for AI is Closing.</span>
           </h2>
           <p className="text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
             Competitors are adapting. Join the agents who will be found when the next question is asked.
           </p>
           <Button size="lg" variant="primary" className="text-xl px-12 py-6">
             Start Your Evolution
           </Button>
        </div>
      </Section>
    </>
  );
};