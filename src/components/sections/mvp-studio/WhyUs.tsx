'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Code, Shield } from 'lucide-react'

export default function WhyUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Speed without compromise',
      description: 'Fast delivery with production-ready code, not prototypes'
    },
    {
      icon: Users,
      title: 'Proven process',
      description: '50+ MVPs shipped across industries with consistent quality'
    },
    {
      icon: Code,
      title: 'AI-first expertise',
      description: 'Deep experience building intelligent applications at scale'
    },
    {
      icon: Shield,
      title: 'Post-launch support',
      description: 'We stick around to ensure smooth operation and knowledge transfer'
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
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Why Choose Astrenox MVP Studio
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Experience, speed, and quality in one package
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-4">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
