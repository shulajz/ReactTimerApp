var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-tap',
      'karma-sourcemap-loader',
      'karma-webpack' // *** This 'registers' the Karma webpack plugin.
    ],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }

  });
};
