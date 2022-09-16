import webpackBaseConfig from './webpack.config.base';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

const config: Configuration = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: 'minimal',
});

export default config;
