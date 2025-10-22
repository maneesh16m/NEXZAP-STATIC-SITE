const path = require('path');

module.exports = function override(config, env) {
  // Add bundle analyzer
  if (env === 'production') {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle-report.html'
      })
    );
  }

  // Minimal optimization for fastest loading
  config.optimization = {
    ...config.optimization,
    splitChunks: false, // Disable chunking for maximum speed
    concatenateModules: true,
  };

  return config;
};
