var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adaptive e-reading' });
});

/* POST to Add User Service */
router.post('/newuser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var name = req.body.name;
    var sex = req.body.sex;
    var nationality = req.body.nationality;
    var fluency = req.body.fluency;
    var age= req.body.age;


    // Set our collection
    var collection = db.get('userdata');
    //Randomize the website order and save to a global variable

    // Submit to the DB
    collection.insert({
        "username" : name,
        "sex" : sex,
        "nationality" : nationality,
        "fluency" : fluency,
        "age" : age
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
            console.log(err);
        }
        else {
            // And forward to success page
            console.log(doc);
            console.log("User age is ");
            var abc = doc ._id;
            // console.log("User added as " + doc._id);
            req.session.user = abc;
            req.session.list = list;
            res.redirect("instruction1");
        }
    });

    res.redirect("instruction1");
});

router.get('/instruction1', function(req, res, next) {
  res.render('instruction1', { title: 'Task 1 : Instructions' });
});

router.post('/instruction1', function(req, res) {
  res.redirect("task1");
});

router.get('/task1', function(req, res, next) {
  res.render('task1');
});

router.post('/task1', function(req, res) {
  res.redirect('instruction2');
});

router.get('/instruction2', function(req, res, next) {
  res.render('instruction2', { title: 'Task 2 : Instructions' });
});

router.post('/instruction2', function(req, res) {
  res.redirect('task2');
});

router.get('/task2', function(req, res, next) {
  res.render('task2');
});

router.post('/task2', function(req, res) {
  res.render('thank', { title: 'Thank You' });
});

// router.get('/thank', function(req, res, next) {
//   res.render('thank');
// });

module.exports = router;
