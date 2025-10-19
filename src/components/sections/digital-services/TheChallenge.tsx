'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Clock, Bug } from 'lucide-react'

export default function TheChallenge() {
  const challenges = [
    {
      icon: DollarSign,
      title: 'Technical Debt',
      description: 'Legacy systems and outdated architectures create maintenance bottlenecks and limit innovation velocity.'
    },
    {
      icon: Clock,
      title: 'High TCO',
      description: 'Total cost of ownership continues to rise with inefficient systems and manual processes.'
    },
    {
      icon: Bug,
      title: 'Siloed Data',
      description: 'Information trapped in disconnected systems prevents data-driven decision making and AI adoption.'
    },
    {
      icon: AlertTriangle,
      title: 'AI Pilots Stalling',
      description: 'AI initiatives fail to scale due to lack of proper infrastructure and integration capabilities.'
    }
  ]

  return (
    <section className="py-24 bg-bg-elevated/50">
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
            ⚠️ The Challenge
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            The Digital Transformation
            <span className="block gradient-text">Dilemma</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Organizations face mounting pressure to modernize while maintaining operations. 
            The path forward requires transitioning from legacy to modern architecture, from siloed data to integrated intelligence, from manual processes to automated workflows. The challenge is complex, but the solution is clear."
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-danger/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-danger" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{challenge.title}</h3>
              <p className="text-text-secondary leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
