const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {
//     BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer');

module.exports = {
    entry: path.resolve('src/js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js'
        // , clean: true
    },
    module: {
        rules: [{
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['img-optimize-loader']
            },
            {
                test: /\.(mp3|mp4)$/i,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'template.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        })
        // , new BundleAnalyzerPlugin()
    ]
};

// npx webpack --mode=development
// npm start