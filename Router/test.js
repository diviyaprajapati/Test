// const express = require('express');
// const routertest = express.Router();
// const person = require('../module/person'); // Adjust the path if necessary
// const mongoose = require('mongoose');
// // POST /person






// let persons = []; // Declare persons globally, outside the route

// routertest.get('/', async (req, res) => {
//   try {
//     persons = await person.find("name" ,"kuldeep");
//     console.log('Persons inside route:', persons); // Log it inside the route
//     res.status(200).json(persons);
//   } 
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Log persons outside (but keep in mind it might be empty until the route is hit)
// // console.log( persons);
// console.log(person.name);



// module.exports = routertest;