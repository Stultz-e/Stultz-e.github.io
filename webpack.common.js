const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
    entry: {
        theme:      './src/theme.js',
        frontpage:  './src/front-page.js',

    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/resources.html',
            filename: 'resources.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/services.html',
            filename: 'services.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/resume.html',
            filename: 'resume.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/designreel.html',
            filename: 'designreel.html',
        }),

       //project pages 
        new HtmlWebpackPlugin({
            template: './src/project-1.html',
            filename: 'project-1.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/project-2.html',
            filename: 'project-2.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/project-3.html',
            filename: 'project-3.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/project-4.html',
            filename: 'project-4.html',
        }),

        //research pages 
        new HtmlWebpackPlugin({
            template: './src/research-1.html',
            filename: 'research-1.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/research-2.html',
            filename: 'research-2.html',
        }),

        new webpack.ProvidePlugin({
            SVGInjector: 'svg-injector-2'
        }),
        new WebpackBuildNotifierPlugin({
            suppressCompileStart: true
        }),
        new SVGSpritemapPlugin('./src/images/icons/**/*.svg', {
            output: {
                filename: 'images/spritemap.svg',
                svg4everybody: true, 
                svgo: true,
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                }]
            },
        ]
    },
};