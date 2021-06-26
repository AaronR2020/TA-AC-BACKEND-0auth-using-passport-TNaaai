var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/github/callback',passport.authenticate('github',{failureRedirect:'users/error'}),(req,res)=>{
  //success redirect
  res.redirect('users/success')
});

module.exports = router;
