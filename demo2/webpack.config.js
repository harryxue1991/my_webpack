const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: {
                main: path.resolve(__dirname, 'src/main')
        },
        output: {
                path: path.resolve(__dirname, '/'),
                publicPath: '/',
                filename: '[name].[hash:8].js'
        },
        devServer: {
                port: 9999,
                inline: true,
                // 文件更新，页面自动刷新
                historyApiFallback: true
        },
        module: {
                rules: [
                        {
                                test: /\.vue$/,
                                use: 'vue-loader'
                        },
                        {
                                test: /\.js$/,
                                use: 'babel-loader',
                                /* 排除安装目录的文件 */
                                exclude: /node_modules/
                        },
                        {
                                test: /\.css/,
                                use: ExtractTextPlugin.extract({
                                        use: 'css-loader'
                                })
                        },
                        {
                                test:/\.scss$/,
                                use: ExtractTextPlugin.extract({
                                        fallback: 'style-loader',
                                        use: ['css-loader', 'sass-loader']
                                })
                        },
                        {
                                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                                loader: 'url-loader',
                                options: {
                                        limit: 8192
                                }
                        }
                ]
        },
        plugins: [
                new ExtractTextPlugin('style.[contenthash:8].css'),
                new HtmlWebpackPlugin({
                        template : './template.ejs',
                        title: '尖叫蕈',
                        inject: 'body'
                })
        ]
};