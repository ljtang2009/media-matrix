import webpackBaseConfig from './webpack.config.base';
import { Configuration } from 'webpack';

const config: Configuration = {
  ...webpackBaseConfig,
  mode: 'development',
  devtool: 'eval-source-map',
};

export default config;
