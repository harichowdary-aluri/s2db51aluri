var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mobile_controller = require('../controllers/mobile');

/// API ROUTE //
// POST request for creating a mobile.
router.post('/mobile', mobile_controller.mobile_create_post);
// DELETE request to delete mobile.
router.delete('/mobile/:id', mobile_controller.mobile_delete);
// PUT request to update mobile.
router.put('/mobile/:id', mobile_controller.mobile_update_put);
// GET request for one mobile.
router.get('/mobile/:id', mobile_controller.mobile_detail);
// GET request for list of all mobile items.
router.get('/mobile', mobile_controller.mobile_list);
module.exports = router;
