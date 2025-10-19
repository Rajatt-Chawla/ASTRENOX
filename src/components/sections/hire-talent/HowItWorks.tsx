'use client'

import { motion } from 'framer-motion'
import { Search, Users, Play, CheckCircle, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Intake & role design',
      time: '24–48h',
      description: 'Scope outcomes, must-have skills, time-zone, and budget requirements for your specific needs.'
    },
    {
      icon: Users,
      title: 'Shortlist & interviews',
      time: '3–5 days',
      description: 'Receive 3–5 fits with delivery notes; optional pair-sessions on your code to validate technical fit.'
    },
    {
      icon: Play,
      title: 'Trial sprint (optional)',
      time: '1 week',
      description: 'One-week paid pilot to validate velocity, communication, and code quality before full engagement.'
    },
    {
      icon: CheckCircle,
      title: 'Onboard & scale',
      time: 'Ongoing',
      description: 'We handle contracts, security, and ramp-up; expand capacity as your roadmap grows.'
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
            🔄 How It Works
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            From request to "in the code"
            <span className="block gradient-text">in four steps</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our streamlined process ensures you get the right talent, quickly, 
            with minimal risk and maximum confidence in the outcome.
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
                  <div className="text-sm text-accent-secondary font-semibold">{step.time}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h3>
                <p className="text-lead text-text-secondary">{step.description}</p>
              </div>
              
              <div className="flex-1">
                <div className="bg-surface-card border border-border-soft rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="h-4 bg-accent-primary/30 rounded w-3/4"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-1/2"></div>
                    <div className="h-3 bg-text-muted/30 rounded w-2/3"></div>
                    <div className="h-8 bg-accent-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-accent-secondary font-semibold">Process Step {index + 1}</span>
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
              Ready to Get Started?
            </h3>
            <p className="text-text-secondary mb-6">
              Request your shortlist and start building with elite talent today.
            </p>
            <Button variant="primary" size="lg" className="group">
              Request your shortlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-fast" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
