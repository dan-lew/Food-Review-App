const mongoose = require("mongoose");
const RestaurantSchema=new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    city:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
    category: {
        type: String,
        required:true,
    },
    photo:{
        type: String,
    },
    rating: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);