'use client'

import { motion } from 'framer-motion'
import { Bot, Database, Zap, Code, Globe, Shield } from 'lucide-react'

export default function WhatWeBuild() {
  const examples = [
    { icon: Bot, title: 'AI-powered SaaS tools', description: 'Intelligent applications with AI capabilities' },
    { icon: Database, title: 'Data & analytics platforms', description: 'Dashboards and data visualization tools' },
    { icon: Zap, title: 'Workflow automation apps', description: 'Process automation and integration platforms' },
    { icon: Code, title: 'Internal tools & portals', description: 'Employee-facing applications and dashboards' },
    { icon: Globe, title: 'Marketplace & directory sites', description: 'Two-sided platforms and listings' },
    { icon: Shield, title: 'Compliance & audit trackers', description: 'Regulatory and compliance management tools' }
  ]

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
            What We Build
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            AI-first MVPs across industries and use cases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <example.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">{example.title}</h3>
              <p className="text-text-secondary">{example.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
