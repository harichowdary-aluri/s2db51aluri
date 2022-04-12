const express = require('express')
const router = express.Router()
const Costume = require('../models/costume')


router.get('/', async(req,res) => {
    try{
           const costumes = await Costume.find()
           res.render('costumes', { title: 'Costume Search Results', results: theCostumes });
           res.json(costumes)
    }catch(err){
        res.status(500);
        res.send('Error ' + err)
    }
})


router.get('/costumes', async(req,res) => {
    try{
           const costume = await Costume.find(req.params.costumes)
           res.json(costume)
    }catch(err){
        res.status(500);
        res.send('Error ' + err)
    }
})


router.post('/costumes', async(req,res) => {
    const costume = new Costume({
        // We are looking for a body, since POST does not have query parameters.
        // Even though bodies can be in many different formats, we will be picky
        // and require that it be a json object
        // {"costume_type":"goat", "cost":12, "size":"large"}
        costume_type: req.body.costume_type,
        size: req.body.size,
        cost: req.body.cost
    })

    try{
        const result =  await costume.save() 
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const costume = await Costume.findById(req.params.id) 
        costume.sub = req.body.sub
        const a1 = await costume.save()
        res.json(a1)   
    }catch(err){
        res.status(500);
        res.send('Error')
    }

})

module.exports = router