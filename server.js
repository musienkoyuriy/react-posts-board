var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var appConfig = require('./config');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);
var port = appConfig.get('port');

var app = express();
app.use('/public', express.static('public'));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(
    port,
    (error) => {
        if (error) throw err;
        console.info(`Listening in port ${port}, Open up http://localhost:${port}`);
    }
);
