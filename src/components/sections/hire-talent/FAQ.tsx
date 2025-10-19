'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How fast can we start?',
      answer: 'Often within a week after intake; complex roles may need longer.'
    },
    {
      question: 'Can you match our stack and rituals?',
      answer: 'Yes—your tracker, your stand-ups; we add our quality gates.'
    },
    {
      question: 'Do you provide time-zone overlap?',
      answer: 'We staff to your overlap requirement during intake.'
    },
    {
      question: 'What if the fit isn\'t right?',
      answer: 'We replace quickly and help stabilize the roadmap.'
    },
    {
      question: 'Can you help define the role?',
      answer: 'Absolutely—most requests start with outcomes, then skills.'
    },
    {
      question: 'Do you support security reviews?',
      answer: 'Yes—vendor assessments, onboarding artifacts, and access controls.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-bg-elevated/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-bold text-text-primary mb-6">FAQ</h2>
        </motion.div>

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
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
