const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://kavinshachamod:bAk*0831@mrz2001.xkvcpgv.mongodb.net/PizzaHarbor'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})
var db = mongoose.connection

db.on('connected', ()=>{
  console.log("Mongo DB connected!")
})
db.on('error',()=>{
  console.log("Error")
}) 

module.exports =mongoose;