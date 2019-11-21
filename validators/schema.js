const login = Joi.object({
    username: Joi.string().email().required(),
    password: Joi.string().required(),
    grant_type: Joi.string().required().valid(["password"])
}).unknown(true);

const register = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required().strict(),
}).unknown(true);

const forgotPassword = Joi.object({
    email: Joi.string().email().required()
}).unknown(true);

const resetPassword = Joi.object({
    password: Joi.string().min(6).required().strict(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
}).unknown(true);

const createProject = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
}).unknown(true);

const createComment = Joi.object({
    project_id: Joi.number().required(),
    task_id: Joi.number().required()
}).unknown(true);

module.exports = {
    login,
    register,
    forgotPassword,
    resetPassword,
    createProject,
    createComment
}