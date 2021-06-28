const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "dist",
  },
};
