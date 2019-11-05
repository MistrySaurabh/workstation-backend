module.exports = Joi.object().keys({
    username: Joi.string().email().required(),
    password: Joi.string().required(),
    grant_type: Joi.string().required().valid(["password"])
}).unknown(true);