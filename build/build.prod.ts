import webpackConfig from './webpack.config.prod';
// import { statsConfig } from './webpack.config.base';
import webpack from 'webpack';

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info(
    stats.toString({
      colors: true,
      modules: false,
    }),
  );
});
