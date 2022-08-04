const userController = require('../controllers/user-controller');
const idValidator = require('../middleware/idValidator');
const bodyValidation = require('../middleware/body-validation');
const userValidator = require('../validators/user-validator');

const userRouter = require('express').Router()

userRouter.route('/')
    .get(userController.getAll) 

userRouter.route('/:id')
    .get(idValidator(), userController.getByID)
    .put(idValidator(), bodyValidation(userValidator) , userController.update)
    .delete(idValidator(), userController.delete)



module.exports = userRouter;