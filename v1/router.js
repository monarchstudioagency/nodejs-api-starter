/**
 * Module dependencies.
 */
const EXPRESS = require('express');
/**
 * Controllers
 */
const EXAMPLES = require('./controllers/examples.controller');

//Router
exports.router = (() => {
  const ROUTER = EXPRESS.Router();

  ROUTER.get('/examples', EXAMPLES.show);
  ROUTER.get('/examples/object', EXAMPLES.object);
  ROUTER.get('/examples/error', EXAMPLES.error);
  ROUTER.get('/examples/validator/:data', EXAMPLES.validator);

  return ROUTER;
})();
