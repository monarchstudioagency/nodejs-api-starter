/**
 * Utils
 */
const validator = require('../utils/validators.utils');
const error = require('../utils/returns.utils').error;
const success = require('../utils/returns.utils').success;

//Routes
module.exports = {
    show: function (req, res) {

        return res.status(200).json(success("API Works"));

    },
    object: function (req, res) {

        /**
         * To easily return an object
         */

        let data = {
            _id: "unique_id",
            title: "My object",
            description: "My description object"
        };

        return res.status(200).json(success(data));

    },
    error: function (req, res) {

        /**
         * To easily return an error with context
         */

        return res.status(400).json(error('My formatted error', 'EXAMPLE'));

    },
    validator: function (req, res) {

        /**
         * To easily use validators
         * You can add or modify the validator file
         */

        let data = req.params.data;

        /**
         * Empty options match with ObjectId
         */
        if(!validator.match(data)){
            return res.status(400).json(error('No matching ObjectId', 'EXAMPLE'));
        }
        /**
         * Match with correct email format
         */
        if(!validator.match(data, 'email')){
            return res.status(400).json(error('No matching correct email format', 'EXAMPLE'));
        }
        /**
         * Match with secure/strong password
         */
        if(!validator.match(data, 'password')){
            return res.status(400).json(error('No matching secure password', 'EXAMPLE'));
        }
        /**
         * If data is empty
         */
        if(validator.empty(data)){
            return res.status(400).json(error('Is an empty value (not null)', 'EXAMPLE'));
        }
        /**
         * If data is not empty
         */
        if(!validator.empty(data)){
            return res.status(400).json(error('Is not an empty value', 'EXAMPLE'));
        }

    }
};
