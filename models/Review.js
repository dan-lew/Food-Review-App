const mongoose = require('mongoose');

const ReviewSchema=new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    restaurantId:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'restaurants',
    },
    restaurantName:{
        type: String,
        required:true,
    },
    city:{
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