/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        ghostWhite: '#F7F7FF',
        orangeRedCrayole: '#FE5F55',
        richBlackFogra: '#001021',
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'russo-one': ['Russo One', 'sans-serif'],
        'keania-one': ['Keania One','cursive']
      },
      animation: {
        'reverse-spin': 'reverse-spin 5.5s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(-360deg)'
          },
        }
      },
    },
  },
  plugins: [],
}
