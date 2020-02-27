const express=require('express');
const app =express();
const colors=require('colors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');

//load env variable
dotenv.config({path:'./config/config.env'});
//connectDB();

//initialize Middleware
app.use(express.json({extended:false}))

app.get('/',(req,res)=>{
    res.json({msg:'Welcome to contacts app api'})
})

// app.use('/api/users',require('./routes/users'));
// app.use('/api/contacts',require('./routes/contacts'));
// app.use('/api/auth',require('./routes/auth'));

const PORT =process.env.PORT || 5555;

app.listen(PORT,()=>console.log(`Server started on te port ${PORT}`.rainbow.underline.bold))