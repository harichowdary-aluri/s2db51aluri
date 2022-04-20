var mobile = require('../models/mobile');

// List of all mobile
exports.mobile_list = async function(req, res) {
    try{
    themobile = await mobile.find();
    res.send(themobile);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports.mobile_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: mobile list');
//};
// for a specific mobile.
exports.mobile_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: mobile detail: ' + req.params.id);
 console.log("detail" + req.params.id)
 try {
 result = await mobile.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};
// Handle mobile create on POST.
exports.mobile_create_post = async function(req, res) {
    console.log(req.body)
    let document = new mobile();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"mobile_costume_type":"goat", "mobile_cost":12, "size":"large"}
    document.mobile_brand = req.bodymobile_brand;
    document.mobile_color = req.body.mobile_color;
    document.mobile_cost = req.body.mobile_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle mobile delete form on DELETE.
exports.mobile_delete = async function(req, res) {
 //res.send('NOT IMPLEMENTED: mobile delete DELETE ' + req.params.id);
    console.log("delete " + req.params.id)
    try {
    result = await mobile.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle mobile update form on PUT.
exports.mobile_update_put = async function(req, res) {
    //res.send('NOT IMPLEMENTED: mobile update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await mobile.findById( req.params.id)
 // Do updates of properties
 if(req.body.mobile_brand)
 toUpdatemobile_brand = req.body.mobile_brand;
 if(req.body.mobile_color) toUpdate.mobile_color = req.body.mobile_color;
 if(req.body.mobile_cost) toUpdate.mobile_cost = req.body.mobile_cost;
 let result = await toUpdate.save();
 console.log("Success " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// VIEWS
// Handle a show all view
exports.mobile_view_all_Page = async function(req, res) {
    try{
    themobile = await mobile.find();
    res.render('mobile', { title: 'mobile Search Results', results: themobile });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.mobile_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await mobile.findById( req.query.id)
    res.render('mobiledetail',
   { title: 'mobile Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a mobile_costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mobile_create_Page = function(req, res) {
   console.log("create view")
   try{
   res.render('mobilecreate', { title: 'mobile Create'});
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };

  // Handle building the view for updating a mobile_costume.
// query provides the id
exports.mobile_update_Page = async function(req, res) {
   console.log("update view for item "+req.query.id)
   try{
   let result = await mobile.findById(req.query.id)
   res.render('mobileupdate', { title: 'mobile Update', toShow: result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };

  // Handle a delete one view with id from query
exports.mobile_delete_Page = async function(req, res) {
   console.log("Delete view for id " + req.query.id)
   try{
   result = await mobile.findById(req.query.id)
   res.render('mobiledelete', { title: 'mobile Delete', toShow:
  result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
  };