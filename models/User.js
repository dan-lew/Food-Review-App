const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
    }, 
    surname: {
        type: String,
        required:true,
    }, 
    username: {
        type: String,
        required:true,
    }, 
    email:{
        type: String,
        required:true,
    },
    dateOfBirth:{
        type: Date,
        required:true,
    },
   
    date:{
        type: Date,
        default:Date.now
    },
    city:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
});

// create the connection between mongoose and schema
const User=mongoose.model('User',UserSchema);
module.exports=User;
