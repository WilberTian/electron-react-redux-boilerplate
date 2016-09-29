const path = require('path');
const express = require('express');
const webpack = require('webpack');
var config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const port = process.env.PORT || 8080;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
  	colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, '::', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
