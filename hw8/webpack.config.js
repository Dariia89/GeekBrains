const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./public/js/main.js', './public/js/CartComponent.js', './public/js/ErrorComp.js', './public/js/SearchComponent.js', './public/js/ProductComponent.js'],
    output: {
        filename: './build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },            
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                  use: [
                    'vue-style-loader',
                    'css-loader',
                  ]
             },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new VueLoaderPlugin()
    ]
}


