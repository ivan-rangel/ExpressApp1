/*jslint node: true, indent: 2,nomen:true */
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
/*jslint unparam: true*/
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Primer pagina de express' });
});
/*jslint unparam: false*/

module.exports = router;
