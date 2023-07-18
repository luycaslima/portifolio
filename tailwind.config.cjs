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
        'fade-in-3':'fade-in-3 0.5s ease-in',
        'fade-in-2':'fade-in-2 0.4s ease-in',
        'fade-in-1': 'fade-in-1 0.3s ease-in',
        'fade-in-page': 'fade-in-page 0.2s ease-in',
        'reverse-spin': 'reverse-spin 5.5s linear infinite'
      },
      keyframes: {
        'fade-in-page':{
          '0%':{ 
              opacity: '0',
              transform: 'translateY(-24px)',
            },
          '100%':{ 
              opacity: '1',
              transform: 'translateY(0px)',
            }
        },
        'fade-in-3' :{ 
          '0%':{ 
              opacity: '0',
              transform: 'translateY(-64px)',
            },
          '100%':{ 
              opacity: '1',
              transform: 'translateY(0px)',
            }
        },
        'fade-in-2' :{ 
          '0%':{ 
              opacity: '0.2',
              transform: 'translateY(-48px)',
            },
          '100%':{ 
              opacity: '1',
              transform: 'translateY(0px)',
            }
        },
        'fade-in-1' :{ 
          '0%':{ 
              opacity: '0.3',
              transform: 'translateY(-32px)',
            },
          '100%':{ 
              opacity: '1',
              transform: 'translateY(0px)',
            }
        },
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
