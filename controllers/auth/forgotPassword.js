module.exports = (req, res) => {
    try {
        Users.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                return res.status(404).json({
                    errors: { "email": "Account not exists" }
                });
            }

            var token = crypto.randomBytes(64).toString('hex');
            user.reset_token = token;
            user.reset_token_expires = moment().add(30, 'minutes').unix();
            user.save();
            let reset_url = `${req.protocol}://${req.hostname}:${3000}/password_reset/${token}`;
            let mail = new mailer.Mailer();
            mail.sendForgotPasswordMail(user.email, user.name, reset_url, (err, info) => {
                return res.status(200).json({
                    status: "success",
                    info: info,
                    message: 'password reset link has been successfully sent to your email address'
                });
            });
        });
    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    }
}