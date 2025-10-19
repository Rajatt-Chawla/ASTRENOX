'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-bg-base">
        <div className="absolute inset-0 bg-overlay-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold"
            >
              🤖 AI-First Digital Transformation
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display-lg lg:text-display-lg font-extrabold text-text-primary leading-tight"
            >
              Creating Engineering Disruption with
              <span className="block gradient-text">AI-First Digital Transformation</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lead text-text-secondary max-w-2xl leading-relaxed"
            >
              This interactive chat is your direct line to Astrenox. In a few prompts, we diagnose operational bottlenecks, 
              scope the right AI solutions, and outline a path to scalable execution from quick wins to enterprise rollouts. 
              Engage to see how strategic consulting plus hands-on engineering turns ideas into measurable outcomes.
            </motion.p>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <Button variant="secondary" size="md" className="group text-left justify-start">
                <div>
                  <div className="font-semibold">Automate a business process</div>
                  <div className="text-xs text-text-muted">→ /intelligent-automations#workflows</div>
                </div>
              </Button>
              
              <Button variant="secondary" size="md" className="group text-left justify-start">
                <div>
                  <div className="font-semibold">Hire an AI engineering team</div>
                  <div className="text-xs text-text-muted">→ /ai-engineering#cta</div>
                </div>
              </Button>
              
              <Button variant="secondary" size="md" className="group text-left justify-start">
                <div>
                  <div className="font-semibold">Develop an AI strategy</div>
                  <div className="text-xs text-text-muted">→ /ai-transformation#strategy</div>
                </div>
              </Button>
              
              <Button variant="secondary" size="md" className="group text-left justify-start">
                <div>
                  <div className="font-semibold">Audit my data & AI readiness</div>
                  <div className="text-xs text-text-muted">→ /ai-transformation#strategy</div>
                </div>
              </Button>
              
              <Button variant="secondary" size="md" className="group text-left justify-start">
                <div>
                  <div className="font-semibold">Prototype a GenAI use case this week</div>
                  <div className="text-xs text-text-muted">→ /get-started</div>
                </div>
              </Button>
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <Button variant="primary" size="lg" className="group">
                Learn more
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
              </Button>
              <span className="ml-4 text-text-muted">→ scroll to Our Approach</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary">25%</div>
                <div className="text-sm text-text-muted">Decrease in per-project person hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary">20%</div>
                <div className="text-sm text-text-muted">Decrease in time to launch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary">500+</div>
                <div className="text-sm text-text-muted">AI Solutions Deployed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-surface-card border border-border-soft rounded-xl p-8 shadow-card hover:shadow-float transition-all duration-med hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-danger rounded-full"></div>
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                    </div>
                    <div className="text-xs text-text-muted">Astrenox AI</div>
                  </div>

                  {/* Content Preview */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-accent rounded w-3/4"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-2/3"></div>
                  </div>

                  {/* AI Code Block */}
                  <div className="bg-bg-base rounded-lg p-4 border border-border-soft">
                    <div className="text-xs text-accent-secondary font-mono">
                      <div className="text-info">const</div> aiTransformation = {'{'}
                      <div className="ml-4">
                        <div>strategy: <span className="text-success">"AI-First"</span>,</div>
                        <div>execution: <span className="text-warning">"Engineering-Led"</span>,</div>
                        <div>outcome: <span className="text-accent-primary">"Measurable ROI"</span></div>
                      </div>
                      {'}'};
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
