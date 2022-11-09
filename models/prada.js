const mongoose = require("mongoose") 
const pradaSchema = mongoose.Schema({ 
 color: String, 
 cost: Number, 
 brand: String 
}) 
 
module.exports = mongoose.model("Prada", pradaSchema) 