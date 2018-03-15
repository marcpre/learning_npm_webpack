const path = require('path');
/*
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})
*/
module.exports = {
    devtool: 'cheap-module-eval-source-map'
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        test: /\.(png|jpe?g|gif)$/,
                        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
                    }
                ]
            }
        ],
        /*
        {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.jsx$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
        */
    },
    plugins: [HtmlWebpackPluginConfig]
}
