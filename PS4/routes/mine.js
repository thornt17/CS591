var express = require('express');
var router = express.Router();

/* GET home page. */
const request = require('request-promise'); //use request-promise pkg
const apiKey = 'AIzaSyAEfFIdnOckrDmi7luX5z_DJobcSFi1-TY';

router.post('/', function (req, res, next) {
    let address = req.body.address;
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
                    console.log(myret);
                    res.render('index', {coordinates: myret, error: null});
                }
            }
        )
})


module.exports = router;

//need to fix something
