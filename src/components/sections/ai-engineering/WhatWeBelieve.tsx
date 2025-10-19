'use client'

import { motion } from 'framer-motion'
import { Users, Brain, Target, DollarSign } from 'lucide-react'

export default function WhatWeBelieve() {
  const beliefs = [
    {
      icon: Users,
      title: 'Hire the Best',
      description: 'We recruit and retain world-class AI engineers who are passionate about building solutions that matter.'
    },
    {
      icon: Brain,
      title: 'Use AI (a lot)',
      description: 'We leverage AI tools and techniques extensively to accelerate development and improve code quality.'
    },
    {
      icon: Target,
      title: 'Charge on Outcomes',
      description: 'Our pricing is tied to the value we deliver, not just the hours we work. We succeed when you succeed.'
    },
    {
      icon: DollarSign,
      title: 'Pay on Outcomes',
      description: 'We invest in our team\'s success with performance-based compensation that rewards exceptional delivery.'
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
            💡 What We Believe
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Our Engineering
            <span className="block gradient-text">Philosophy</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            These four core beliefs drive everything we do. They shape how we work, 
            how we build, and how we measure success.
          </p>
        </motion.div>

        {/* Beliefs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/14 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <belief.icon className="w-8 h-8 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-4">{belief.title}</h3>
              <p className="text-text-secondary leading-relaxed">{belief.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
