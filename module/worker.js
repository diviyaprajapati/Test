const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
name:{
    type : 'string',
    required : true,
},

age:{
    type : 'number',
    required : true,
},
worker:{
type :'string',
 
    enum :['manager','employee'],
    
}
}
)

const worker = mongoose.model('Worker',workerSchema);

module.exports = worker;
 