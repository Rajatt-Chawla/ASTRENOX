'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'AI Consulting', 
      href: '#',
      dropdown: [
        { name: 'AI Transformation', href: '/ai-transformation' },
        { name: 'AI Engineering', href: '/ai-engineering' },
        { name: 'Intelligent Automations', href: '/intelligent-automations' }
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Digital Services', href: '/consulting-modernization' },
    { name: 'Hire Talent', href: '/hire-talent' },
    { name: 'MVP Studio', href: '/mvp-studio' },
    { name: 'Who We Are', href: '/about-us' },
    { name: 'Industries', href: '/industries' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-med ${
      isScrolled 
        ? 'bg-bg-elevated/70 backdrop-blur-xl border-b border-border-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold gradient-text">
              Astrenox
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary font-medium transition-colors duration-fast"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-bg-elevated border border-border-soft rounded-lg shadow-float opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-fast z-50">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors duration-fast"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
              <Button variant="secondary" size="sm" onClick={() => window.location.href = '/get-started'}>
                Get Started
              </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-accent-primary transition-colors duration-fast"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-bg-elevated/95 backdrop-blur-xl rounded-lg mt-2 border border-border-soft">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-text-primary font-medium transition-colors duration-fast"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-text-muted hover:text-text-primary font-medium transition-colors duration-fast"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button variant="secondary" size="sm" className="w-full" onClick={() => window.location.href = '/get-started'}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
