const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'main-bundle-[hash].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.develop.html'
      })
    ],
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: './public'
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
};