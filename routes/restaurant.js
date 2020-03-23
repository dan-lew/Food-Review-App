const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth=require('../middleware/auth')
// import Rating model
const Restaurant = require("../models/Restaurants");
// Get all restaurants from DB
router.get("/", async(req, res) => {
  // res.send("Restaurant page");
try {
  const restaurants = await Restaurant.find().sort({date:-1});
  res.json(restaurants)
} catch (error) {
  console.log(error.message);
  res.status(500).json({msg :'Server Error'})
}
});
router.post('/category',async(req,res)=>{
   // res.send("Restaurant page");
  try {
    let category=req.body.category;
    const restaurants = await Restaurant.find({category:category}).sort({date:-1});
    res.json(restaurants)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({msg :'Server Error'})
  }
})
// add a restaurant
router.post("/",
  [
    check("name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Restaurant Name is empty"),
      check("address")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Address is empty"),
      check("city")
      .trim()
      .not()
      .isEmpty()
      .withMessage("City is empty"),
      check("country")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Country is empty"),
    check("category")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Type of cuisine is empty"),
    check("rating")
      .trim()
      .isNumeric()
      .not()
      .isEmpty()
      .withMessage("Please select a rating"),
  ],
  async (req, res) => {           ``
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res.status(400).json({ erorrs : errors.array()});
    }
    const { name,address,city,country,category,photo,rating} = req.body;
    try {
      const restaurant = new Restaurant({
        name,
        address,
        city,
        country,
        category,
        photo,
        rating
      });
      const newResturant = await restaurant.save();
      res.json(newResturant)
    }
    catch(err) {
      console.log(err);
      res.status(500).send(" Server Error");
    }
    }
);
module.exports = router;
