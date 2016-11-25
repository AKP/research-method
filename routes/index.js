var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adaptive e-reading' });
});

/* POST to Add User Service */
router.post('/newuser', function(req, res) {
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
