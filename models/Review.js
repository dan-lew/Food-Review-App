const mongoose = require('mongoose');

const ReviewSchema=new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    restaurantName:{
        type: String,
        required:true,
    },
    category: {
        type: String,
        required: true
    },
    nameOfDish:{
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


module.exports=mongoose.model('Review', ReviewSchema)