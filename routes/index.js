var express = require('express');
var router = express.Router();
var smartCtrl = require('../controllers/smartflorest.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  return smartCtrl.list(req, res);
});


router.get('/coco', function(req, res, next) {
  res.render('index', { title: 'COCO' });
});


/* GET New Note Page. */
router.get('/smartnote', function(req, res) {
  return smartCtrl.getNote(req, res);
});

/* POST New Note Page. */
router.post('/smartnote', function(req, res) {
  return smartCtrl.create(req, res);
});

module.exports = router;
