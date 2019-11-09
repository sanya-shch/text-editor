const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const directoryNameWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    resolve: {
        modules: ['./src', 'node_modules'],
        plugins: [
            new directoryNameWebpackPlugin(true)
        ]
    },
    entry: {
        app: './src/index.js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader : 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|eot|svg|woff|woff2|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'Text Editor',
            template: './src/index.html'
        })
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].bundle.js'
    }
};