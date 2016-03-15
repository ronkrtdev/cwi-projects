var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/pandacoin', function(req, res, next) {
  res.render('faucets/pnd', { title: 'Pandacoin Faucet' });
});

/* GET home page. */
router.get('/cypherfunk', function(req, res, next) {
  res.render('faucets/funk', { title: 'CypherFUNKS Faucet' });
});

/* GET home page. */
router.get('/spartancoin', function(req, res, next) {
  res.render('faucets/spn', { title: 'Spartancoin Faucet' });
});

/* GET home page. */
router.get('/zeitcoin', function(req, res, next) {
  res.render('faucets/zeit', { title: 'Zeitcoin Faucet' });
});

/* GET home page. */
router.get('/bitbean', function(req, res, next) {
  res.render('faucets/bitb', { title: 'BitBean Faucet' });
});

module.exports = router;
