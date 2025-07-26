const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      '.animate-accordion-down': {
        animation: 'accordion-down 0.2s ease-out',
      },
      '.animate-accordion-up': {
        animation: 'accordion-up 0.2s ease-out',
      },
      '.animate-fade-in': {
        animation: 'fade-in 0.6s ease-out',
      },
      '.animate-glow': {
        animation: 'glow 2s ease-in-out infinite',
      },
      '.animate-pulse-glow': {
        animation: 'pulse-glow 3s ease-in-out infinite',
      },
      '.animate-float': {
        animation: 'float 6s ease-in-out infinite',
      },
      '.animate-glitch': {
        animation: 'glitch 0.3s ease-in-out infinite',
      },
    })
  },
  {
    theme: {
      extend: {
        keyframes: {
          'accordion-down': {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
          },
          'fade-in': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'glow': {
            '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.6)' },
          },
          'pulse-glow': {
            '0%, 100%': { 
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
              transform: 'scale(1)'
            },
            '50%': { 
              boxShadow: '0 0 40px rgba(0, 229, 255, 0.8)',
              transform: 'scale(1.05)'
            },
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          'glitch': {
            '0%, 100%': { transform: 'translate(0)' },
            '20%': { transform: 'translate(-2px, 2px)' },
            '40%': { transform: 'translate(-2px, -2px)' },
            '60%': { transform: 'translate(2px, 2px)' },
            '80%': { transform: 'translate(2px, -2px)' },
          },
        },
      },
    },
  }
) 