const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'production',
  watch: false,
  entry: {
    public: path.resolve(__dirname, './src/init/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
  },
  devServer: {
    port: 7654,
    contentBase: path.resolve(__dirname, './build'),
    hot: false,
    open: true,
    watchContentBase: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {test: /\.html$/, use: 'html-loader'},
      {
        test: [/\.less$/, /\.css$/],
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        }],
      },

      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/init/index.html'),
      filename: 'index.html',
      favicon: "./src/images/favicon.png"
    }),
    new CssWebpackPlugin({
      filename: 'style.css',
    }),
    new MinifyPlugin(),
  ],
};
