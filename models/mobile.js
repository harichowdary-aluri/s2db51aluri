const mongoose = require("mongoose")
const mobileSchema = mongoose.Schema({
    mobile_brand: String,
    mobile_color: String,
    mobile_cost: Number
})
module.exports = mongoose.model("mobile", mobileSchema)