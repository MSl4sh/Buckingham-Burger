
const orderRouter = require('./order-router');
const burgerRouter = require('./burger-router');
const userRouter = require('./user-router');

const router = require('express').Router();

router.use('/burger', burgerRouter);
router.use('/user', userRouter);
router.use('./order', orderRouter);



module.exports = router;