'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Template, Database, Palette, Zap, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HowWeBuild() {
  const steps = [
    {
      icon: Template,
      title: 'Start from Proven Patterns',
      description: 'Templates and accelerators that have been battle-tested across multiple industries and use cases.',
      details: 'Pre-built workflows, proven architectures, and reusable components'
    },
    {
      icon: Database,
      title: 'Connect Your Data',
      description: '30+ data sources including Drive, OneDrive, Notion, Airtable, Salesforce, HubSpot, and more.',
      details: 'Seamless integration with your existing data infrastructure'
    },
    {
      icon: Palette,
      title: 'Compose Workflows Visually',
      description: 'Visual workflow builder and SDK for creating complex automation logic without coding.',
      details: 'Drag-and-drop interface with powerful automation capabilities'
    },
    {
      icon: Zap,
      title: 'Use the Best Models',
      description: 'OpenAI, Anthropic, Google, Llama, Mistral - we use the right model for each specific task.',
      details: 'Model selection optimized for performance and cost'
    },
    {
      icon: Globe,
      title: 'Deploy Everywhere',
      description: 'Web embeds, share links, Slack, messaging - deploy your automations where your users are.',
      details: 'Multi-channel deployment with consistent experience'
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
            🔧 How We Build It
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            From Concept to
            <span className="block gradient-text">Production</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our systematic approach ensures your automations are built right the first time, 
            with the flexibility to evolve as your needs change.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent-primary">{String(index + 1).padStart(2, '0')}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                <p className="text-lead text-text-secondary mb-4">{step.description}</p>
                <p className="text-text-muted">{step.details}</p>
              </div>
              
              <div className="flex-1">
                <div className="bg-surface-card border border-border-soft rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-accent-primary/30 rounded w-3/4"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-2/3"></div>
                    <div className="h-8 bg-accent-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-accent-secondary font-semibold">Visual Workflow</span>
                    </div>
                  </div>
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
              Ready to See Our Data Connectors?
            </h3>
            <p className="text-text-secondary mb-6">
              Explore our extensive library of pre-built integrations and connectors.
            </p>
            <Button variant="primary" size="lg" className="group">
              See our data connectors
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
