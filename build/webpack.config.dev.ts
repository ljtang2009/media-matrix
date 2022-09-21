import getBaseConfiguration from './webpack.config.base';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import * as path from 'path';

const webpackBaseConfig = getBaseConfiguration({ envPath: path.resolve(__dirname, '../.env.dev') });

const config: Configuration = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: 'minimal',
});

export default config;
