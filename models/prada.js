const mongoose = require("mongoose") 
const pradaSchema = mongoose.Schema({ 
 color: String, 
 cost:{
    type:Number,
    min: 500000,
    max: 900000 }, 
 brand: String 
}) 
 
module.exports = mongoose.model("Prada", pradaSchema) 