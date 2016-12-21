var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('../models/Products.js');

var marketSchema = new Schema({
  name: { type: String, required: true, unique: true },
  desription: String,
  productList : [Number],
  owner : { type: String, required: true },
  order : [String],
  image : String,
});

var Market = mongoose.model('Market', marketSchema);
module.exports = Market;
