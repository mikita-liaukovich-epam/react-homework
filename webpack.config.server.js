const nodeExternals = require('webpack-node-externals');
const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    target: 'node',
    name: 'server',
    externals: [nodeExternals()],
});