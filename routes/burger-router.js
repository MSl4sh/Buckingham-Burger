const express = require('express');
const idValidator = require('../middleware/idValidator');
const bodyValidation = require('../middleware/body-validation');
const burgerValidator = require('../validators/burger-validator');

const burgerRouter = express.Router();

const burgerController = require('../controllers/burger-controller');

burgerRouter.route('/')
    .get(burgerController.getAll)
    .post(bodyValidation(burgerValidator),burgerController.create)

burgerRouter.route('/:id')
    .get(idValidator(), burgerController.getById)
    .delete(idValidator(),burgerController.delete)

module.exports = burgerRouter;