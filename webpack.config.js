/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');


module.exports = {
    mode: "production",
    entry: "./src/index.js",
    resolve: {
        extensions: ['', '.js', '.jsx', '.tsx']
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "build"),
        filename: "bundled.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: true,
    },
    module: {

        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },


            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new Dotenv({
            systemvars: true,
        }),
    ],
}