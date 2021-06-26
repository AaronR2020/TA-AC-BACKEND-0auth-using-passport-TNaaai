var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/error', function(req, res, next) {
  res.send('error page');
});
router.get('/success', function(req, res, next) {
  res.send('success page');
});

module.exports = router;
