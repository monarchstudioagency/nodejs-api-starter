/**
 * Module dependencies.
 */
const express = require('express');
/**
 * Controllers
 */
const Examples = require('./controllers/examples.controller');

//Router
exports.router = (function () {
  const Router = express.Router();

  Router.route('/examples').get(Examples.show);
  Router.route('/examples/object').get(Examples.object);
  Router.route('/examples/error').get(Examples.error);
  Router.route('/examples/validator/:data').get(Examples.validator);

  return Router;
})();
