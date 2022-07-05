require('dotenv').config()

/**
 * Module dependencies.
 */
const EXPRESS = require('express');
const CORS = require('cors');
/**
 * Configuration
 */
global.__dirname = __dirname;
const VERSION = process.env.VERSION;
const DEV_MODE = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

/**
 * Global Methods
 * Declaration of frequently used methods, like return
 */
global.VALIDATOR = require(`./${VERSION}/utils/validators.utils`);
global.ERROR = require(`./${VERSION}/utils/returns.utils`).error;
global.SUCCESS = require(`./${VERSION}/utils/returns.utils`).success;

/**
 * Models
 */
require(`./${VERSION}/models`);

/**
 * Middlewares
 * Uncomment to use it
 */
//const CONTROLS = require(`./${VERSION}/middlewares/controls.mw`);

/**
 * DB Require
 * Uncomment to use database
 */
//const DB = require('./core/db/db');

/**
 * Router
 */
const ROUTER = require(`./${VERSION}/router`).router;

/****************************/

/**
 * DB Connection
 * Uncomment to use connector
 */
//DB.mongooseConnection();
//DB.mongoConnection();

/**
 * Declare express
 */
const APP = EXPRESS();

/**
 * Express setup
 */
APP.use(CORS());
APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({extended: false}));

/**
 * Logger
 */
if(DEV_MODE){
  APP.use(require('morgan')('dev'));
}

/**
 * Auth Middleware
 * Comment to use with or whitout auth middleware
 */
//APP.use(`/${VERSION}/`, CONTROLS.auth, ROUTER);
APP.use(`/${VERSION}/`, ROUTER);

/**
 * Catch 404
 */
APP.use(function (req, res) {
  res.status(404).json(global.ERROR("Route doesn't exist", "APP"));
});

/**
 * Error handler
 */
APP.use(function (err, req, res, next) {
  if(DEV_MODE){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json(global.ERROR(err.message));
  } else {
    res.status(500).json(global.ERROR('Internal Error'));
  }
});

module.exports = APP;
