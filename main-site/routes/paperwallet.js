var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/pandacoin', function(req, res, next) {
  res.render('paperwallets/pnd', { title: 'Pandacoin Paper Wallet' });
});

/* GET home page. */
router.get('/cypherfunk', function(req, res, next) {
  res.render('paperwallets/funk', { title: 'CypherFUNKS Paper Wallet' });
});

/* GET home page. */
router.get('/spartancoin', function(req, res, next) {
  res.render('paperwallets/spn', { title: 'Spartancoin Paper Wallet' });
});

/* GET home page. */
router.get('/zeitcoin', function(req, res, next) {
  res.render('wallets/zeit', { title: 'Zeitcoin Paper Wallet' });
});

/* GET home page. */
router.get('/bitbean', function(req, res, next) {
  res.render('wallets/bitb', { title: 'BitBean Paper Wallet' });
});

module.exports = router;
