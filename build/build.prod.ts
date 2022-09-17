import getConfig from './webpack.config.prod';
import webpack from 'webpack';

async function build() {
  const webpackConfig = await getConfig();
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    if (stats) {
      console.info(
        stats.toString({
          colors: true,
          modules: false,
        }),
      );
    }
  });
}

build();
