var express = require('express');
require('express-async-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
const {newLogger, createExpressLogMiddeware} = require("./utils/getLogger");


function web() {
    var logger = newLogger("app");
    logger.info("初始化web服务...")


    var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(createExpressLogMiddeware('app', {level: "info"}));
    routes.apply(app);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        logger.error(err.stack);

        // render the error page
        res.status(err.status || 500);
        res.json({no: 1, data: err.message});
    });

    return app;
}

module.exports = web;