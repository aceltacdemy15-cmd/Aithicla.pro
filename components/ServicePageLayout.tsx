import React from 'react';
import { Section, Button, Card, Badge } from './UI';
import { ServicePageData } from '../types';
import { Check, ChevronRight, BarChart3, Clock, Users, Shield, Zap, Target } from 'lucide-react';

export const ServicePageLayout: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-darker text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-blue/10 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <Badge className="mb-8">{data.slug.replace('-', ' ')} Service</Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            {data.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            {data.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="primary">Get Started Now</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Section 1: What this is */}
      {data.whatIsIt && (
        <Section className="bg-brand-dark">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-8 text-white">{data.whatIsIt.title}</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {data.whatIsIt.description}
              </p>
              {data.whatIsIt.extra && (
                <p className="text-gray-400 leading-relaxed italic">
                  {data.whatIsIt.extra}
                </p>
              )}
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-brand-darker p-2">
              <img src={`https://picsum.photos/800/600?sig=${data.slug}`} alt="Visualization" className="w-full h-auto rounded-xl opacity-80" />
            </div>
          </div>
        </Section>
      )}

      {/* Section 2: Why it matters */}
      {data.whyNeedIt && (
        <Section dark className="bg-brand-darker">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid gap-5">
                {data.whyNeedIt.stats?.map((stat: any, idx: number) => (
                  <Card key={idx} className="flex items-center gap-6 group hover:border-brand-teal/50">
                    <div className="text-4xl font-bold text-brand-teal font-mono group-hover:scale-110 transition-transform">{stat.value}</div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-heading font-bold mb-8 text-white">{data.whyNeedIt.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {data.whyNeedIt.description}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* Section 3: Mechanics / Phases */}
      {data.process && (
        <Section className="bg-brand-dark">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">{data.process.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.process.steps.map((step: any, idx: number) => (
              <Card key={idx} className="h-full">
                <div className="text-brand-orange font-mono mb-4 text-sm font-bold">PHASE {idx + 1}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Features Grid */}
      {data.features && (
        <Section dark className="bg-brand-darker">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-heading font-bold text-white">Service Components</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature: any, idx: number) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 group hover:bg-white/[0.05] transition-colors">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Timeline / Outcomes */}
      {data.timeline && (
        <Section className="bg-brand-dark">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-6">Realistic Timeline & Outcomes</h2>
            <p className="text-gray-400 italic">MEANINGFUL CHANGE TAKES A QUARTER, NOT A WEEKEND.</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {data.timeline.map((item: any, idx: number) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-8 items-start">
                <div className="text-brand-teal font-mono font-bold text-xl whitespace-nowrap">{item.period}</div>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Pricing */}
      {data.pricing && (
        <Section dark className="bg-brand-darker">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white">Transparent Pricing</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {data.pricing.map((pkg: any, idx: number) => (
              <Card key={idx} className={`${pkg.recommended ? 'border-brand-orange scale-105 z-10' : ''}`} glow={pkg.recommended}>
                <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                <div className="text-4xl font-bold text-brand-teal mb-6 font-mono">{pkg.price}</div>
                {pkg.setup && <div className="text-xs text-gray-500 mb-6 -mt-4">Setup fee: {pkg.setup}</div>}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((f: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                      <Check className="text-brand-teal flex-shrink-0" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.recommended ? 'primary' : 'outline'} className="w-full">Choose Plan</Button>
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
            {data.faq.map((item: any, idx: number) => (
              <details key={idx} className="group bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-white/10">
                <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-xl text-white list-none hover:text-brand-teal transition-colors">
                  {item.question}
                  <ChevronRight className="transform group-open:rotate-90 transition-transform text-brand-teal" />
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
      <Section className="relative bg-brand-darker">
        <div className="relative z-10 py-12 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-heading font-bold mb-8 text-white">Ready to Transform?</h2>
          <Button variant="primary" size="lg" className="text-lg px-12 py-6">
            {data.ctaText}
          </Button>
        </div>
      </Section>
    </>
  );
};