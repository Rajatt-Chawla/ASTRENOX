'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do you approach AI transformation strategy?',
      answer: 'We start with a comprehensive 30/60/90-day assessment that includes holistic and function-specific audits. This results in an AI-Adoption Report with technical appendix that maps your current state to AI-native capabilities.'
    },
    {
      question: 'What makes Astrenox different from other AI consultancies?',
      answer: 'We combine strategic consulting with hands-on engineering execution. Unlike pure consultancies, we actually build and deploy the solutions. Our engineering-first approach ensures solutions that work in production, not just on paper.'
    },
    {
      question: 'Do you work with existing AI tools and platforms?',
      answer: 'Absolutely! We orchestrate the entire AI ecosystem including OpenAI, Anthropic, Google, Meta, and specialized tools like LangGraph, CrewAI, and n8n. We build vendor-agnostic architectures that avoid lock-in.'
    },
    {
      question: 'What types of AI solutions do you build?',
      answer: 'We build AI chatbots, assistants, autonomous agents, workflow automations, knowledge search systems, and document automation tools. We focus on production-ready solutions that integrate with your existing tools and data.'
    },
    {
      question: 'How do you ensure AI solutions are secure and compliant?',
      answer: 'All our solutions include enterprise-grade security, audit trails, and governance controls. We follow best practices for data privacy, access control, and compliance requirements specific to your industry.'
    },
    {
      question: 'What is your engagement model for AI engineering?',
      answer: 'We offer dedicated teams, sprint cycles, and outcome-based engagements. Our squads include PM, QA, and DevOps specialists. We provide regular check-ins, ticket submission, and joined communication channels.'
    },
    {
      question: 'How do you measure success and ROI?',
      answer: 'We tie every initiative to specific business metrics and KPIs. Our systematic approach includes baseline measurements, pilot programs, and continuous optimization to ensure measurable outcomes and clear ROI.'
    },
    {
      question: 'Do you provide training and change management?',
      answer: 'Yes! We offer bespoke training curricula, hands-on workshops, and change management programs. We help your team adopt AI-first practices and ensure successful implementation across your organization.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-bg-elevated/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
            ❓ Frequently Asked
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            Got Questions?
            <span className="block gradient-text">We Have Answers</span>
          </h2>
          <p className="text-lead text-text-secondary">
            Find answers to the most common questions about our services, 
            process, and what you can expect when working with us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-surface-card border border-border-soft rounded-lg overflow-hidden hover:border-white/14 transition-colors duration-fast"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/2 transition-colors duration-fast"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-accent-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-text-muted" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Talk to our AI experts
            </h3>
            <p className="text-text-secondary mb-6">
              Ready to start your AI transformation journey? Get in touch with our team 
              for personalized guidance and strategic insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-solid-hover hover:shadow-float hover:scale-102 transition-all duration-fast">
                Get Started
              </button>
              <button className="bg-transparent text-text-primary border border-cta-outline-border px-6 py-3 rounded-lg font-semibold hover:bg-cta-outline-hover-bg hover:border-white/28 transition-all duration-fast">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
