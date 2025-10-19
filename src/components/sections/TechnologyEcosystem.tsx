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

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-surface-card border border-border-soft rounded-xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center">AI Technology Stack</h3>
              
              {/* AI Models */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft text-center">
                  <div className="text-sm font-semibold text-accent-primary mb-2">OpenAI</div>
                  <div className="text-xs text-text-muted">GPT-4, DALL-E</div>
                </div>
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft text-center">
                  <div className="text-sm font-semibold text-accent-secondary mb-2">Anthropic</div>
                  <div className="text-xs text-text-muted">Claude, Constitutional AI</div>
                </div>
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft text-center">
                  <div className="text-sm font-semibold text-info mb-2">Google</div>
                  <div className="text-xs text-text-muted">Gemini, PaLM</div>
                </div>
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft text-center">
                  <div className="text-sm font-semibold text-warning mb-2">Meta</div>
                  <div className="text-xs text-text-muted">Llama, Code Llama</div>
                </div>
              </div>

              {/* Orchestration Tools */}
              <div className="border-t border-border-soft pt-6">
                <div className="text-sm font-semibold text-text-primary mb-4">Orchestration & Integration</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-bg-base rounded-lg p-3 border border-border-soft text-center">
                    <div className="text-xs font-semibold text-accent-primary">LangGraph</div>
                  </div>
                  <div className="bg-bg-base rounded-lg p-3 border border-border-soft text-center">
                    <div className="text-xs font-semibold text-accent-secondary">CrewAI</div>
                  </div>
                  <div className="bg-bg-base rounded-lg p-3 border border-border-soft text-center">
                    <div className="text-xs font-semibold text-info">n8n</div>
                  </div>
                </div>
              </div>

              {/* Enterprise Features */}
              <div className="border-t border-border-soft pt-6">
                <div className="text-sm font-semibold text-text-primary mb-4">Enterprise Features</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Security & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Observability & Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Scalable Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

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
