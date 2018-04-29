const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
    validator: function(v, cb) {
        User.find({username: v}, function(err,docs){
            cb(docs.length == 0);
        });
          },
          message: 'Username already used!'
        }
  },
  username: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
    validator: function(v, cb) {
        User.find({username: v}, function(err,docs){
            cb(docs.length == 0);
        });
          },
          message: 'Username already used!'
        }
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.hash(newUser.password, 10, function(err, hash) {
    
    // Store hash in your password DB.
    if (err) console.error(err);
    // newUser.password = hash;
    newUser.save(callback());

  });


  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
    
      /*
      if (err) {
        res.send(err);
        }  
      */
      // if (err) throw err;
      
      
      // if (err) console.error(err);
      // newUser.password = hash;
      // newUser.save(callback());
  //   });
  // });
}