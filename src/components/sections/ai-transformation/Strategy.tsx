'use client'

import { motion } from 'framer-motion'
import { Target, CheckCircle, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Strategy() {
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
              📊 Strategy
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              Strategic AI Assessment &
              <span className="block gradient-text">Roadmap Development</span>
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Our comprehensive 30/60/90-day assessment provides a holistic view of your organization's 
              AI readiness across all functions. We identify gaps, opportunities, and create a prioritized 
              roadmap for AI adoption that aligns with your business objectives.
            </p>

            {/* Assessment Process */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">Holistic Assessment</h3>
                  <p className="text-text-secondary">Comprehensive evaluation of people, processes, and technology across all business functions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2">AI-Adoption Report</h3>
                  <p className="text-text-secondary">Detailed analysis with technical appendix mapping your current state to AI-native capabilities.</p>
                </div>
              </div>
            </div>

            <Button variant="primary" size="lg" className="group">
              Request an Assessment
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
              <h3 className="text-xl font-bold text-text-primary mb-6">Assessment Timeline</h3>
              
              {/* Timeline */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-lg flex items-center justify-center text-accent-primary font-bold text-sm">
                    30
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Days 1-30: Discovery</div>
                    <div className="text-sm text-text-secondary">Stakeholder interviews, process mapping, technology audit</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-secondary/20 rounded-lg flex items-center justify-center text-accent-secondary font-bold text-sm">
                    60
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Days 31-60: Analysis</div>
                    <div className="text-sm text-text-secondary">Gap analysis, opportunity identification, prioritization</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center text-success font-bold text-sm">
                    90
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Days 61-90: Roadmap</div>
                    <div className="text-sm text-text-secondary">Strategic roadmap, implementation plan, success metrics</div>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-8 pt-6 border-t border-border-soft">
                <div className="text-sm font-semibold text-text-primary mb-4">Key Deliverables</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">AI-Adoption Report</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Technical Appendix</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Implementation Roadmap</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Success Metrics Framework</span>
                  </div>
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
