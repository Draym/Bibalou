var express = require('express');
var router = express.Router();

var User = require('../models/Users.js');

router.post('/', function(req, res, next) {
  User.findByIdAndUpdate(req.body.id, req.body, function(err) {
    if (err)
      res.send({success : false, message : 'Internal error',errcode : 7});
    res.send({success : true});
  });
  //User.findByIdAndUpdate()
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findOne({email : req.query.email}, function(err, user) {
    if (err)
      res.send({success : false, message : 'Internal error',errcode : 7});
    res.send({success : true, 'user' : user});
  })
});

module.exports = router;
