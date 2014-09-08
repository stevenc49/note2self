var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/notes', function(req, res) {
    var db = req.db;
    var collection = db.get('notecollection');

    console.log(collection.length);

    collection.find({},{},function(e,docs){
        res.render('notes', {
            "notes" : docs
        });
    });
});

module.exports = router;
