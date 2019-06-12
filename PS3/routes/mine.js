var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Hello World' });
});

router.post('/', function(req, res, next){
    res.render('index', { title: 'Hello that sucks' });

})

// router.post('/', function (req, res, next)  {
//     res.render('index', {title: 'Hey now'})
// })

module.exports = router;
