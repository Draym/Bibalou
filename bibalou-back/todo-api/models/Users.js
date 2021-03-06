var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rigth: Number,
  image: {type : String, default : '' }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
