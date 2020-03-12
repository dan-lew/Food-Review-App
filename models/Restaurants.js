const mongoose = require("mongoose");

const RestaurantSchema=new mongoose.Schema({
    rating:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'rating',
        required:true,
    },
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
    dateOfVisit:{
        type: Date,
        default:Date.now
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
