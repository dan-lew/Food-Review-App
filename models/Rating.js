const mongoose = require('mongoose');

const RatingSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'restaurants',
        required:true,
    },
    message: {
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
});
module.exports=mongoose.model('Rating', RatingSchema)