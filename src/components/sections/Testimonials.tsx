'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, FinTech Startup',
      avatar: 'SJ',
      rating: 5,
      content: 'Astrenox transformed our AI adoption journey. Their systematic approach helped us identify bottlenecks we never knew existed. Our development velocity increased by 40% and we shipped our AI features 3 weeks ahead of schedule.'
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering, Healthcare SaaS',
      avatar: 'MC',
      rating: 5,
      content: 'Working with Astrenox was a game-changer. They didn\'t just implement AI tools—they helped us think differently about our entire engineering process. The ROI has been incredible.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product, E-commerce Platform',
      avatar: 'ER',
      rating: 5,
      content: 'The team at Astrenox is incredibly professional and technically excellent. They delivered our AI automation project on time and within budget. Our operational efficiency improved by 60%.'
    },
    {
      name: 'David Thompson',
      role: 'Founder, Manufacturing Tech',
      avatar: 'DT',
      rating: 5,
      content: 'From strategy to execution, Astrenox made our AI transformation seamless. Their engineering-first approach delivered measurable outcomes that exceeded all our expectations.'
    },
    {
      name: 'Lisa Park',
      role: 'CEO, Data Analytics Company',
      avatar: 'LP',
      rating: 5,
      content: 'Astrenox helped us create an AI-first culture that truly transformed our business. The systematic approach and engineering excellence is unmatched in the industry.'
    },
    {
      name: 'James Wilson',
      role: 'CTO, Media & Entertainment',
      avatar: 'JW',
      rating: 5,
      content: 'The level of AI expertise and engineering rigor at Astrenox is unmatched. They delivered solutions that not only work flawlessly but also scale beautifully as we grow.'
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-bg-base">
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
            ⭐ Client Testimonials
          </div>
          <h2 className="text-h1 font-bold text-text-primary mb-6">
            What Our Clients
            <span className="block gradient-text">Say About Us</span>
          </h2>
          <p className="text-lead text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with our team.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-surface-card/50 border border-border-soft rounded-xl p-6 h-full hover:border-white/14 hover:shadow-card transition-all duration-med">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent-primary/60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warning fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-primary/20 rounded-full flex items-center justify-center text-accent-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-surface-card border border-border-soft rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-text-primary mb-2">500+</div>
                <div className="text-sm text-text-muted">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary mb-2">98%</div>
                <div className="text-sm text-text-muted">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary mb-2">5.0</div>
                <div className="text-sm text-text-muted">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary mb-2">24/7</div>
                <div className="text-sm text-text-muted">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
