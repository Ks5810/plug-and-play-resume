/**
 * webpack.common.config.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
    mode: 'none',
    module: {
        rules: [ {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: "url-loader"
        }, {
            test: /\.(ttf|eot|svg|gif)(\?[\s\S]+)?$/,
            use: 'file-loader'
        },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new GenerateSW(),
    ]
};
