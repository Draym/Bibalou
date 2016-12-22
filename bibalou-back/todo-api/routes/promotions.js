var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Promotion = require('../models/Promotions.js');
var Market = require('../models/Markets.js');

router.get('/byName', function(req, res, next) {
  Promotion.find({name : req.query.name}, function(err, promo) {
    var ret = {};
    if (err)
    {
      res.send({success : false, message : 'Internal error',errcode : 7});
    }
    else
    {
      ret.success = true;
      ret.promotions = promo;
      res.send(ret);
    }
  });
});

router.get('/byMarket', function(req, res, next) {
  Promotion.findOne({marketPlace : req.query.marketPlace}, function(err, promo) {
    var ret = {};
    if (err)
    {
      res.send({success : false, message : 'Internal error',errcode : 7});
    }
    else
    {
      ret.success = true;
      ret.promotions = promo;
      res.send(ret);
    }
  });
});

router.post('/', function(req, res, next) {
    var market = req.body.marketPlace;
    var promo = new Promotion({
    name : req.body.name,
    description : req.body.description,
    percent : req.body.percent,
    brut : req.body.brut,
    marketPlace : market
  });
  promo.save(function(err, newPromo) {
    if (err)
    {
      res.send({success : false, message : 'Internal error', errcode : 7});
    }
    else
    {
      Market.findOneAndUpdate({name : market}, {$push : {promotions : newPromo.id }}, function(err) {
          if (err)
          {
            res.send({success : false, message : 'Internal error', errcode : 7})
          }
          else
          {
            res.send({success : true});
          }
      });
    }
  });
});

module.exports = router;
