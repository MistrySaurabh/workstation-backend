module.exports = (req, res) => {
    try {
        Users.findOne({ email: req.body.username }).lean().exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    errors: { "email": "Failed to login" }
                });
            }

            if (!err && !user) {
                return res.status(404).json({
                    errors: { "email": "No such account exists" }
                });
            }

            if (!err && user) {
                console.log('user', user)
                if (!user.email_verified) {
                    return res.status(400).json({
                        errors: {
                            "email": "Your Account is not verified yet , please verify your email address first"
                        }
                    });
                }


                helpers.hash.compareHash(req.body.password, user.password, (err, isMatched) => {
                    if (isMatched) {
                        OAuth2.token(req, res, (error, token) => {

                            if (error) {
                                return res.status(error.code).json({
                                    status: "error",
                                    errors: error
                                });
                            }
                            if (!error && token) {
                                delete token.client;
                                delete token.user.password;
                                let cookieOptions = {
                                    expires: token.accessTokenExpiresAt,
                                    sameSite: false,
                                    secure: false,
                                    path: "/",
                                    httpOnly: true
                                }

                                res.cookie('access_token', token.access_token, cookieOptions);
                                res.cookie('refresh_token', token.refresh_token, cookieOptions);
                                res.cookie('auth_user', JSON.stringify(token.user), cookieOptions);

                                return res.status(200).send({
                                    status: "success",
                                    message: "Login Successfull",
                                    token: token
                                });
                            }
                        });
                    } else {
                        return res.status(400).json({
                            errors: {
                                "password": "Incorrect credentials"
                            }
                        });
                    }
                });
            }
        });
    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    }
}