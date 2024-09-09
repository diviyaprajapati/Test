const mongoose = require('mongoose');
require("dotenv").config();


const mongoURL=  process.env.LOCAL_URL
// const mongoURL = process.env.DB_URL

mongoose.connect (mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db =mongoose.connection;

db.on('connected', ()=>{
    console.log('connected tp mongoDB server');
    
});


db.on('error', ()=>{
    console.log('error tp mongoDB server');
    
});


db.on('disconnected', ()=>{
    console.log('disconnected tp mongoDB server')
    
});



module.exports = db;
