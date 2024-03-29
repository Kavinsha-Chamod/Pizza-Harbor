
const express = require("express");
const router  = express.Router();
const {v4:uuidv4} = require('uuid') ; //to get unique IDs
const stripe = require("stripe")("sk_test_51OeM5WIqGhbicLQGxRqHE2tV06cwlyFOdeHmOhTUmsYVl8ThhW1VouwBKKoosY6dOm1gT03n5WhGja39bk1vXAln00mTwH5XIe")
const Order = require('../models/orderModel')

router.post("/placeorder", async (req,res)=>{
 const {token,subtotal,currentUser,cartItems} = req.body
 try{
  const customer = await stripe.customers.create({
    email: token.email,
    source:token.id
    
  })

  const payment = await stripe.charges.create({
    amount:subtotal*100, 
    currency:'lkr',
    customer: customer.id,
    receipt_email: token.email
  },{
       idempotencyKey: uuidv4() //to charger user once
  })
 
  if(payment)
  {

    const newOrder = new Order({
      name: currentUser.name,
      email: currentUser.email,
      userid: currentUser._id,
      orderItems: cartItems,
      orderAmount:subtotal,
      shippingAddress:{street:token.card.address_line1,
      city: token.card.address_city,
      country: token.card.address_country,
      postalcode: token.card.address_zip
      },
      paymentId: payment.source.id
    })
    newOrder.save()
    
    res.send('Order Placed !')
  }
  else{
    res.send('Order Failed !')
  }
 }catch(error){
  console.error('Stripe PaymentIntent Creation Error:', error);
  return res.status(400).json({message:"Something went wrong !" + error})
 }
}) 

router.post("/getuserorders",async (req,res)=>{
  const {userid} = req.body
  try{
    const orders = await Order.find({userid: userid}).sort({_id: -1}) //sort method used to get orders by Date
    res.send(orders)
  }
  catch(error){
    return res.status(400).json({message: 'Something went wrong !'})
  }
})

router.post('/getallorders', async (req, res) => {
  try {
    const orders = await Order.find().sort({_id: -1})
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong !' })
  }
});

router.post("/deliverorder",async (req,res)=>{
  const orderid = req.body.orderid
  try {
    const order = await Order.findOne({_id: orderid})
    order.isDelivered = true
    await order.save()
    res.send('Order Delivered Succussfully !')
  } catch (error) {
    return res.status(400).json({message: 'Something went wrong !' +error})
  }
})
module.exports = router