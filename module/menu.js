const mongoose =require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    price:{
        type:Number,
        default : 200
    }
})

const menu = mongoose.model('menu',menuSchema);
module.exports = menu;