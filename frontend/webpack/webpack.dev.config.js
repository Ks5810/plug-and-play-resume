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
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'file-loader?name=[name].[ext]',
                    'extract-loader',
                    'html-loader'
                ],
            }
        ]
    },
    entry: [
        './src/app.js',
        './static/index.html'
    ],
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../static'),
        historyApiFallback: true,
        publicPath: 'http://localhost:3000/bundles/',
        headers: { 'Access-Control-Allow-Origin': '*' },
        liveReload: false,
        hot: true,
        inline: true,
        port: 3000
    },
    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({ multiStep: true }),
        new BundleTracker({
            path: path.join(__dirname, '../'),
            filename: 'webpack-stats-dev.json'
        })
    ]
});