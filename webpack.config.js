const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = {
    // entry: './DateCalculator/js/main.js',
    entry: path.resolve('DateCalculator/js', 'main.js'),
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: ['file-loader']
            },

            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'name.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'template.html')
        })
        // , new BundleAnalyzerPlugin()
    ]
};