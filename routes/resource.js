var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/costume');
var mobile_controller = require('../controllers/mobile');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// costume ROUTES ///
// POST request for creating a costume.
router.post('/costumes', costume_controller.costume_create_post);
// DELETE request to delete costume.
router.delete('/costumes/:id', costume_controller.costume_delete);
// PUT request to update costume.
router.put('/costumes/:id', costume_controller.costume_update_put);
// GET request for one costume.
router.get('/costumes/:id', costume_controller.costume_detail);
// GET request for list of all costume items.
router.get('/costumes', costume_controller.costume_list);

/// mobile ROUTES ///
// POST request for creating a mobile.
router.post('/mobiles', mobile_controller.mobile_create_post);
// DELETE request to delete mobile.
router.delete('/mobiles/:id', mobile_controller.mobile_delete);
// PUT request to update mobile.
router.put('/mobiles/:id', mobile_controller.mobile_update_put);
// GET request for one mobile.
router.get('/mobiles/:id', mobile_controller.mobile_detail);
// GET request for list of all mobile items.
router.get('/mobiles', mobile_controller.mobile_list);
module.exports = router;
