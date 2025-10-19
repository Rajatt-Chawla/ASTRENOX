'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Award,
  CheckCircle
} from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Our solutions are designed to convert visitors into customers, with proven strategies that boost your bottom line.',
      stats: '+150% avg. revenue increase'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Streamlined processes and automation tools that save you hours every week, letting you focus on what matters most.',
      stats: 'Save 20+ hours per week'
    },
    {
      icon: Target,
      title: 'Better Targeting',
      description: 'Advanced analytics and user insights help you reach the right audience with the right message at the right time.',
      stats: '3x higher engagement rates'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Enterprise-grade solutions with exceptional attention to detail that set you apart from the competition.',
      stats: '99.9% uptime guarantee'
    }
  ]

  const features = [
    'Custom design tailored to your brand',
    'Mobile-responsive across all devices',
    'SEO optimized for better rankings',
    'Fast loading times under 2 seconds',
    'Secure hosting and SSL certificates',
    '24/7 technical support included',
    'Regular updates and maintenance',
    'Analytics and performance tracking'
  ]

  return (
    <section id="benefits" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
              🚀 Why Choose Us
            </div>
            
            <h2 className="text-h1 font-bold text-text-primary mb-6">
              Transform Your Business with
              <span className="block gradient-text">Proven Results</span>
            </h2>
            
            <p className="text-lead text-text-secondary mb-8">
              Our clients see measurable improvements in their digital presence, 
              customer engagement, and business growth. Here's what you can expect.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface-card border border-border-soft rounded-lg p-6 hover:border-white/14 transition-colors duration-fast"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-primary/14 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-2">{benefit.title}</h3>
                      <p className="text-sm text-text-secondary mb-2">{benefit.description}</p>
                      <div className="text-xs text-accent-primary font-semibold">{benefit.stats}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-surface-card border border-border-soft rounded-xl p-8 shadow-card">
              <h3 className="text-xl font-bold text-text-primary mb-6">What's Included</h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-border-soft">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-text-primary">500+</div>
                    <div className="text-xs text-text-muted">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">98%</div>
                    <div className="text-xs text-text-muted">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">24/7</div>
                    <div className="text-xs text-text-muted">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-secondary/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
