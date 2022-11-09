// var express = require('express');
// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('prada', { title: 'Search Results' });
// });
// module.exports = router;

var express = require('express'); 
const prada_controlers= require('../controllers/prada'); 
var router = express.Router(); 
 
/* GET pradas */ 
router.get('/', prada_controlers.prada_view_all_Page ); 
module.exports = router; 