const mongoose= require('mongoose');
const colors = require('colors')
const connectDB=async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.magenta);
    } catch (error) {
        return console.log("cant connected: ", error)        
    }
} 

module.exports=connectDB;