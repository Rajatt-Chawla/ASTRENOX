'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Users, FileText, CheckCircle } from 'lucide-react'

export default function VettingQuality() {
  const vettingSteps = [
    {
      icon: Brain,
      title: 'Technical screen',
      description: 'Systems thinking, architecture, and debugging under constraints to assess real-world problem-solving skills.'
    },
    {
      icon: Code,
      title: 'Hands-on build',
      description: 'Repo-based challenge reflecting your domain (APIs, data, agents, or UI flows) to test practical skills.'
    },
    {
      icon: Users,
      title: 'Pair programming',
      description: 'Live session to test collaboration, problem framing, and communication skills in real-time.'
    },
    {
      icon: FileText,
      title: 'Code review',
      description: 'Maintainability, observability hooks, tests, and performance trade-offs assessment.'
    },
    {
      icon: CheckCircle,
      title: 'Delivery behaviors',
      description: 'Estimation, ticket hygiene, PR discipline, and async communication evaluation.'
    },
    {
      icon: Users,
      title: 'References & reliability',
      description: 'Prior managers, delivery metrics, and release track record verification.'
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
            🔍 Vetting & Quality Bar
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Proof over
            <span className="block gradient-text">promises</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our comprehensive vetting process ensures you get candidates who can deliver, 
            not just interview well. We assess practical skills, collaboration, and proven results.
          </p>
        </motion.div>

        {/* Vetting Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vettingSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              What You Get
            </h3>
            <p className="text-text-secondary mb-6">
              Output to you: scorecard + sample code + interviewer notes
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Scorecard</h4>
                <p className="text-sm text-text-secondary">Detailed assessment across all criteria</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent-secondary/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-accent-secondary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Sample Code</h4>
                <p className="text-sm text-text-secondary">Real code examples from the challenge</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/14 border border-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Interviewer Notes</h4>
                <p className="text-sm text-text-secondary">Detailed feedback from technical interviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
