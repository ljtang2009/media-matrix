import getPort from 'get-port';
import config from './webpack.config.dev';
import { webpack } from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const compiler = webpack(config);

const runServer = async () => {
  const devServerOptions: WebpackDevServer.Configuration = {
    client: {
      logging: 'info',
      overlay: true, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
    },
    hot: true, // 启用 webpack 的 热模块替换 特性
    open: true,
    port: await getPort(),
    // proxy: {
    //   '/api': 'http://localhost:3000',
    // },
  };

  const server = new WebpackDevServer(devServerOptions, compiler);
  await server.start();
};

runServer();
