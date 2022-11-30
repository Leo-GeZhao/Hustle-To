const Schema = require('mongoose').Schema;

const variantSchema = new Schema({
    size:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
})

module.exports = variantSchema