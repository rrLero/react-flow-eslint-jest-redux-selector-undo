const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    entry: {
        app: './src/index.js',
        polyfills: 'babel-polyfill'
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: [
            '.less',
            '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new BrowserSyncPlugin({
            open: false,
            notify: false,
            port: 9000,
            proxy: 'http://localhost:8080/'
        },
        {
            reload: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                API_KEY: JSON.stringify(process.env.API_KEY)
            }
        }),
        new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve()
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?{minimize: true}!less-loader'
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './images/[name].[ext]'
                    }
                }
            }
        ]
    }
};
