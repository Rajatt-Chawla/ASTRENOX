'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, MessageSquare, FileText, Code, Slack } from 'lucide-react'

export default function EngagementModel() {
  const engagementFeatures = [
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your dedicated AI engineering squad works exclusively on your projects with full context and continuity.'
    },
    {
      icon: Calendar,
      title: 'Sprint Cycles',
      description: 'Agile development with 2-week sprints, regular demos, and continuous delivery of working software.'
    },
    {
      icon: MessageSquare,
      title: 'Project Management',
      description: 'Dedicated project manager ensures smooth communication, timeline tracking, and stakeholder alignment.'
    },
    {
      icon: MessageSquare,
      title: 'Check-ins',
      description: 'Regular sync meetings, progress reviews, and strategic alignment sessions with your team.'
    },
    {
      icon: FileText,
      title: 'Ticket Submission',
      description: 'Structured ticket system for feature requests, bug reports, and priority management.'
    },
    {
      icon: Code,
      title: 'Code Submission',
      description: 'Direct code access and collaboration through your preferred development tools and repositories.'
    },
    {
      icon: Slack,
      title: 'Comms (Slack)',
      description: 'Real-time communication through Slack integration for instant collaboration and support.'
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
            🤝 Engagement Model
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            How We Work
            <span className="block gradient-text">With Your Team</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Our engagement model is designed for seamless integration with your existing workflows 
            while maintaining the highest standards of communication and delivery.
          </p>
        </motion.div>

        {/* Engagement Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engagementFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-xl p-6 hover:shadow-float transition-all duration-med hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Scale Your AI Engineering?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your AI engineering needs and create a custom engagement plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-solid-hover hover:shadow-float hover:scale-102 transition-all duration-fast">
                Get Started
              </button>
              <button className="bg-transparent text-text-primary border border-cta-outline-border px-6 py-3 rounded-lg font-semibold hover:bg-cta-outline-hover-bg hover:border-white/28 transition-all duration-fast">
                See Intelligent Automations
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
