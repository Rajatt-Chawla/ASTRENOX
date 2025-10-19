'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Company', href: '/company' },
      { name: 'Careers', href: '/about-us#careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'AI Transformation', href: '/ai-transformation' },
      { name: 'AI Engineering', href: '/ai-engineering' },
      { name: 'Intelligent Automations', href: '/intelligent-automations' },
      { name: 'Digital Services', href: '/consulting-modernization' }
    ],
    resources: [
      { name: 'Industries', href: '/industries' },
      { name: 'Products', href: '/products' },
      { name: 'Hire Talent', href: '/hire-talent' },
      { name: 'MVP Studio', href: '/mvp-studio' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ]

  return (
    <footer className="bg-bg-elevated border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">Astrenox</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  We create AI-first digital transformations that drive engineering disruption and measurable outcomes. 
                  Your success is our mission.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Mail className="w-4 h-4 text-accent-primary" />
                  <span>hello@astrenox.com</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <Phone className="w-4 h-4 text-accent-primary" />
                  <span>+91 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent-primary" />
                  <span>Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-text-primary mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-text-secondary hover:text-text-primary transition-colors duration-fast"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border-soft"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-text-primary mb-4">
              Stay Updated
            </h4>
            <p className="text-text-secondary mb-6">
              Get the latest insights, tips, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-bg-base border border-border-soft rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/35 focus:border-accent-primary/45 transition-all duration-fast"
              />
              <button className="bg-accent-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-solid-hover hover:shadow-float transition-all duration-fast">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border-soft"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-text-muted text-sm mb-4 md:mb-0">
              © 2025 Astrenox. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-surface-card border border-border-soft rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/35 transition-all duration-fast"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent-primary/20 border border-accent-primary/35 rounded-lg flex items-center justify-center text-accent-primary hover:bg-accent-primary/30 transition-all duration-fast"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
