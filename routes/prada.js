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
 
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET pradas */ 
router.get('/', prada_controlers.prada_view_all_Page ); 
module.exports = router; 

/* GET detail prada page */ 
router.get('/detail', prada_controlers.prada_view_one_Page);

 /* GET create prada page */ 
router.get('/create', secured, prada_controlers.prada_create_Page); 
 
/* GET update costume page */ 
router.get('/update', secured, prada_controlers.prada_update_Page); 
 

/* GET delete prada page */ 
router.get('/delete', secured, prada_controlers.prada_delete_Page);