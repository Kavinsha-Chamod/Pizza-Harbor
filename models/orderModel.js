const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
 name: {type:String,required},
 email:  {type:String,required},
 userid: {type:String,required},
 orderItems: [],
 shippingAddress:{type:Object},
 orderAmount: {type:Number, require},
 isDelivered: {type:Boolean, require, default:false},
 transcationId: {type:String,required}

},{
  timestamps: true
})

module.exports = mongoose.model('orders', orderSchema)