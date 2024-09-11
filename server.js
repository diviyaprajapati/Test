const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const person = require('./module/person');
const db = require('./db');
const passport = require('./passport');
require("dotenv").config();
const bcrypt = require('bcrypt');
 const cors = require('cors');
app.use(bodyParser.json());


app.use(cors());

// middleware function
const logrequrest = (req,res,next)=>{
console.log(`${new Date().toLocaleString()} Request mode to :${req.originalUrl} `)
//  console.log(route.persons)
next();

}
//  app.use(passport.initialize());
app.get('/',(req,res)=>{
  res.send('welcome to my project')
}) 


  
// passport.use(new LocalStrategy(
//   async (username, password, done) => {
//     try {
//       console.log('Received credentials:', username, password);

//       // Check if username or password is missing
//       if (!username || !password) {
//         console.log('Missing credentials');
//         return done(null, false, { message: 'Bad Request: Missing credentials' });
//       }

//       const user = await person.findOne({ username: username });

//       if (!user) {
//         console.log('User not found');
//         return done(null, false, { message: 'Unauthorized: Incorrect username' });
//       }

//       const isPasswordMatch = user.password === password;
//       console.log('Password match:', isPasswordMatch);

//       if (isPasswordMatch) {
//         return done(null, user);
//       } else {
//         console.log('Incorrect password');
//         return done(null, false, { message: 'Unauthorized: Incorrect password' });
//       }
//     } catch (err) {
//       console.error('Error during authentication:', err);
//       return done(err);
//     }
//   }
// ));




const personRoutes = require('./Router/personRoutes');
const workerRoutes = require('./Router/workerRoutes');
const menuRoutes = require('./Router/menuRouter');
// const testRoutes = require('./Router/test');

app.use('/menu',logrequrest, menuRoutes);
app.use('/worker',logrequrest, workerRoutes);
app.use('/person',logrequrest, personRoutes);
// app.use('/person',logrequrest, test);

console.log("I am here");

const PORT = process.env.PORT 

console.log(PORT)
app.listen(PORT, () => {
  console.log('Server running on port ',PORT);
});
