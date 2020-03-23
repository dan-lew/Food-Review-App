const express = require("express");
const app=express();
const colors=require('colors');
const connectDB=require('./config/db');
const dotenv=require('dotenv');
// const passport=require('passport');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors = require("cors")
const fileupload = require("express-fileupload");

const index=require('./routes/index');
const register=require('./routes/register');
const login = require('./routes/login');
const resetPassword=require('./routes/resetPassword');
const editProfile=require('./routes/editProfile');
const reviews = require("./routes/reviews");
const userReviews = require ("./routes/userReviews")
const sendMessage = require("./routes/sendMessage")
const restaurant = require ("./routes/restaurant")
dotenv.config({path:'./config/config.env'});

//4. connect to db
connectDB();
//5
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileupload());
app.use(express.json({extended:false}));


app.use('/api/register',register);
app.use('/api/login',login);
app.use('/api/resetpassword',resetPassword);
app.use('/api/editprofile',editProfile);
app.use("/api/reviews", reviews);
app.use("/api/userReviews", userReviews);
app.use("/api/restaurant", restaurant);
app.use("/api/sendMessage", sendMessage);

const PORT=process.env.PORT || 5002;
app.listen(PORT,console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV}`.bgMagenta))