const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let commonConfig = {
    entry: {
        main: path.resolve(__dirname, 'src/main'),
        vendors: ['vue']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
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
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[hash:8].[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            styles: path.resolve(__dirname, 'src/styles/')
        },
        extensions: ['.js']
    },
    plugins: [
        new ExtractTextPlugin('style.[contenthash:8].css'),
        new HtmlWebpackPlugin({
            template: './template.ejs',
            title: '尖叫蕈',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        })
    ]
};

module.exports = commonConfig;