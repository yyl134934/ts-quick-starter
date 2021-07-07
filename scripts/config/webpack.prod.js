const webpack = require('webpack');
const { merge } = require('webpack-merge');
// const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');
// const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

const { PROJECT_PATH, shouldOpenAnalyzer, ANALYZER_HOST, ANALYZER_PORT } = require('../constants');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      raw: true,
      banner:
        '/** @preserve Powered by react-ts-quick-starter (https://github.com/vortesnail/react-ts-quick-starter) */',
    }),
    shouldOpenAnalyzer && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
});
