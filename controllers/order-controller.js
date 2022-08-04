const Order = require('../models/order-model')

const orderController = {

    getAll: async (req,res) => {
        const orders = await Order.find();
        res.status(200).json(orders);
    },

    getById: async(req,res) => {
        const id = req.params.id;
        const order = await Order.findById(id);
        if (order) {
            res.status(200).json(order);
        }
        else {
            return res.sendStatus(404);
        }
    },

    create: async(req,res) => {
        const orderToAdd = Order(req.body);
        console.log(orderToAdd);
        await orderToAdd.save();
        res.status(200).json(orderToAdd);
    },

    update: async(req,res) => {
        
        const id = req.params.id;
        const order = await Order.findByIdAndUpdate(id, {
            name: req.body.name,
        }, { returnDocument: 'after'}); 
        
        if(order){
            res.status(200).json(order);
        }
        else {
            return res.sendStatus(404);
        }
    },
    

    delete: async(req,res) => {
        const id = req.params.id;
        
        const orderToDelete = await Order.findByIdAndDelete(id);
        
        if(orderToDelete){
            res.sendStatus(204) 
        }
        else {
            return res.sendStatus(404); 
        }
    },


}

module.exports = orderController;
