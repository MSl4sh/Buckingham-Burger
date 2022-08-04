const { Schema, model} = require('mongoose');

const orderSchema = new Schema({
    orderedBurgerId : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }, 
    userMail : {
        type : String,
        required : true
    },
    userAdress : {
        type : String,
        required : true
    },
},{
    collection : 'Orders',
    timestamps : true
});


const Order = model('Orders', orderSchema);


module.exports = Order;