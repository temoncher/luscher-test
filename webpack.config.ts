import * as path from 'path';
import * as webpack from 'webpack';
import NodemonPlugin from 'nodemon-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'luscher-test',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodemonPlugin(),
  ],
  optimization: {
    minimize: true,
  },
};

export default config;
