module.exports = {
  mode:'jit',
  purge: ["build/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'w95' : '99vh'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
       },
      keyframes : {
        wiggle: {
          '0%': {  opacity : '0' },
          '50%': { opacity : '0.5' },
          '100%': { opacity : '1'  },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
