const MONGOOSE = require('mongoose');
const MONGO_CLIENT = require("mongodb").MongoClient;
const DB = process.env.DB_URL

module.exports = {
    mongooseConnection: function () {
        // API Connection
        MONGOOSE.connect(DB, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
        const db = MONGOOSE.connection;
        //Database global connection
        db.on('error', console.error.bind(console, 'Error during DB connection'));
        db.once('open', function () {
            console.log("...DB is connected...");
        });
    },
    mongoConnection: function () {
        MONGO_CLIENT.connect(DB, {useCreateIndex: true, useNewUrlParser: true}, (error, client) => {
            if (error) {
                console.error.bind(console, 'Error during DB connection');
            }
            return client.db("...DB connected...");
        });
    },
};
