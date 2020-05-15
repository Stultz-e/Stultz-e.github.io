const merge = require('webpack-merge');
const common = require('./webpack-common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, { 
    mode: 'development',
    devServer: {
		contentBase: './dist',
		open: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },    
                    {
                        test: /\.(gif|png|jpe?g|svg)$/i,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[path][name].[ext]',
                                    context: 'src'
                                }
                            }
                        ]
                    },
                ],
            },
        ],
    }
});