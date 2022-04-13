var Mobile = require('../models/mobile');

exports.mobile_list = async function (req, res) {
    try {
        tMobiles = await Mobile.find();
        res.send(tMobiles);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.mobile_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Mobile detail: ' + req.params.id);
};

exports.mobile_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Mobile();
    document.mobile_brand = req.body.mobile_brand;
    document.mobile_cost = req.body.mobile_cost;
    document.mobile_color = req.body.mobile_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.mobile_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Mobile delete DELETE ' + req.params.id);
};

exports.mobile_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Mobile update PUT' + req.params.id);
};


exports.mobile_view_all_Page = async function (req, res) {
    try {
        tMobiles = await Mobile.find();
        res.render('mobiles', { title: 'Mobile Search Results', results: tMobiles });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};