const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name :{
        type:String,
        required: '{PATH} is required!'
    },
    bio: {
        type:String
    },
    website:{
        type:String
    },
    posts : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Post'}
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('User',UserSchema);
