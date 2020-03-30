const mongoose = require('mongoose');

const UserReviewsSchema=new mongoose.Schema({
    user:{
        type: String,
        ref:'user',
        required:true,
    },
    restaurant:{
        type: String,
        required:true,
    },
    comment: {
        type: String,
        required:true,
    },
    rating:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now
    },
    totalSpent:{
        type: Number,
        required: true,
    },
    photo:{
        type:String,
        required: false
    }
});
module.exports=mongoose.model('UserReviews', UserReviewsSchema)