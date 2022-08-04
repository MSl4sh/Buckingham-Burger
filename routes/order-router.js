const orderController = require("../controllers/order-controller");
const express = require('express');
const idValidator = require('../middleware/idValidator');
const bodyValidation = require('../middleware/body-validation');
const orderValidator = require('../validators/order-validator');



const orderRouter = require("express").Router();

orderRouter.route('/')
    .get(orderController.getAll)
    .post(bodyValidation(orderValidator),orderController.create)
orderRouter.route('/:id')
    .get(orderController.getById)
    .put(idValidator(), bodyValidation(orderValidator), orderController.update)
    .delete(idValidator(),orderController.delete)


module.exports = orderRouter;