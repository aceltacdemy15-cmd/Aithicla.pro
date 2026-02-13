import React from 'react';
import { Section, Button, Card, Badge } from '../components/UI';
import { BarChart3, Users, Zap, Search, Phone, Mail, ArrowRight, Brain, Target, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';

const chartData = [
  { name: 'Jan', organic: 12, ai: 45 },
  { name: 'Feb', organic: 18, ai: 85 },
  { name: 'Mar', organic: 25, ai: 140 },
  { name: 'Apr', organic: 28, ai: 210 },
  { name: 'May', organic: 35, ai: 320 },
  { name: 'Jun', organic: 40, ai: 450 },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-brand-darker pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
            
            <div className="scroll-reveal max-w-4xl mx-auto">
              <div className="flex justify-center">
                 <Badge className="mb-8 animate-float bg-brand-teal/10 border-brand-teal/40">
                  EthicalPro AI System 2.0
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
                Future-Proof Your <br />
                <span className="text-brand-teal">Real Estate Growth</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
                Traditional SEO is dead. We engineer your digital entity so AI assistants like ChatGPT & Gemini recommend <span className="text-white font-semibold">you</span> first.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <Button size="lg" variant="primary" className="px-12 py-6 text-lg">Start Transformation</Button>
                <Button size="lg" variant="glow" icon={ArrowRight} className="px-12 py-6 text-lg">
                  View Tech Demo
                </Button>
              </div>
            </div>
            
            {/* Centered Visual - Holographic HUD */}
            <div className="relative w-full max-w-5xl mx-auto scroll-reveal interactive-hover" style={{animationDelay: '0.2s'}}>
               <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal rounded-3xl blur-xl opacity-20 animate-pulse"></div>
               
               <div className="relative bg-brand-darker/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                 {/* HUD Header */}
                 <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_red]"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_yellow]"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_lime]"></div>
                    </div>
                    <div className="text-xs font-mono text-brand-teal animate-pulse">SYSTEM_STATUS: OPTIMIZED</div>
                 </div>

                 <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                         <h3 className="text-xl font-bold mb-4 text-gray-200 flex items-center gap-3">
                           <Zap className="text-brand-orange" size={20} />
                           Traffic Source Velocity
                         </h3>
                         <div className="h-64 w-full">
                           <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={chartData}>
                               <defs>
                                 <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                                   <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                                   <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                 </linearGradient>
                               </defs>
                               <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                               <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} />
                               <YAxis stroke="#64748b" tick={{fill: '#64748b'}} axisLine={false} />
                               <Tooltip 
                                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
                                  itemStyle={{ color: '#06b6d4' }}
                               />
                               <Area type="monotone" dataKey="ai" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorAi)" />
                             </AreaChart>
                           </ResponsiveContainer>
                         </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Active Leads</div>
                          <div className="text-3xl text-white font-mono">842 <span className="text-green-400 text-sm align-top">+12%</span></div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">AI Citations</div>
                          <div className="text-3xl text-white font-mono">2,405 <span className="text-brand-teal text-sm align-top">↑</span></div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider">Sentiment</div>
                          <div className="text-3xl text-brand-teal font-mono">98.5%</div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
               {["Re/Max", "Keller Williams", "Coldwell Banker", "Century 21", "Sotheby's"].map((brand, i) => (
                  <span key={i} className="text-xl font-heading font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors cursor-default">{brand}</span>
               ))}
            </div>
        </div>
      </section>

      {/* Problems Section */}
      <Section className="bg-brand-dark/50 backdrop-blur-sm">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Invisible Threats</h2>
          <p className="text-xl text-gray-400 font-light">Why modern real estate businesses are failing in the AI era.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Ghosted by AI", desc: "ChatGPT doesn't know you exist, sending clients to competitors.", icon: Search },
            { title: "Lead Decay", desc: "Leads go cold in minutes. 50% of calls go to voicemail.", icon: Phone },
            { title: "Manual Fatigue", desc: "Spending 4 hours/day chasing unqualified prospects.", icon: Users },
            { title: "Client Amnesia", desc: "Past clients forget you without automated nurture.", icon: Mail },
          ].map((item, i) => (
            <Card key={i} className="text-center h-full flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-teal border border-brand-teal/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:scale-110 transition-transform duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 90-Day Plan - Horizontal Spacious Layout */}
      <Section dark className="bg-brand-darker/90 border-y border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <Badge className="mb-4">The Roadmap</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">90-Day Transformation</h2>
            <p className="text-xl text-gray-400">From invisible to market dominator in three months. Fully automated.</p>
          </div>
          <Button variant="outline" className="hidden md:flex mt-6 md:mt-0">View Full Schedule</Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
           {/* Futuristic Connector Line */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/50 to-brand-teal/0"></div>

           {[
             { days: "01 - 30", title: "Foundation & Audit", items: ["AI Visibility Audit", "Competitive Gap Analysis", "Google SGE Optimization"], icon: ShieldCheck },
             { days: "31 - 60", title: "Automation Core", items: ["Lead Funnel Activation", "Voice Agent Integration", "Email Nurture Setup"], icon: Cpu },
             { days: "61 - 90", title: "Scale & Dominate", items: ["AI Performance Analysis", "A/B Testing Scripts", "Market Expansion"], icon: Globe }
           ].map((phase, i) => (
             <div key={i} className="relative z-10 group interactive-hover">
               <div className="w-20 h-20 bg-brand-darker border border-brand-teal/30 rounded-2xl flex items-center justify-center text-brand-teal mb-6 shadow-[0_0_30px_rgba(6,182,212,0.1)] mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300">
                  <phase.icon size={28} />
               </div>
               <div className="text-brand-orange font-mono font-bold mb-2 uppercase tracking-widest text-sm">Days {phase.days}</div>
               <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
               <ul className="space-y-3">
                 {phase.items.map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                     <div className="w-1.5 h-1.5 bg-brand-teal rounded-full shadow-[0_0_5px_#06b6d4]"></div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           ))}
        </div>
      </Section>

      {/* Services Flashcards - Glowing & Floating */}
      <Section className="bg-brand-dark/50 backdrop-blur-sm">
        <div className="space-y-32">
          {/* AI Visibility */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
               <Card className="p-0 border-0 bg-transparent" hoverEffect={false}>
                 <div className="relative group">
                   <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-blue rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                     <img src="https://picsum.photos/800/600?random=1" alt="AI Visibility" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="font-mono text-sm text-green-400">ChatGPT Ranking: #1</span>
                        </div>
                     </div>
                   </div>
                 </div>
               </Card>
             </div>
             <div className="order-1 lg:order-2">
               <Badge className="mb-4">Core Service</Badge>
               <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">AI Visibility Optimization</h3>
               <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                 When potential clients ask ChatGPT, Perplexity, or Google's AI "Who are the best real estate agents?", your business needs to be the answer.
               </p>
               <div className="flex flex-wrap gap-3 mb-8">
                 {["Entity Schema", "Knowledge Graph", "Voice Search"].map((tag, i) => (
                   <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                     {tag}
                   </span>
                 ))}
               </div>
               <Link to="/ai-visibility">
                 <Button variant="outline">Discover AI SEO</Button>
               </Link>
             </div>
          </div>

          {/* Lead Gen */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-1">
               <Badge className="mb-4">Growth Engine</Badge>
               <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Automated Lead Generation</h3>
               <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                 Stop chasing. Start attracting. We build complete AI machines that attract, capture, qualify, and nurture prospects 24/7.
               </p>
               <div className="flex flex-wrap gap-3 mb-8">
                 {["Smart Funnels", "Instant Qualify", "CRM Sync"].map((tag, i) => (
                   <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                     {tag}
                   </span>
                 ))}
               </div>
               <Link to="/lead-generation">
                 <Button variant="outline">Explore Automation</Button>
               </Link>
             </div>
             <div className="order-2">
                <Card className="p-0 border-0 bg-transparent" hoverEffect={false}>
                 <div className="relative group">
                   <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-darker border border-white/10 p-2">
                     <img src="https://picsum.photos/800/600?random=2" alt="Lead Generation Dashboard" className="w-full h-auto rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                   </div>
                 </div>
               </Card>
             </div>
          </div>

          {/* Voice Agents */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
               <Card className="p-0 border-0 bg-transparent" hoverEffect={false}>
                 <div className="relative group">
                   <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-blue rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                     <img src="https://picsum.photos/800/600?random=3" alt="Voice Agent" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                     {/* Sound Wave Animation Overlay */}
                     <div className="absolute inset-0 flex items-center justify-center gap-1">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className={`w-2 bg-brand-teal/80 rounded-full animate-pulse`} style={{height: `${Math.random() * 60 + 20}px`, animationDuration: `${Math.random() * 0.5 + 0.5}s`}}></div>
                        ))}
                     </div>
                   </div>
                 </div>
               </Card>
             </div>
             <div className="order-1 lg:order-2">
               <Badge className="mb-4">24/7 Receptionist</Badge>
               <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Hyper-Realistic Voice Agents</h3>
               <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                 A missed call is a missed $15k commission. Our AI voice agents answer instantly, qualify leads, and book appointments while you sleep.
               </p>
               <Link to="/voice-agents">
                 <Button variant="outline">Listen to Demo</Button>
               </Link>
             </div>
          </div>
        </div>
      </Section>

      {/* Social Proof with Glowing Border Cards */}
      <Section className="bg-brand-darker/90">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white">Results That Matter</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              role: "Luxury Agency",
              quote: "Before EthicalPro, we were invisible to AI search. Now when people ask ChatGPT about agents, we're the first recommendation.",
              metric: "425% Growth",
              author: "Sarah Mitchell"
            },
            {
              role: "Solo Agent",
              quote: "The voice agent answers calls I used to miss while showing homes. It booked 3 listings last month while I was asleep.",
              metric: "100% Answer Rate",
              author: "David Chen"
            },
            {
              role: "Property Manager",
              quote: "Automated 78% of routine tenant inquiries. We doubled our revenue without adding a single staff member.",
              metric: "2x Revenue",
              author: "Elena Rodriguez"
            }
          ].map((story, i) => (
            <Card key={i} className="flex flex-col justify-between" glow>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  {[1,2,3,4,5].map(s => <div key={s} className="w-4 h-4 text-brand-orange">★</div>)}
                </div>
                <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">"{story.quote}"</p>
              </div>
              <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">{story.author}</div>
                  <div className="text-xs text-gray-500 uppercase">{story.role}</div>
                </div>
                <div className="text-right">
                   <div className="text-2xl font-mono font-bold text-brand-teal">{story.metric}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand-dark overflow-hidden relative">
        {/* Giant glowing background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white tracking-tight">
             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Dominate</span>?
           </h2>
           <p className="text-2xl text-gray-300 mb-12 font-light">
             The window to optimize for AI is closing. Competitors are adapting.
           </p>
           <Button size="lg" variant="primary" className="text-xl px-12 py-6 shadow-[0_0_50px_rgba(249,115,22,0.4)]">
             Start Your Evolution
           </Button>
        </div>
      </Section>
    </>
  );
};
