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
        // Brand colors
        navy: {
          900: 'var(--navy-900)',
          950: 'var(--navy-950)',
        },
        coral: {
          500: 'var(--coral-500)',
        },
        blue: {
          400: 'var(--blue-400)',
          500: 'var(--blue-500)',
        },
        lavender: {
          300: 'var(--lavender-300)',
          400: 'var(--lavender-400)',
          500: 'var(--lavender-500)',
        },
        gray: {
          100: 'var(--gray-100)',
          400: 'var(--gray-400)',
          600: 'var(--gray-600)',
          900: 'var(--gray-900)',
        },
        'off-white': 'var(--off-white)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: 'var(--text-hero)',
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
        h3: 'var(--text-h3)',
        lg: 'var(--text-lg)',
        base: 'var(--text-base)',
        sm: 'var(--text-sm)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        container: '1280px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '20px',
        xl: '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
