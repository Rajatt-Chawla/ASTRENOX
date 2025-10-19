'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Shield, Rocket, BarChart, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function EngagementModel() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Prioritization',
      description: 'We identify your highest-impact automation opportunities and create a prioritized roadmap for implementation.',
      details: 'Process analysis, opportunity assessment, ROI calculations'
    },
    {
      icon: Palette,
      title: 'Design & Orchestration',
      description: 'Visual workflow design and orchestration using proven patterns and best practices.',
      details: 'Workflow mapping, integration design, user experience planning'
    },
    {
      icon: Shield,
      title: 'Integration & Security',
      description: 'Secure integration with your existing systems, data sources, and security protocols.',
      details: 'API integration, authentication, data security, compliance'
    },
    {
      icon: Rocket,
      title: 'Deployment & Enablement',
      description: 'Production deployment with user training and change management support.',
      details: 'Go-live support, user training, documentation, handoff'
    },
    {
      icon: BarChart,
      title: 'Monitor & Optimize',
      description: 'Ongoing monitoring, optimization, and enhancement based on usage and performance data.',
      details: 'Performance monitoring, optimization, feature enhancements'
    }
  ]

  return (
    <section className="py-24 bg-bg-base">
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
            🤝 Our Engagement Model
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Five-Step Process to
            <span className="block gradient-text">AI Automation Success</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our proven five-step process ensures your automations deliver maximum value 
            with minimal risk and maximum adoption.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-8 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent-primary text-center">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                  <p className="text-lead text-text-secondary mb-4">{step.description}</p>
                  <p className="text-text-muted">{step.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Start Discovery?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's identify your highest-impact automation opportunities and create a roadmap for success.
            </p>
            <Button variant="primary" size="lg" className="group">
              Start Discovery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
