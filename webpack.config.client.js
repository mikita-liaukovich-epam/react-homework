const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(commonConfig, {
    mode: process.env.NODE_ENV,
    name: 'client',
    target: 'web',

    entry: [
        isDevMod && 'webpack-hot-middleware/client',
        './src/client.js',
    ].filter(Boolean),

    plugins: [
        !isDevMod && new CleanWebpackPlugin(),
        isDevMod && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
})