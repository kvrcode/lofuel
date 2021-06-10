module.exports = {
    mode: 'jit',
    purge: [
      './src/**/*.html',
      './src/**/*.js',
      './dist/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'rubik': ['rubik', 'sans-serif']
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  