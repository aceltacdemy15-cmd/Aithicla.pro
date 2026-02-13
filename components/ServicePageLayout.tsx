import React from 'react';
import { Section, Button, Card, Badge } from './UI';
import { ServicePageData } from '../types';
import { Check, ChevronRight, BarChart3, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicePageLayout: React.FC<{ data: ServicePageData }> = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-darker text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-blue/10 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <Badge className="mb-8">Professional Real Estate Solutions</Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            {data.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="primary">Get Started Now</Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* What is it & Why Need it */}
      <Section className="bg-brand-dark">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-8 text-white">What is it?</h2>
            <div className="text-lg text-gray-300 mb-10 leading-relaxed space-y-4">
              <p>{data.whatIsIt.description}</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.2)] border border-white/10 group">
              <div className="absolute inset-0 bg-brand-teal/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="https://picsum.photos/800/600" alt="Service Visualization" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-heading font-bold mb-8 text-white">Why You Need It</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              {data.whyNeedIt.description}
            </p>
            <div className="grid grid-cols-1 gap-5">
              {data.whyNeedIt.stats.map((stat, idx) => (
                <Card key={idx} className="flex items-center gap-6 group hover:border-brand-teal/50">
                  <div className="text-4xl font-bold text-brand-teal font-mono group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-brand-darker">
        <div className="text-center mb-16">
          <Badge className="mb-6">Capabilities</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Comprehensive Features</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature, idx) => (
            <Card key={idx} className="group hover:bg-white/[0.08]" glow>
              <div className="w-14 h-14 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal mb-6 border border-brand-teal/20 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <Check size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process (How it works) */}
      {data.process && (
        <Section dark className="bg-brand-dark relative overflow-hidden">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent"></div>
            
            {data.process.steps.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-32 h-32 mx-auto bg-brand-darker border-2 border-brand-teal rounded-full flex items-center justify-center text-4xl font-bold text-white mb-8 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-teal transition-colors">{step.title}</h3>
                <p className="text-gray-400 max-w-sm mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Pricing */}
      {data.pricing && (
        <Section className="bg-brand-darker">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Transparent Pricing</h2>
            <p className="text-xl text-gray-400 mt-6">Choose the plan that fits your growth goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.pricing.map((pkg, idx) => (
              <Card key={idx} className={`relative flex flex-col ${pkg.recommended ? 'border-brand-orange shadow-[0_0_30px_rgba(249,115,22,0.2)] scale-105 z-10 bg-brand-dark' : 'hover:border-white/20'}`} glow={pkg.recommended}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white">{pkg.name}</h3>
                <div className="text-5xl font-bold text-brand-teal mb-8 font-mono tracking-tighter">{pkg.price}</div>
                <div className="flex-grow space-y-6 mb-10">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                         <Check className="text-brand-teal w-3 h-3" />
                      </div>
                      <span className="text-gray-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
                <Button variant={pkg.recommended ? 'primary' : 'outline'} className="w-full">
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section className="bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-white">Common Questions</h2>
          <div className="space-y-6">
            {data.faq.map((item, idx) => (
              <details key={idx} className="group bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-white/10">
                <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-xl text-white list-none hover:text-brand-teal transition-colors">
                  {item.question}
                  <span className="transform group-open:rotate-180 transition-transform duration-300 text-brand-teal">
                    <ChevronRight />
                  </span>
                </summary>
                <div className="px-8 pb-8 text-gray-300 leading-relaxed border-t border-white/5 pt-6">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden">
         <div className="absolute inset-0 bg-brand-blue/10"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 py-12 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-heading font-bold mb-8 text-white">Ready to Transform?</h2>
          <p className="text-2xl text-gray-300 mb-12 font-light">
            Join 500+ real estate professionals using {data.heroTitle} to dominate their market.
          </p>
          <Button variant="primary" size="lg" className="shadow-[0_0_40px_rgba(249,115,22,0.3)] text-lg px-12 py-6">
            {data.ctaText}
          </Button>
        </div>
      </Section>
    </>
  );
};