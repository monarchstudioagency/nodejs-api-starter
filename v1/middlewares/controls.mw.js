/**
 * Module dependencies.
 */
const moment = require('moment');
const crypto = require('crypto');
/**
 * Configuration
 */
const KEY = require('../config/config').keys;
/**
 * Utils
 */
const error = require('../utils/returns.utils').error;

module.exports = {
  auth: function (req, res, next) {

    let publicKey = req.headers['x-public-key'];
    let dateTime = req.headers['x-datetime'];
    let signature = req.headers['x-signature'];

    let method = req.method.toUpperCase();
    let uri = req.originalUrl;

    /**
     * Verify if all header elements are present
     */
    if (!publicKey || !dateTime || !signature) return res.status(400).json(error("Missing header parameters", "AUTH"));
    /**
     * Checking public key
     */
    if (publicKey !== KEY.public) return res.status(401).json(error("Public key unknown", "AUTH"));

    /**
     * Check the time between request and asking
     * > 5mn is failed
     */
    let timeDiff = moment.utc().diff(Number(dateTime), 'minutes');
    if (timeDiff > 5) return res.status(409).json(error("Request expired", "AUTH"));

    /**
     * Create the signature
     */
    let serverSign = method + uri + dateTime;
    let cryptoSign = crypto.createHmac('sha1', KEY.private).update(serverSign, "utf-8").digest('hex');

    /**
     * Compare the signature
     */
    if (signature.toString() !== cryptoSign.toString()) return res.status(401).json(error("Unauthorized", "AUTH"));

    /**
     * Go to next function is everything is ok
     */
    return next();
  }
};
