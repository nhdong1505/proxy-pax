const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  proxy({
    target: 'http://vehicle-api.dev.railstack.io',
    changeOrigin: true,
    secure: false,
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server is running!');
});