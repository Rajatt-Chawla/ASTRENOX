'use client'

import { motion } from 'framer-motion'
import { Users, Target, Clock, ArrowRight } from 'lucide-react'

export default function EngagementModels() {
  const models = [
    {
      icon: Users,
      title: 'Staff Augmentation',
      description: '1–3 experts embedded into your team with seamless integration and collaboration.'
    },
    {
      icon: Target,
      title: 'Managed Squads',
      description: 'Outcome-based pods (TPM + engineers) with sprint commitments and guaranteed delivery.'
    },
    {
      icon: Clock,
      title: 'Fractional Leadership',
      description: 'Part-time CTO/Architect/Head of Data to shape direction and unblock teams.'
    },
    {
      icon: ArrowRight,
      title: 'Build-Operate-Transfer (BOT)',
      description: 'We assemble and run a dedicated team, then transition to you when ready.'
    }
  ]

  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
            🤝 Engagement Models
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Plug-in options for
            <span className="block gradient-text">every stage</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <model.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{model.title}</h3>
              <p className="text-text-secondary leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
