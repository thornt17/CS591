var express = require('express');
var router = express.Router();
const db = require('../mongo/mongo');

/* GET home page. */

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});


const request = require('request-promise'); //use request-promise pkg
const apiKey = 'AIzaSyAEfFIdnOckrDmi7luX5z_DJobcSFi1-TY';

router.post('/', function (req, res, next) {
    let address = req.body.address;

    let addressObj = {
        address: address,
        lat: undefined,
        long: undefined
    };

    let mongo = db.getDB();


    //let address = req.address;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
    console.log(url)
    request(url)
        .then(response => {
                let mycoords = JSON.parse(response);
                console.log(mycoords);
                if (mycoords.results[0].geometry == undefined) {
                    res.render('index', {coordinates: null, error: 'Error'});
                } else {
                    let myret = `Latitude: ${mycoords.results[0].geometry.location.lat} Longitude: ${mycoords.results[0].geometry.location.lng}`;

                    mongo.collection('addresses').insertOne({name: req.body, lat: mycoords.results[0].geometry.location.lat, long: mycoords.results[0].geometry.location.lng},  function (err, r) {
                        res.send('success');
                    });

                    console.log(myret);
                    res.render('index', {coordinates: myret, error: null});
                }
            }
        )
})


module.exports = router;

//need to fix something
