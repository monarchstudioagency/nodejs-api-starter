//Routes
module.exports = {
    show: (req, res) => {

        return res.status(200).json(global.SUCCESS("API Works"));

    },
    object: (req, res) => {

        /**
         * To easily return an object
         */

        const DATA = {
            _id: "unique_id",
            title: "My object",
            description: "My description object"
        };

        return res.status(200).json(global.SUCCESS(DATA));

    },
    error: (req, res) => {

        /**
         * To easily return an error with context
         */

        return res.status(400).json(global.ERROR('My formatted error', 'EXAMPLE'));

    },
    validator: (req, res) => {

        /**
         * To easily use validators
         * You can add or modify the validator file
         */

        const DATA = req.params.data;

        /**
         * Empty options match with ObjectId
         */
        if(!global.VALIDATOR.match(DATA)){
            return res.status(400).json(global.ERROR('No matching ObjectId', 'EXAMPLE'));
        }
        /**
         * Match with correct email format
         */
        if(!global.VALIDATOR.match(DATA, 'email')){
            return res.status(400).json(global.ERROR('No matching correct email format', 'EXAMPLE'));
        }
        /**
         * Match with secure/strong password
         */
        if(!global.VALIDATOR.match(DATA, 'password')){
            return res.status(400).json(global.ERROR('No matching secure password', 'EXAMPLE'));
        }
        /**
         * If data is empty
         */
        if(global.VALIDATOR.empty(DATA)){
            return res.status(400).json(global.ERROR('Is an empty value (not null)', 'EXAMPLE'));
        }
        /**
         * If data is not empty
         */
        if(!global.VALIDATOR.empty(DATA)){
            return res.status(400).json(global.ERROR('Is not an empty value', 'EXAMPLE'));
        }

    }
};
