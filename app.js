/**
 * Module dependencies.
 */
const express = require('express');
const cors = require('cors');
/**
 * Configuration
 */
global.__dirname = __dirname;
const version = global.CURRENT_CONFIG.version;
const DEV_MODE = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
/**
 * Middlewares
 * Uncomment to use it
 */
//const controls = require('./' + version + "/middlewares/controls.mw");
/**
 * DB Require
 * Uncomment to use database
 */
//const db = require('./core/db/db');
/**
 * Router
 */
const router = require('./' + version + "/router").router;

/****************************/

/**
 * DB Connection
 * Uncomment to use connector
 */
//db.mongooseConnection();
//db.mongoConnection();

/**
 * Declare express
 */
const app = express();

/**
 * Express setup
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/**
 * Logger
 */
if(DEV_MODE){
  app.use(require('morgan')('dev'));
}

/**
 * Auth Middleware
 * Comment to use with or whitout auth middleware
 */
//app.use('/'+version+'/', controls.auth, router);
app.use('/'+version+'/', router);

/**
 * Catch 404
 */
app.use(function (req, res) {
  res.status(404).json({success: false, message: "Route doesn't exist"});
});

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
  if(DEV_MODE){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({success: false, message: err.message});
  } else {
    res.status(500).json({success: false, message: 'Internal Error'});
  }
});

module.exports = app;
