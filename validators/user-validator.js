const yup = require('yup');

const userValidator = yup.object({
    firstname : yup.string().required().max(150),
    lastname : yup.string().required().max(150),
    email : yup.string().email().required().max(255),
    adress : yup.string().required().max(150),
    
});

module.exports = userValidator;