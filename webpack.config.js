const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'development',
entry: {
    index: './src/index.js'
},
 
//    devtool: 'inline-source-map', //( not for production):
//    adding bundles to your HTML, 
plugins: [
new HtmlWebpackPlugin({
    title: 'Output Management',
}),
],
devServer: {
static: './dist',
port: 9000,
},
output: {
filename: '[name].[contenthash].js',
path: path.resolve(__dirname, 'dist'),
clean: true,
},
optimization: {
moduleIds: 'deterministic',
runtimeChunk: 'single',
splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
},
};