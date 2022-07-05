/*Define ENV Variables*/
global.CURRENT_CONFIG = process.env.NODE_ENV;

/**
 * Module dependencies.
 */
const APP = require('../app');
const DEBUG = require('debug')('api:server');
const HTTP = require('http');

/**
 * Get port from environment and store in Express.
 */
const PORT = normalizePort(process.env.PORT || 3009);
APP.set('port', PORT);

/**
 * Create HTTP server.
 */

const SERVER = HTTP.createServer(APP);

/**
 * Listen on provided port, on all network interfaces.
 */

SERVER.listen(PORT);
SERVER.on('error', onError);
SERVER.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const PORT = parseInt(val, 10);

    if (isNaN(PORT)) {
        // named pipe
        return val;
    }

    if (PORT >= 0) {
        // port number
        return PORT;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const BIND = typeof PORT === 'string'
        ? 'Pipe ' + PORT
        : 'Port ' + PORT;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(BIND + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(BIND + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const ADDR = SERVER.address();
    const BIND = typeof ADDR === 'string'
        ? 'pipe ' + ADDR
        : 'port ' + ADDR.PORT;
    DEBUG('Listening on ' + BIND);
    console.log("Listening on: " + PORT);
}
