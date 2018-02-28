const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        }),
        new CompressionPlugin({
            cache: true,
            asset: '[path].gz[query]',
            algorithm: 'gzip'
        })
    ]
});
