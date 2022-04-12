const mongoose = require('mongoose')


const costumeSchema = new mongoose.Schema({

	costume_type :{
		type:String,
		required: true
    },
    size:{
        type:String,
        required: true
    },
    cost:{
       type: Number,
       required: true
    }

}, { timestamps:true });

module.exports = mongoose.model('Costume',costumeSchema)