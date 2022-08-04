const { Schema, model} = require('mongoose');

const burgerSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }, 
    ingredients : {
        type : [String],
        required : true
    },
    description : {
        type : String,
        required : true
    },
},{
    collection : 'Burgers',
    timestamps : true
});


const Burger = model('Burger', burgerSchema);


module.exports = Burger;