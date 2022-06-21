module.exports = {
  important: true,

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#161616',

          secondary: '#1A1919',

          accent: '#262626',

          neutral: '#000000',

          'base-100': '#F7F7F7',

          info: '#0072F5',

          success: '#21CA51',

          warning: '#FF6052',

          error: '#DE1B8D',
        },
      },
    ],
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: {
            DEFAULT: '#7CBBE3',
            'light-blue': '#B1E1FF',
          },
          yellow: '#F9F0BA',
          orange: '#FED28F',
          purple: '#D1A4FF',
          green: '#B6E2D0',
        },
      },
    },

    colors: {
      'style9-blue': '#1FA7FF',
      'style9-blue-dark': '#037ecd',
      'style9-red': '#FF5F5F',
      'style9-yellow': '#FFD923',
      'style9-green': '#24D796',
    },

    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
  },
  plugins: [require('daisyui')],
}
