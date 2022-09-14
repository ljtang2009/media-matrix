import webpackBaseConfig from './webpack.config.base';
import { Configuration, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import ESLintPlugin from 'eslint-webpack-plugin';

const config: Configuration = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 'auto',
      openAnalyzer: false,
    }),
    new ProgressPlugin(),
    new ESLintPlugin({
      extensions: ['vue', 'js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx', 'cts', 'mts'],
    }),
  ],
});

export default config;
