const router = express.Router();

router.post('/login', middlewares.basicAuthHeader, validators.validate(validators.schema.login, 'body'), controllers.auth.login);
router.post('/register', validators.validate(validators.schema.register, 'body'), controllers.auth.register);
router.post('/forgot_password', validators.validate(validators.schema.forgotPassword, 'body'), controllers.auth.forgotPassword);
router.post('/reset_password', validators.validate(validators.schema.resetPassword, 'body'), controllers.auth.resetPassword);
router.post('/logout', OAuth2.authenticate, controllers.auth.logout);

module.exports = router