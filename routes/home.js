var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/lovehome', (req, res) => {
  res.render('lovehome');
});

module.exports = router;
