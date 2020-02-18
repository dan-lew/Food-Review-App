1. # in root
2. npm init -y
3. npm install
4. npm i mongoose colors bcrypt concurrently dotenv express express express-validator jsonwebtoken nodemon  bootstrap --save-dev
5. # create folder
6. client
7. config
8. middleware
9. routes and models
10. # in client folder
npx create-react-app .
11. # add to config folder file 
config.env
db.js
12. # in add to db.js
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

12. # create in Folder client/src/ folders
Components
Context
13. # create in folder client/src/Components
Auth
Restaurants
Layout
Pages
14. # add to models folder file User.js 
const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unigue:true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    },
});
module.exports=mongoose.model('User', UserSchema)
15. # 1.  add to models folder file Restaurants.js 
const mongoose = require('mongoose');

const RestaurantSchema=new mongoose.Schema({
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
15. # 2. add to models folder file Rating.js 
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


16. # in client folder install
npm i react-router-dom react-transition-group --save-dev 

17. # in root -> package.json
"main": "server.js",

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "clientinstall": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  },



