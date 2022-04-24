const mongoose = require("mongoose")
const mobileSchema = mongoose.Schema({
    mobile_brand: String,
    mobile_color: {
        type: String,
        required: true
    },
    mobile_cost: {
        type: Number,
        min: 2,
        max: 5000
      }
})
module.exports = mongoose.model("mobile", mobileSchema)