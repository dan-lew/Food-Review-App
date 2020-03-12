const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWTStrategy = require("passport-jwt").Strategy;
const FacebookStrategy=require('passport-facebook').Strategy;
const GithubStrategy=require('passport-github').Strategy;

// Load User Model
const User = require("../models/User");

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match User in mongo DB
      User.findOne({ email: email })
        .then(userData => {
          if (!userData) {
            return done(null, false, {
              message: "this email is not registered"
            });
          }
          // Match password
          bcrypt.compare(password, userData.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, userData);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  const optionsJWT = {
    jwtFromRequest: req => req.cookies.jwt,
    secretOrKey: process.env.JWT_SECRET
  };
  passport.use(
    "jwt",
    new JWTStrategy(optionsJWT, (jwt_payload, done) => {
      try {
        User.findOne({ email: jwt_payload.id }).then(user => {
          if (user) {
            console.log("User is found in the database");
            done(null, user);
          } else {
            console.log("User not found in the database");
            done(null, false);
          }
        });
      } catch (error) {
        done(error);
      }
    })
  );


  //facebook
const optionsFacebook={
  clientID:'2484672351747542',
  clientSecret:'17e1e2e489bd031cc5ba4a1ef1b3cb6f',
  callbackURL:"http://localhost:5000/users/auth/facebook/callback",
  profileFields:['id','displayName','email']
}

passport.use('facebook',
new FacebookStrategy(optionsFacebook, (accessTocken,refreshToken,profile,done)=>{
  User.findOne({email:profile._json.email})
      .then(userData=>{
        if(!userData){
          return done(null,false,{message: 'this email is not registered'})
        }else{FacebookStrategy
          return done(null,userData)
        }
      })
      .catch(err=>{
        done(err)
      })
}))

//Github
const optionsGithub={
  clientID:'514a5fec0a6a9060ad7a',
  clientSecret:'04ae99418cf587032bdb90dcea5ba2152895417c',
  callbackURL:"http://localhost:5000/users/auth/github/callback",
  profileFields:['id','displayName','email']
}

passport.use('github',
new GithubStrategy(optionsGithub, (accessTocken,refreshToken,profile,done)=>{
  console.log(profile._json.email)
  User.findOne({email:profile._json.email})
  .then(userData=>{
    if(!userData){
      return done(null,false,{message: 'this email is not registered'})
    }else{FacebookStrategy
      return done(null,userData)
    }
  })
  .catch(err=>{
    done(err)
  })
}))


};