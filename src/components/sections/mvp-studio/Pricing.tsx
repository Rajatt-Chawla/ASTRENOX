'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Pricing() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">Pricing</h2>
          <p className="text-lead text-text-secondary">Fixed scope, transparent cost</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-surface-card border border-border-soft rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="text-display-sm font-bold text-text-primary mb-4">
              Starting at <span className="gradient-text">$25K–$60K</span>
            </div>
            <p className="text-text-secondary">
              Depending on complexity, integrations, and AI features
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-text-secondary">4–8 week delivery timeline</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-text-secondary">Dedicated PM + 2-4 engineers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-text-secondary">Design, development, and deployment</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-text-secondary">Source code and documentation</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-text-secondary">2 weeks post-launch support</span>
            </div>
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" className="group">
              Get a custom quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
