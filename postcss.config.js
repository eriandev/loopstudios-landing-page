const tailwindcss = require('tailwindcss')
const postcssImport = require('postcss-import')
const cssnano = require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
  }],
})

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ]
}
