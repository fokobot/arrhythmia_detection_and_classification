module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F2E307',
          200: '#F2D338',
          300: '#F2E399',
        },
        secondary: '#26211F',
        tertiary: '#D9D9D9',
      },
      fontFamily: {
        body: ['Arvo'],
      },
      backgroundImage: {
        'flat-geometric': "linear-gradient(to right, rgba(#B49FCC, 0.8), rgba(#6D466B, 0.8)),  url('../images/flat-geometric-shapes-background.jpg')",
      }
    },
  },
  variants: {},
  plugins: [],
}
