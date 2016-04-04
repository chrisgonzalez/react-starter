const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, 'containers/index.js')
        ]
    },
    output: {
        filename: path.join(__dirname, 'dist/js/bundle.js'),
        publicPath: '/dist'
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
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
            }
        ]
    },
    plugins: [
        // Extract out the CSS into their own external files
        new ExtractTextPlugin('dist/css/[name].css', {
            disable: false
        })
    ],
    resolve: {
        root: path.join(__dirname, 'components'),
        extensions: [
            '',
            '.js',
            '.es6'
        ]
    },
};
