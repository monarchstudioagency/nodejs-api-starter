// Models
//const EXAMPLES = global.MODELS.examples;

// Routes
module.exports = {
    show: function (req, res) {

        // Mangoose find example
        /*
        EXAMPLES.findOne({_id: MY_ID, deleted: false}, function (err, example) {
           if (err) return res.status(500).json(global.ERROR("An error occurred"));

           if (example) return res.status(200).json(global.SUCCESS(example));

           return res.status(404).json(global.ERROR("No example found matching this ID", "EXAMPLES"));
        });
        */

        return res.status(200).json(global.SUCCESS("API Works"));

    },
    object: function (req, res) {

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
    error: function (req, res) {

        /**
         * To easily return an error with context
         */

        return res.status(400).json(global.ERROR('My formatted error', 'EXAMPLE'));

    },
    validator: function (req, res) {

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
