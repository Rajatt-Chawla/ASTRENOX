'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function OurApproach() {
  return (
    <section id="our-approach" className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
            🎯 Our Foundational Methodologies
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Systematic Approach to
            <span className="block gradient-text">AI Transformation</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Part A: Identifying Constraints */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Find the bottleneck. Focus the force.</h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              We conduct whole-system analysis to identify flow constraints, latency bottlenecks, and failure modes. 
              Our approach maximizes leverage at the constraint point to unlock step-change ROI. By focusing 
              engineering efforts where they'll have the greatest impact, we deliver exponential rather than 
              incremental improvements.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">System Flow Analysis</div>
                  <div className="text-sm text-text-secondary">Map data, process, and decision flows to identify bottlenecks</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Constraint Identification</div>
                  <div className="text-sm text-text-secondary">Pinpoint where improvements will have maximum leverage</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-semibold text-text-primary">Failure Mode Analysis</div>
                  <div className="text-sm text-text-secondary">Understand where systems break and build resilience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Part B: Delivering Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Think → Align → Execute</h3>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Our eight-stage framework transforms strategy into shipped outcomes: Direction, Readiness, Foundation, 
              Focus, Coordination, Engine, Insight, and Refinement. Each initiative is tied to business metrics 
              and executed with a cadence of value delivery.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                <div className="font-semibold text-accent-primary mb-2">THINK</div>
                <div className="text-sm text-text-secondary space-y-1">
                  <div>• Direction — Align vision, outcomes, scope, and success KPIs</div>
                  <div>• Readiness — Assess people, processes, and tech gaps</div>
                  <div>• Foundation — Map target architecture and integrations</div>
                </div>
              </div>
              
              <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                <div className="font-semibold text-accent-secondary mb-2">ALIGN</div>
                <div className="text-sm text-text-secondary space-y-1">
                  <div>• Focus — Build value-scored use-case portfolio</div>
                  <div>• Coordination — Stand up governance and execution cadence</div>
                </div>
              </div>
              
              <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                <div className="font-semibold text-success mb-2">EXECUTE</div>
                <div className="text-sm text-text-secondary space-y-1">
                  <div>• Engine — Operational playbooks for pilot-to-scale delivery</div>
                  <div>• Insight — Live dashboards and AI-powered recommendations</div>
                  <div>• Refinement — Tight feedback loops and continuous improvement</div>
                </div>
              </div>
            </div>

            <Button variant="primary" className="group">
              See the full framework
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </motion.div>
        </div>

        {/* Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-text-secondary mb-6">
              See our complete AI Transformation approach and get started with a strategic assessment.
            </p>
            <Button variant="primary" size="lg" className="group">
              See our AI Transformation approach
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
