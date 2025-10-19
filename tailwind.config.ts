import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background System
        'bg-base': '#0B0F14',
        'bg-elevated': '#0E131B',
        'surface-card': '#101724',
        
        // Text System
        'text-primary': 'rgba(255,255,255,0.92)',
        'text-secondary': 'rgba(255,255,255,0.72)',
        'text-muted': 'rgba(255,255,255,0.56)',
        'text-inverted': '#0B0F14',
        
        // Accent Colors
        'accent-primary': '#7C3AED',
        'accent-secondary': '#22D3EE',
        'cta-solid': '#7C3AED',
        'cta-solid-hover': '#6A2ED3',
        
        // State Colors
        'info': '#22D3EE',
        'success': '#10B981',
        'warning': '#F59E0B',
        'danger': '#EF4444',
        
        // Border Colors
        'border-soft': 'rgba(255,255,255,0.08)',
        'divider': 'rgba(255,255,255,0.06)',
        'cta-outline-border': 'rgba(255,255,255,0.18)',
        'cta-outline-hover-bg': 'rgba(124,58,237,0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['48px', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['40px', { lineHeight: '1.10', letterSpacing: '-0.01em', fontWeight: '800' }],
        'h2': ['32px', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.18', letterSpacing: '-0.005em', fontWeight: '700' }],
        'lead': ['18px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.7', letterSpacing: '0em', fontWeight: '500' }],
        'sm': ['14px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '600' }],
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
      },
      boxShadow: {
        'card': '0 1px 0 rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.35)',
        'float': '0 6px 20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)',
        'glow-primary': '0 0 120px rgba(124,58,237,0.25)',
        'glow-secondary': '0 0 120px rgba(34,211,238,0.20)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)',
        'overlay-gradient': 'radial-gradient(60% 60% at 70% 10%, rgba(124,58,237,0.18) 0%, rgba(0,0,0,0) 60%), radial-gradient(50% 50% at 20% 20%, rgba(34,211,238,0.14) 0%, rgba(0,0,0,0) 55%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        'fast': '0.18s',
        'med': '0.28s',
        'slow': '0.45s',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-inout': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
