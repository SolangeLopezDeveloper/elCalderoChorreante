
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    drink: {
        type: String,
        required : true,
        trim: true
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
      
    }
},
{
    timestamps : true
}

)



module.exports = mongoose.model('Favorite', userSchema)
