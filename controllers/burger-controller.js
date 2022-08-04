const Burger = require('../models/burger-model')

const burgerController = {

    getAll: async (req,res) => {
        const burgers = await Burger.find();
        res.status(200).json(burgers);
    },

    getById: async(req,res) => {
        const id = req.params.id;
        const burger = await Burger.findById(id);
        if (burger) {
            res.status(200).json(burger);
        }
        else {
            return res.sendStatus(404);
        }
    },

    create: async(req,res) => {
        const burgerToAdd = Burger(req.body);
        console.log(burgerToAdd);
        await burgerToAdd.save();
        res.status(200).json(burgerToAdd);
    },

    update: async(req,res) => {
        const id = req.params.id;
        const burger = await Burger.findByIdAndUpdate(id, {
            name: req.body.name,
        }, { returnDocument: 'after'}); 
        
        if(burger){
            res.status(200).json(burger);
        }
        else {
            return res.sendStatus(404);
        }
    },

    delete: async(req,res) => {
        const id = req.params.id;
        
        const burgerToDelete = await Burger.findByIdAndDelete(id);
        
        if(burgerToDelete){
            res.sendStatus(204) 
        }
        else {
            return res.sendStatus(404); 
        }
    },


}

module.exports = burgerController;