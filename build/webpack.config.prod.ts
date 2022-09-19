import webpackBaseConfig from './webpack.config.base';
import { ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import ESLintPlugin from 'eslint-webpack-plugin';
import { analyzerPort } from '../config';
import getPort from 'get-port';
import StylelintPlugin from 'stylelint-webpack-plugin';

async function getConfig() {
  return merge(webpackBaseConfig, {
    mode: 'production',
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerPort: await getPort({ port: analyzerPort }),
        openAnalyzer: false,
      }),
      new ProgressPlugin(),
      new ESLintPlugin({
        extensions: ['vue', 'js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx', 'cts', 'mts'],
      }),
      new StylelintPlugin({
        extensions: ['css', 'less', 'scss', 'sass'],
      }),
    ],
  });
}

export default getConfig;
