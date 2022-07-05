# Node.js API Starter
This Node.js API Starter is a starter pack to quickly launch a Node.js/Express API application created by [monarch studio](https://www.monarchstudio.fr) and hosted on [.creative](https://creative.monarchstudio.fr).

Start coding, no server configuration, save time of your process.

Some usefull utils and middlewares includes ✌️

## Usage

We assume you know how Node.js and NPM works if you're using this Starter Pack. It's for developers who already know Node.js well. If not, please refer to the Node.js documentation.

### Node.js

Before all, you need [Node.js](https://nodejs.org/en/) and NPM installed and up to date.

### Database

The app include the ODM [Mongoose](https://mongoosejs.com/) for Mongo database management. 

You can choose about two methods to connect to database :

The Mongoose Client Connection
```Javascript
db.mongooseConnection()
```
The original MongoDB Client Connection
```Javascript
db.mongoConnection()
```

## Configuration

Before running your app, create a `.env` file and copy data from `.env.example`.
You can also edit the `ecosystem.config.js` file for production mode.

## Installation

### Init

If you run the app for the first time, you need to run this command.

Development mode :

```bash
npm run dev-init
```
Production mode :
```bash
npm run prod-init
```

### Run the app
After the init command, to start the app you can run this command.

```bash
npm run dev
```
Production mode :
```bash
npm run start
```
The app start listening  at http://localhost:3009/v1

You can easily change the version of your api & base URL in the `.env` file.

## Examples

You can see some usage examples in `controllers/examples.controller.js` like how to return a success, an object, an error or how to use the `validators` methods.

## API Auth

This starter includes an auth middleware to protect your API. Uncomment the lines in `app.js` to use it. This middleware :
* Verify the headers
* Compare the time between each request sending
* Create and compare the secure signature sent by client

## Finished

And that's it ! Your can now code your features, your server is running correctly. 💪

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Free for all.