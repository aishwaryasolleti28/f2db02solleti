var Prada = require('../models/prada'); 
 
// List of all Prada
exports.prada_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Prada list'); 
}; 
 
// for a specific Prada. 
exports.prada_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Prada detail: ' + req.params.id); 
}; 
 
// Handle Prada create on POST. 
exports.prada_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Prada create POST'); 
}; 
 
// Handle Prada delete form on DELETE. 
exports.prada_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Prada delete DELETE ' + req.params.id); 
}; 
 
// Handle Prada update form on PUT. 
exports.prada_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Prada update PUT' + req.params.id); 
};
// List of all Prada
exports.prada_list = async function(req, res) { 
    try{ 
        thePrada = await Prada.find(); 
        res.send(thePrada); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 