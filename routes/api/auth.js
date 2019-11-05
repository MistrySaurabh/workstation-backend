const router = express.Router();

router.post('/login', validators.validate(validators.auth.login, 'body'), controllers.auth.login);
router.post('/register', validators.validate(validators.auth.register, 'body'), controllers.auth.register);
router.post('/forgot_password', validators.validate(validators.auth.forgotPassword, 'body'), controllers.auth.forgotPassword);
router.post('/reset_password', validators.validate(validators.auth.resetPassword, 'body'), controllers.auth.resetPassword);
//router.post('/logout', middlewares.Oauth2.authenticate, controllers.auth.logout);

module.exports = router