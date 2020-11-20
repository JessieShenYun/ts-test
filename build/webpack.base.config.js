const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: {
        'index': './src/index.ts' // 入口文件
    },
    output: {
        path: path.resolve(process.cwd(), 'publish'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}