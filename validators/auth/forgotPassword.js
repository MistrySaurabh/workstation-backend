module.exports = Joi.object().keys({
    email: Joi.string().email().required()
});