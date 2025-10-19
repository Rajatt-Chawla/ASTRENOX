'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Search, Brain, Zap, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ANXIntelligence() {
  return (
    <section className="py-24 bg-bg-elevated/50">
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
              🤖 ANX Intelligence
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              The Business Copilot
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Built for executives, product owners, and operations leaders. ANX Intelligence 
              unifies search, insights, and business process automation into agentic workflows 
              that act across your entire system ecosystem.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Instant Search</h3>
                  <p className="text-text-secondary">Search across GDrive, Slack, Salesforce, Jira, and 30+ other data sources instantly.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Intelligent Copilot</h3>
                  <p className="text-text-secondary">Ask → Decide → Do. Multi-step task execution with intelligent reasoning and action.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Proactive Insights</h3>
                  <p className="text-text-secondary">Anticipates your needs and transforms noise into actionable signal automatically.</p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="group">
              Request a Demo
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
              <h3 className="text-xl font-bold text-text-primary mb-6">ANX Intelligence Dashboard</h3>
              
              {/* Dashboard Preview */}
              <div className="space-y-4">
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                  <div className="flex items-center space-x-3 mb-3">
                    <Search className="w-5 h-5 text-accent-primary" />
                    <span className="font-semibold text-text-primary">Enterprise Search</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-accent-primary/30 rounded w-3/4"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                  <div className="flex items-center space-x-3 mb-3">
                    <Brain className="w-5 h-5 text-accent-secondary" />
                    <span className="font-semibold text-text-primary">AI Copilot</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-accent-secondary/30 rounded w-2/3"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                  </div>
                </div>
                
                <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                  <div className="flex items-center space-x-3 mb-3">
                    <Zap className="w-5 h-5 text-success" />
                    <span className="font-semibold text-text-primary">Proactive Insights</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-success/30 rounded w-1/2"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-border-soft">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span className="text-sm text-text-secondary">Enterprise-grade security & compliance</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-secondary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
