const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    // resolve: {
    //     alias: {
    //         "@": path.resolve(__dirname, "./src")
    //     }
    // },
    devServer: {
        // 打开浏览器
        open: true,
        // 启用gzip压缩
        compress: true,
        clientLogLevel: 'info',
        hot: true,
        watchOptions: {
            ignored: /node_modules/,
        },
        overlay: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: "index.html",
        }),
    ]
};
