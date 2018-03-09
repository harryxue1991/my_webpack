const path = require('path');
const webpack = require('webpack');

module.exports = {
        entry: {
                main: path.resolve(__dirname, 'src/main')
        },
        output: {
                path: path.resolve(__dirname, './dist'),
                publicPath: '/dist/',
                filename: 'build.js'
        },
        devServer: {
                port: 9999,
                inline: true,
                // 文件更新，页面自动刷新
                historyApiFallback: true,
        },
        module: {
                rules: [
                        {
                                test: /\.vue$/,
                                loader: 'vue-loader'
                        },
                        {
                                test: /\.js$/,
                                loader: 'babel-loader',
                                /* 排除安装目录的文件 */
                                exclude: /node_modules/
                        }
                ]
        }
};