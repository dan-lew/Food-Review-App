const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth=require('../middleware/auth')
// import Rating model

const Restaurant = require("../models/Restaurants");
const Reviews = require("../models/Review");



router.post('/',auth,async(req,res)=>{
  // res.send("Restaurant page");
 try {

   let category=req.body.category;
   let city = req.body.city;
   const restaurants = await Restaurant.find({$and:[{category:category},{city:city}]}).sort({date:-1});
   console.log(restaurants)
   res.json(restaurants)

 } catch (error) {
   console.log(error.message);
   res.status(500).json({msg :'Server Error'})
 }
})


router.post('/category',auth,async(req,res)=>{
   // res.send("Restaurant page");
  try {
    let category=req.body.category;
    const restaurants = await Restaurant.find({category:category}).sort({date:-1});
    console.log(restaurants)
    res.json(restaurants)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({msg :'Server Error'})
  }
})


// add a restaurant
router.post("/",
  [
    check("restaurantName")
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
  ],auth,
  async (req, res) => {           ``
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res.status(400).json({ erorrs : errors.array()});
    }
    const { restaurantName,address,city,country,category,photo,rating} = req.body;
    try {
      const restaurant = new Restaurant({
        restaurantName,
        address,
        city,
        country,
        category,
        photo,
        rating
      });
      const newRestaurant = await restaurant.save();
      res.json(newRestaurant)
    }
    catch(err) {
      console.log(err);
      res.status(500).send(" Server Error");
    }
    }
);

//Get the List of Restaurants relating to Food 
 router.post('/getrestaurantfood',auth,async (req,res,next)=>{

  let nameOfDish = req.body.nameOfDish;
  let city = req.body.city;

  let restaurants = await Reviews.find({$and:[{nameOfDish:nameOfDish},{city:city}]})

  console.log(restaurants)

  let restaurantsList = [];

  restaurants.forEach(element => {
    restaurantsList.push(element.restaurantName)
  });
  let restaurantInfo = await Restaurant.find({restaurantName:restaurantsList})
  res.send(restaurantInfo)

})


module.exports = router;