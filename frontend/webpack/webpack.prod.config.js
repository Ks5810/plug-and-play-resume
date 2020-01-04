/**
 * prod.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../', 'static', 'bundles'),
        filename: "main.js"
    },
    devtool: 'source-map',
    optimization: {
        detectDuplicates: true,
        uglify: true,
        minimize: true,
    },
    plugins: [
        new common.optimize.AggressiveMergingPlugin(),
        new BundleTracker({
            path: path.join(__dirname, '../'),
            filename: path.join('webpack-stats-prod.json'),
        })
    ]
});