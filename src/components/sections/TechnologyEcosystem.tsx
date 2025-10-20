'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Layers } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function TechnologyEcosystem() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
              🔧 Technology Ecosystem
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              We Orchestrate the Ecosystem
              <span className="block gradient-text">Not Just Use It</span>
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Astrenox serves as your systems integrator, seamlessly connecting OpenAI, Anthropic, Llama, Gemini, 
              LangGraph, CrewAI, and n8n into resilient, observable, and governable platforms. We don't just use 
              tools—we architect ecosystems that scale.
            </p>

            {/* Why it works */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Future-Proof Architecture</h3>
                  <p className="text-text-secondary">Modular design that adapts as AI capabilities evolve, ensuring your investments remain valuable.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Vendor-Agnostic Strategy</h3>
                  <p className="text-text-secondary">Avoid lock-in with flexible integrations across multiple AI providers and platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Enterprise-Grade Security & Governance</h3>
                  <p className="text-text-secondary">Built-in compliance, audit trails, and security controls for enterprise environments.</p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="group">
              Explore Intelligent Automations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>

          {/* Visual - AI Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_0_40px_rgba(56,189,248,0.06)]">
              <h3 className="text-center text-base font-semibold mb-6">AI Technology Stack</h3>

              {/* 2x2 grid — foundation model providers */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: "OpenAI", logo: "/logos/openai.svg" },
                  { name: "Anthropic", logo: "/logos/anthropic.svg" },
                  { name: "Google", logo: "/logos/google.svg" },
                  { name: "Meta", logo: "/logos/meta.svg" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 hover:border-sky-400/50 transition"
                  >
                    <img src={p.logo} alt={p.name} className="h-8 w-auto opacity-90 group-hover:opacity-100" />
                    <span className="text-sm font-medium text-white/85 group-hover:text-white">{p.name}</span>
                  </div>
                ))}
              </div>

              {/* Orchestration & Integration */}
              <h4 className="text-center text-xs uppercase tracking-wide text-white/60 mb-3">
                Orchestration &amp; Integration
              </h4>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { name: "LangGraph", logo: "/logos/langgraph.svg" },
                  { name: "CrewAI", logo: "/logos/crewai.svg" },
                  { name: "n8n", logo: "/logos/n8n.svg" },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 hover:border-cyan-400/50 transition"
                  >
                    <img src={t.logo} alt={t.name} className="h-6 w-auto opacity-90 group-hover:opacity-100" />
                    <span className="text-sm font-medium text-white/85 group-hover:text-white">{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Enterprise Features */}
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" /> Security &amp; Compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" /> Observability &amp; Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" /> Scalable Infrastructure
                </li>
              </ul>
            </aside>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-secondary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
