const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '/'),
        publicPath: '/',
        filename: '[name].[hash:8].js'
    },
    devServer: {
        port: 9999,
        hot: true,
        // inline: true,
        // 文件更新，页面自动刷新
        historyApiFallback: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})