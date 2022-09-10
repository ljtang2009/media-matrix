import { Configuration, DefinePlugin } from 'webpack';
import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import HtmlWebpackPlugin = require('html-webpack-plugin');
import { VueLoaderPlugin } from 'vue-loader';
import { pageTitle } from '../config';

export const statsConfig = {
  colors: true,
  modules: false,
};

const config: Configuration = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: path.resolve(__dirname, '../src/app.ts'),
  },
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue', '.json'],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    // splitChunks 用来拆分代码
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
  plugins: [
    new HtmlWebpackPlugin({
      // title: '媒体矩阵',
      template: path.resolve(__dirname, '../src/index.html'),
      templateParameters: {
        title: pageTitle,
      },
      inject: 'body',
      hash: true,
    }),

    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  stats: statsConfig,
};

export default config;
