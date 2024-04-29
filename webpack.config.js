const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/i,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                autoprefixer
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ],
        },
        {
            
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
    ],
    }
}