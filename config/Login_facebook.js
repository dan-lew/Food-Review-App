const FacebookStrategy = require("passport-facebook").Strategy;

const strategy = new FacebookStrategy(
  {
    clientID: "2588440934707785",
    clientSecret: "ab80c3a547c407601ddd61a9a73c0ab1",
    callbackURL: "http://localhost:5005/users/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
);

module.exports = strategy;