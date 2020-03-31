/**
 *  dev.js
 *  @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga
 *  ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        publicPath: "/static/bundles/",
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../static/bundles')
    },
    module: {
        rules: [
            {
             test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleTracker({
            path: path.join(__dirname, '../'),
            filename: 'webpack-stats-dev.json'
        })
    ]
});