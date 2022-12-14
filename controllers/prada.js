var Prada = require('../models/prada'); 
 
// List of all Prada
exports.prada_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Prada list'); 
}; 
 
// for a specific Prada 
exports.prada_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Prada.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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

// Handle Prada create on POST. 
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

// Handle Prada update form on PUT. 
exports.prada_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Prada.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.color)  
               toUpdate.color = req.body.color; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.brand) toUpdate.brand = req.body.brand; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle Prada delete on DELETE. 
exports.prada_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Prada.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.prada_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Prada.findById( req.query.id) 
        res.render('pradadetail',  
{ title: 'Prada Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a prada. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.prada_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('pradacreate', { title: 'Prada Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Prada. 
// query provides the id 
exports.prada_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Prada.findById(req.query.id) 
        res.render('pradaupdate', { title: 'Prada Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.prada_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Prada.findById(req.query.id) 
        res.render('pradadelete', { title: 'Prada Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 