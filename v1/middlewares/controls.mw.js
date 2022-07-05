/**
 * Module dependencies.
 */
const moment = require('moment');
const crypto = require('crypto');

/**
 * Configuration
 */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;

module.exports = {
  auth: (req, res, next) => {

    const publicKey = req.headers['x-public-key'];
    const DATE_TIME = req.headers['x-datetime'];
    const SIGNATURE = req.headers['x-signature'];

    const METHOD = req.method.toUpperCase();
    const URI = req.originalUrl;

    /**
     * Verify if all header elements are present
     */
    if (!publicKey || !DATE_TIME || !SIGNATURE) return res.status(400).json(global.ERROR("Missing header parameters", "AUTH"));
    /**
     * Checking public key
     */
    if (publicKey !== PUBLIC_KEY) return res.status(401).json(global.ERROR("Public key unknown", "AUTH"));

    /**
     * Check the time between request and asking
     * > 5mn is failed
     */
    const TIME_DIFF = moment.utc().diff(Number(DATE_TIME), 'minutes');
    if (TIME_DIFF > 5) return res.status(409).json(global.ERROR("Request expired", "AUTH"));

    /**
     * Create the signature
     */
    const SERVER_SIGN = METHOD + URI + DATE_TIME;
    const CRYPTO_SIGN = crypto.createHmac('sha1', PRIVATE_KEY).update(SERVER_SIGN, "utf-8").digest('hex');

    /**
     * Compare the signature
     */
    if (SIGNATURE.toString() !== CRYPTO_SIGN.toString()) return res.status(401).json(global.ERROR("Unauthorized", "AUTH"));

    /**
     * Go to next function is everything is ok
     */
    return next();
  }
};
