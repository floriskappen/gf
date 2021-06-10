module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bottom-top-in': 'bottom-top-in .3s ease-in-out',
        'bottom-top-out': 'bottom-top-out .3s ease-in-out',
      },
      keyframes: {
        'bottom-top-in': {
          '0%': {
            transform: 'translateY(28px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 100
          }
        },
        'bottom-top-out': {
          '0%': {
            transform: 'translateY(0px)',
            opacity: 100
          },
          '100%': {
            transform: 'translateY(28px)',
            opacity: 0
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
