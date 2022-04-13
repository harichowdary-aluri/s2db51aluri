var express = require('express');
const mobile_controller = require('../controllers/mobile');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('mobiles', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', mobile_controller.mobile_view_all_Page );

module.exports = router;
