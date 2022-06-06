module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
    },
    colors: {
      // Usar fora do Extend não me permite utilizar as cores default do tailwind
      primary: '#001021',
      secondary: '#FE5F55',
      bg: '#F7F7FF',
      secondaryBG: '#E7E7F2',
      terciary: '#BDD5EA',
      fourth: '#495867',
      darkBG: '#577399'
    }
  },
  plugins: []
}
