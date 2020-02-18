const mongoose = require('mongoose');

const RatingSchema=new mongoose.Schema({
    user:{
        type: String,
        required:true,
    },
    restaurantName:{
        type: String,
        required:true,
    },
    category: {
        type: String,
        required: true
    },
    nameOfFood:{
        type: String,
        required: true
    },
    dateOfVisit:{
        type: Date,
        default:Date.now
    },
    price:{
        type: Number,
        required: true
    },
    photo:{
        type:String,
        required: false
    },
    rating:{
        type: Number,
        required: true
    },
    comment:{
        type: String,
        required: false
    },
})

const RestaurantSchema=new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    category: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    },
    ratings:[RatingSchema],
    email:{
        type: String,
        required:true,
    },
    website:{
        type: String,
        required:true,
    },
    phone:{
        type: Number,
        required:true,
    },
    foods:[]
});
module.exports=mongoose.model('Restaurant', RestaurantSchema)