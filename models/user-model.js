const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    adress : {
        type : String,
        required : true
    },
    
},{
    collection : 'User',
    timestamps : true
});

const User = model('User', userSchema);
module.exports = User;