const express = require("express");
const expressLayouts=require('express-ejs-layouts');
const app=express();
const colors=require('colors');
const connectDB=require('./config/db');
const dotenv=require('dotenv');
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors = require("cors")

const index=require('./routes/index');
const users=require('./routes/users');

dotenv.config({path:'./config/config.env'});

//4. connect to db
connectDB();
//5
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json({extended:false}));

app.use('/', index);
app.use('/api/users',users);

const PORT=process.env.PORT || 5002;
app.listen(PORT,console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV}`.bgMagenta))