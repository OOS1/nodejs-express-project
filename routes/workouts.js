var express = require('express');
var router = express.Router();

/*thss get the workout page*/ 
router.get('/', function(req, res, next) {
    res.render('workouts', {
        title: 'Workouts',
        pageTitle: 'Workout programs'
    })
});

module.exports = router;
