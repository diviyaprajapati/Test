const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

router.use(passport.initialize());
  
passport.use(new LocalStrategy(
    async (username, password, done) => {
      try {
        console.log('Received credentials:', username, password);
  
        // Check if username or password is missing
        if (!username || !password) {
          console.log('Missing credentials');
          return done(null, false, { message: 'Bad Request: Missing credentials' });
        }
  
        const user = await person.findOne({ username: username });
  
        if (!user) {
          console.log('User not found');
          return done(null, false, { message: 'Unauthorized: Incorrect username' });
        }
  
        const isPasswordMatch = user.password === password;
        console.log('Password match:', isPasswordMatch);
  
        if (isPasswordMatch) {
          return done(null, user);
        } else {
          console.log('Incorrect password');
          return done(null, false, { message: 'Unauthorized: Incorrect password' });
        }
      } catch (err) {
        console.error('Error during authentication:', err);
        return done(err);
      }
    }
  ));

  
  module.exports = passport