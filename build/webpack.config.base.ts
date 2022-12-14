import { Configuration, DefinePlugin } from 'webpack';
import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import HtmlWebpackPlugin = require('html-webpack-plugin');
import { VueLoaderPlugin } from 'vue-loader';
import { pageTitle, defaultTheme, currentThemeTagId } from '../config';
import * as dotenv from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
      'light-theme': path.resolve(__dirname, '../src/style/theme/light.less'),
      'light-compact-theme': path.resolve(__dirname, '../src/style/theme/light-compact.less'),
      'dark-theme': path.resolve(__dirname, '../src/style/theme/dark.less'),
      'dark-compact-theme': path.resolve(__dirname, '../src/style/theme/dark-compact.less'),
    },
    output: {
      clean: true,
      filename: 'script/[name].[contenthash].js',
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
          test: /\.(less|css)$/,
          use: [
            'vue-style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
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
        {
          test: /\.ejs$/,
          loader: 'ejs-loader',
          options: {
            esModule: false,
          },
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
      runtimeChunk: 'single',
      // splitChunks ??????????????????
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
        template: path.resolve(__dirname, '../src/index.ejs'),
        templateParameters: {
          title: pageTitle,
          defaultTheme,
          currentThemeTagId,
        },
        inject: false,
        hash: true,
      }),
      new VueLoaderPlugin(),
      new DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        'process.env.NODE_ENV': JSON.stringify(process.env['NODE_ENV']),
        __CURRENT_THEME_TAG_ID__: JSON.stringify(currentThemeTagId),
      }),
      new MiniCssExtractPlugin({
        filename: 'style/[name].[contenthash].css',
        runtime: false,
      }),
    ],
    performance: {
      maxAssetSize: 1024 * 800, // ?????? bytes
      maxEntrypointSize: 1024 * 1024,
    },
  };
}

export default getConfiguration;
