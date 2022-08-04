const yup = require('yup');

const orderValidator = yup.object({
    orderedBurgerId : yup.string().trim().required().min(3).max(50),
    userMail : yup.string().trim().email().required().max(255),
    userAdress : yup.string().trim().required().max(150),
    
});

module.exports = orderValidator;