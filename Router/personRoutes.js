
const express = require('express');
const router = express.Router();
const person = require('../module/person'); // Adjust the path if necessary
const mongoose = require('mongoose');
const cors = require('cors');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// POST /person
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

let persons = []; // Declare persons globally, outside the route

 router.get('/', async (req, res ,next) => {
  try {
    persons = await person.find();
    res.status(200).json(persons);
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
 
});




router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    // Attempt to update the person by ID
    const update = await person.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    // Check if the person was found and updated
    if (!update) {
      return res.status(404).json({ msg : "Data not found" });
    }

    console.log("Data updated");
    res.status(200).json(update);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal error" });
  }
});


router.delete('/:id',async(req,res) => {
  try {
const personid = req.params.id;

if (!mongoose.Types.ObjectId.isValid(personid)) {
  return res.status(400).json({ error: 'Invalid ObjectId format' });
} 

const deletedPerson = await person.findByIdAndDelete(personid);
console.log("deleted person");
res.status(200).json(deletedPerson)

if (!deletedPerson) {
  return res.status(404).json({ msg: "Person not found" });
}
  }
  catch(err){
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
})


//commend

module.exports = router;
