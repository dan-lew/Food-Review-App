const mongoose = require('mongoose');

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
    date:{
        type: Date,
        default:Date.now
    },
});
module.exports=mongoose.model('Restaurant', RestaurantSchema)