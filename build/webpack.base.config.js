const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');
// const ForkTsCheckWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        'app': './src/index.tsx' // 入口文件
    },
    output: {
        path: path.resolve(process.cwd(), 'publish'),
        filename: '[name].[contenthash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: 'ts-loader',
                    loader: "awesome-typescript-loader",
                    options: {
                        transpileOnly: true // 快速构建模式，开启后只做语言转换，不做类型检查
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
    //   new ForkTsCheckWebpackPlugin()
    new CheckerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', //webpack的拆包
            name: 'vendor'
        }
    }
}