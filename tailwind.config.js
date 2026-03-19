/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        'neon-purple': '#a855f7',
        'neon-violet': '#7c3aed',
        'neon-cyan': '#06b6d4',
        'neon-pink': '#ec4899',
        'dark-bg': '#050508',
        'dark-surface': '#0c0c14',
        'dark-card': '#0f0f1e',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};