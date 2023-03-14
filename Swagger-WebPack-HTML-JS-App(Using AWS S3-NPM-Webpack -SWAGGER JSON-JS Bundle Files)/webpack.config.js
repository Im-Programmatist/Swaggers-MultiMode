const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'dist');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        // tell webpack where our code is
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.yaml$/,
                use: [
                    { loader: 'yaml-loader' },
                    //{ loader: 'json-loader' },
                ]
            },
            // {
            //     test: /\.json$/,
            //     use: [
            //         //{ loader: 'yaml-loader' },
            //         { loader: 'json-loader' },
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                ]
            }
        ]
    },
    plugins: [
        // tell webpack to use our template we created
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new NodePolyfillPlugin()
    ],
    // tell webpack where to output the build code to - './dist'
    output: {
        filename: '[name].bundle.js',
        path: outputPath,
    }
};