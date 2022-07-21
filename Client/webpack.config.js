const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
require('@babel/polyfill')

module.exports = (env, opts) => {
  const baseConfig = {
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        '~': path.join(__dirname),
        featurePath: path.join(__dirname, './src/features'),
        layoutPath: path.join(__dirname, './src/layouts'),
        componentPath: path.join(__dirname, './src/components'),
        viewPath: path.join(__dirname, './src/views'),
        commonPath: path.join(__dirname, './src/common'),
        scssPath: path.join(__dirname, './src/scss'),
        dataPath: path.join(__dirName, './src/data')
      }
    },
    entry: {
      main: ['@babel/polyfill', path.join(__dirname, 'App.js')]
    },
    output: {
      filename: '[name].js', // app.js
      path: path.join(__dirname, '../dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        template: path.join(__dirname, 'index.html')
      })
    ]
    // resolve: {
    //  fallback: {
    //    fs: false,
    //    path: false
    //  }
    // }
  }

  if (opts.mode === 'development') {
    // 개발용
    return merge(baseConfig, {
      devServer: {
        open: false,
        hot: true,
        port: 5000
      },
      devtool: 'eval'
    })
  } else {
    // production
    // 제품용
    return merge(baseConfig, {
      devtool: 'cheap-module-source-map',
      plugins: [new CleanWebpackPlugin()]
    })
  }
}
