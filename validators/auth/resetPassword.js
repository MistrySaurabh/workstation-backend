module.exports = Joi.object().keys({
    password: Joi.string().min(6).required().strict(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
}).unknown(true);