/**
 * prod.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = merge(common, {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '../', 'static', 'bundles'),
        filename: "main.js"
    },
    devtool: 'source-map',
    optimization: {
        nodeEnv: 'production'
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new BundleTracker({
            path: path.join(__dirname, '../'),
            filename: path.join('webpack-stats-prod.json'),
        })
    ]
});