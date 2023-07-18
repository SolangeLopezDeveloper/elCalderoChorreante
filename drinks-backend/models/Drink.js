const mongoose = require('mongoose')

const drinkSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim: true
    },
    image:{
        type: String,
        required : true,
        trim: true
    },
    price:{
        type: Number,
        required : true,
      
    }
},
{
    timestamps : true
})

/* module.exports =mongoose.model('Drink'. drinkSchema) */
