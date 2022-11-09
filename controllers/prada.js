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
 

// VIEWS 
// Handle a show all view 
exports.prada_view_all_Page = async function(req, res) { 
    try{ 
        thePrada = await Prada.find(); 
        res.render('prada', { title: 'Prada Search Results', results: thePrada }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.prada_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Prada(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.cost = req.body.cost; 
    document.brand = req.body.brand; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 