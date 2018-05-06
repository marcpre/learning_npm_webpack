# learning_npm_webpack

> webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. [Github - Webpack Documentation](https://github.com/webpack/webpack)

## Install

`npm install webpack webpack-dev-server --save-dev`


### How it works

1. Entry Point: Webpack has at least 1 entry point e.g. `app.js`
2. Loaders: Loaders are used to do file type dependent transformation
3. Pluging: Webpack has global plugins e.g. `uglify`
4. Output: Concatenates the output correctly.

## Source Map

> A source map provides a way of mapping code within a compressed file back to it’s original position in a source file. This means that — with the help of a bit of software — you can easily debug your applications even after your assets have been optimized. The Chrome and Firefox developer tools both ship with built-in support for source maps.

### Sample Webpack Config File

```
const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, './src');
const DIST = path.resolve(__dirname, './dist');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: SRC,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: SRC,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: SRC,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    hot: true, // Enable Hot Module Replacement feature.
    open: true, // When open is enabled, the dev server will open the browser.
    overlay: true, // Show a full-screen overlay in the browser when there are compiler errors or warnings.
    port: 8080 // Specify a port number to listen for requests on.
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = '#source-map';
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    // Short-circuit all warning code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // Minify with dead-code elimination.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      parallel: true
    })
  ]);
}
```
[Using SourceMaps in VueJS](https://medium.com/@BjornKrols/a-basic-introduction-to-debugging-vue-applications-using-breakpoints-2ef76ce419f2)



Course stopped at:
--> finished at 362
