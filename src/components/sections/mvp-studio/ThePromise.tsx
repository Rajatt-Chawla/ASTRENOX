'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Calendar, DollarSign, Rocket } from 'lucide-react'

export default function ThePromise() {
  const promises = [
    {
      icon: Calendar,
      title: '4–8 week delivery',
      description: 'From kickoff to live product, with clear milestones and weekly demos'
    },
    {
      icon: DollarSign,
      title: 'Fixed scope & budget',
      description: 'No scope creep, no surprise costs—just ruthless prioritization'
    },
    {
      icon: Rocket,
      title: 'Production-ready code',
      description: 'Deployable, maintainable, and documented for your team to extend'
    },
    {
      icon: CheckCircle,
      title: 'Design + build + launch',
      description: 'End-to-end delivery from user flows to live infrastructure'
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
            The Promise
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Speed, clarity, and zero surprises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <promise.icon className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-4">{promise.title}</h3>
              <p className="text-text-secondary leading-relaxed">{promise.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
