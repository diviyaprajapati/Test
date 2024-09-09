const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        // required: true,
    },
    age:{
        type: Number,
        required: true,
    },
  work:{
    type: String,
    required: true,
    enum: ['developer', 'teacher', 'engineer']  
  },

    mobile:{
        type: String,
        required: true,
    },
email:{
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email address'
    }
  },
  address:{
    type: String,
    required: true,
  },
  salary:{
    type : Number,
    required : true,
  },
  username:{
    type : String,
    required : true,

},
password:{
  type : String,
  required : true,
}
}
)
 

const person = mongoose.model('Person',personSchema);
module.exports = person;

