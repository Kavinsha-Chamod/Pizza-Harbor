const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/addpizza", async(req, res)=>{
  const pizza = req.body.pizza

 try {
  const newPizza = new Pizza({
    name: pizza.name,
    image: pizza.image,
    varients: ['Regular','Medium','Large'],
    description: pizza.description,
    category: pizza.category,
    prices: [pizza.prices]
  })
  await newPizza.save()
  res.send('New Pizza added !')
 } catch (error) {
  return res.status(400).json({message: error})
 }
})

router.post("/getpizzabyid", async(req,res)=>{
  const pizzaid = req.body.pizzaid

  try {
    const pizza = await Pizza.findOne({_id:pizzaid})
    res.send(pizza)
  } catch (error) {
    return res.status(400).json({message: error})
  }
})

router.post("/editpizza", async (req,res)=>{
  const updatedpizza = req.body.updatedpizza
  try {
    const pizza = await Pizza.findOne({_id:updatedpizza._id})
    pizza.name=updatedpizza.name,
    pizza.description=updatedpizza.description,
    pizza.image=updatedpizza.image,
    pizza.category=updatedpizza.category,
    pizza.prices = [updatedpizza.prices]

    await pizza.save();
    res.sendStatus('Pizza details Edited !')
  } catch (error) {
    return res.status(400).json({message: error})
  }
})

router.post("/deletepizza", async (req,res) =>{
  const pizzaid = req.body.pizzaid
  try {
    await Pizza.findOneAndDelete({_id: pizzaid})
    res.send('Pizza deleted successfully !')
    
  } catch (error) {
    return res.status(400).json({message: error})
  }
})

module.exports = router;
