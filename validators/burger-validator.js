const yup = require('yup');

const burgerValidator = yup.object({
    name : yup.string().required().max(50),
    ingredients : yup.array().required(),
    description: yup.string().required()
});

module.exports = burgerValidator;