const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    image:{
        type:String,
        required:true,
    },
    name: {
    type:String,
    uppercase:true,
    required:true,
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model('Banner', bannerSchema);