/*jslint node: true, indent: 2,nomen:true */
'use strict';
var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var userSchema = mongoose.Schema({
	username:{
		type: String,
		trim: true,
		required: true
	},
	mail: String 
});

var User = mongoose.model('User',userSchema);

/* GET users listing. */
/*jslint unparam: true*/
router.get('/', function (req, res, next) {
	User.find(function (err, users){
		if (err) return console.log(err)
  		res.send(users);
  		console.log(users)
	});
});
/*jslint unparam: false*/

/*jslint unparam: true */
router.get('/:username', function (req, res) {
  User
    .findOne(
      { username: req.params.username },
      function (err, user) {
        if (err) return console.error(err);
        res.send(user);
      }
    );
});
/*jslint unparam: false */

/*POST users */
/*jslint unparam: true */
router.post('/', function (req, res) {
  var user = new User({
    username: req.body.username,
    mail: req.body.mail
  });

  user.save(function (err) {
    if (err) return console.error(err);
    res
      .status(200)
      .send({ saved: true, _id: user._id });
      console.log(user + 'agregado con exito');
  });
});
/*jslint unparam: false */


/*DELETE users */
/*jslint unparam: true */
router.delete('/', function (req, res){
	User
    .findOneAndRemove(
      { username: req.body.username },
      function (err) {
        if (err) return console.error(err);
        res.status(200);
        console.log(username +" borrado con exito");
    });
});
/*jslint unparam: false */

/*PATCH users */
/*jslint unparam: true */
router.patch('/', function (req, res){
	User
    .findOne(
      { username: req.body.username },
      function (err, user) {
        if (err) return console.error(err);
        user.username=req.body.username;
    });
});
/*jslint unparam: false */
module.exports = router;
