'use client'

import { motion } from 'framer-motion'
import { DollarSign, Target, Users } from 'lucide-react'

export default function PricingSignals() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Pricing Signals
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Clear, predictable, and scalable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent-primary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Individuals</h3>
            <p className="text-text-secondary">Monthly retainer, billed per role seniority</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-accent-secondary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Squads</h3>
            <p className="text-text-secondary">Outcome-based pricing tied to features/story-points</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-surface-card border border-border-soft rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Fractional Leaders</h3>
            <p className="text-text-secondary">Fixed weekly blocks</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-text-secondary mb-4">
            Ask for a tailored plan based on scope and timeline.
          </p>
          <button className="bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-solid-hover hover:shadow-float hover:scale-102 transition-all duration-fast">
            Get a tailored quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}
