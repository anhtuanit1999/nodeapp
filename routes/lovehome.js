var express = require('express');
var router = express.Router();

/* GET lovehome page. */
router.get('/', function (req, res, next) {
  res.render('lovehome', { title: 'Express' });
});

module.exports = router;
