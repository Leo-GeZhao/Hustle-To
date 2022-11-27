const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sneakerSchema = new Schema ({
    name: {
        type:String, 
        uppercase:true,
        required:true
    },
    price: {
        type:Number,
        required:true,
    },
    size: {
        type:Number,
        required:true,
    },
    description:{
        type:String,
    }
    
}, {
    timestamps:true,
})

module.exports = mongoose.model('Sneaker', sneakerSchema);