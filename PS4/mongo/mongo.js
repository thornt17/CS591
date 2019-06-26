//This code is from https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://127.0.0.1';

let _db;

module.exports = {

    connect: function (callback) {
        mongoClient.connect(mongoURL, {useNewUrlParser: true}, function (err, client) {
            _db = client;
            return callback(err);
        });
    },
    getDB: () => {
        return _db;
    }


}
