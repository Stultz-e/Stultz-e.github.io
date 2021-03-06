const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = merge(common, { 
    mode: "production",
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            publicPath: './'
        }),
        new ImageminPlugin({
            cacheFolder: './cache',
            pngquant: {
                quality: '95-100'
            },
            mozjpeg: {
                progressive: true,
                quality: 65
            },
            optipng: {
                enabled: true,
            },
            pngquant: {
                quality: '65-90',
                speed: 4
            },
            gifsicle: {
                interlaced: false,
            },
            svgo: null, 
            externalImages: {
                context: './src/images',
                destination: './dist/images',
                fileName: '[path][name].[ext]'
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }  
                    },    
                ]
            },
            {
                test: /\.svg$/i,
                exclude: /image\/icons/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            context: 'src',
                            name: (resourcePath) => {
                                if(/node_modules/.test(resourcePath)) {
                                    return 'images/[name].[ext]'; 
                                }
                                return '[path][name].[ext]';
                            }
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { collapseGroups: false },
                                { cleanupIDS: false },
                                { removeViewBox: false },
                                { removeDimensions: true }
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            context: 'src',
                            name: (resourcePath) => {
                                if (/node_modules/.test(resourcePath)) {
                                    return 'images/[name].[ext]';
                                }
                                return '[path][name].[ext]';
                            }
                        },
                    }
                ]
            },
        ]
    },
});


