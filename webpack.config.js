/*!
 * @license
 * Copyright (C) 2020 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: './src/script/main.ts',
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        path: path.resolve(__dirname, './dist/script'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'FlatWire',
            template: './src/index.html',
            scriptLoading: 'defer',
            filename: '../index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: '../assets' }
            ],
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};