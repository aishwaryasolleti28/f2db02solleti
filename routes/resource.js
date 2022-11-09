 
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var prada_controller = require('../controllers/prada'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// PRADA ROUTES /// 
 
// POST request for creating a Prada.  
router.post('/pradas', prada_controller.prada_create_post); 
 
// DELETE request to delete Prada. 
router.delete('/pradas/:id', prada_controller.prada_delete); 
 
// PUT request to update Prada. 
router.put('/pradas/:id', prada_controller.prada_update_put); 
 
// GET request for one Prada. 
router.get('/pradas/:id', prada_controller.prada_detail); 
 
// GET request for list of all Prada items. 
router.get('/pradas', prada_controller.prada_list); 
 
module.exports = router; 
 