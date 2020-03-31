/**
 * webpack.common.config.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const DotEnv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'none',
    module: {
        rules: [ {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader",
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.(ttf|eot|svg|gif)(\?[\s\S]+)?$/,
            loader: 'url-loader',
            options: {
                name: "[name].[ext]"
            }
        } ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
    },
    plugins: [
        new DotEnv(),
        new CleanWebpackPlugin(),
        new OfflinePlugin()
    ]
};
