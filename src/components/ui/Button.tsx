'use client'

import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-fast focus:outline-none focus:ring-3 focus:ring-accent-primary/35 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'bg-accent-primary text-white hover:bg-cta-solid-hover hover:shadow-float hover:scale-102',
      secondary: 'bg-transparent text-text-primary border border-cta-outline-border hover:bg-cta-outline-hover-bg hover:border-white/28',
      tertiary: 'bg-transparent text-text-secondary hover:text-text-primary hover:underline'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-3 text-base',
      lg: 'px-6 py-4 text-lg'
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: variant === 'primary' ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
