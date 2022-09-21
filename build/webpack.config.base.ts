import { Configuration, DefinePlugin } from 'webpack';
import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import HtmlWebpackPlugin = require('html-webpack-plugin');
import { VueLoaderPlugin } from 'vue-loader';
import { pageTitle } from '../config';
import * as dotenv from 'dotenv';
interface ConfigurationOptions {
  /**
   * dotenv path
   */
  envPath?: string;
}

function getConfiguration(options?: ConfigurationOptions): Configuration {
  if (options) {
    dotenv.config({
      path: options.envPath,
    });
  }

  return {
    context: path.resolve(__dirname, '../src'),
    entry: {
      app: path.resolve(__dirname, '../src/app.ts'),
    },
    output: {
      clean: true,
      filename: 'js/[name].[contenthash].js',
      path: path.resolve(__dirname, '../dist'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.less$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
      },
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
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        'process.env.NODE_ENV': JSON.stringify(process.env['NODE_ENV']),
      }),
    ],
    performance: {
      maxAssetSize: 1024 * 300, // 单位 bytes
      maxEntrypointSize: 1024 * 400,
    },
  };
}

export default getConfiguration;
