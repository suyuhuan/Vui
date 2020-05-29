var webpackConfig = require('@vue/cli-service/webpack.config.js')
const path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'test/**/*.test.js',
      'test/**/*.test.css'
    ],

    preprocessors: {
      '**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['test', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    autoWatch: true,

    browsers: ['ChromeHeadless']
  })
}
