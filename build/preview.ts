import express from 'express';
import path from 'path';
import open from 'open';
import getPort from 'get-port';
import { previewPort } from '../config';

async function launchServer() {
  const app = express();
  const port = await getPort({
    port: previewPort,
  });
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.listen(port, () => {
    const url = `http://localhost:${port}`;
    open(url);
    console.log(url);
  });
}

launchServer();
