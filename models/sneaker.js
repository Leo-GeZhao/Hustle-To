const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const variantSchema = require('./variantSchema')

const sneakerSchema = new Schema ({
    brand:{
        type:String,
        uppercase:true,
        required:true,
    },
    name: {
        type:String, 
        uppercase:true,
        required:true
    },
    size: [String],
    description:{
        type:String,
    },
    image:{
        type:String,
        required:true,
    },
}, {
    timestamps:true,
})

module.exports = mongoose.model('Sneaker', sneakerSchema);