const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, 'src/containers/index.js')
        ]
    },
    output: {
        filename: 'js/bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0',
                        'react'
                    ]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass'),
                publicPath: '/'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        // Extract out the CSS into their own external files
        new ExtractTextPlugin('css/[name].css', {
            disable: false,
            path: path.join(__dirname, '/dist'),
            publicPath: '/'
        }),

        // HTML output
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            inject: 'body',
            filename: 'index.html',
            // Minification options:
            // https://github.com/kangax/html-minifier#options-quick-reference
            minify: {
                collapseWhitespace: true,
                minifyJS: true,
                removeComments: true
            }
        })
    ],
    resolve: {
        root: path.join(__dirname, 'src/components'),
        extensions: [
            '',
            '.js',
            '.es6'
        ]
    },
};
