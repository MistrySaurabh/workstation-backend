module.exports = (req, res) => {
    try {
        Users.findOne({ email: req.body.username }).lean().exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    errors: {"email": "Failed to login" }
                });
            }

            if (!err && !user) {
                return res.status(404).json({
                    errors: { "email": "No such account exists"}
                });
            }

            if (!err && user) {
                console.log('user', user)
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
                                return res.status(200).json({
                                    status: "success",
                                    token: token
                                });
                            }
                        });
                    } else {
                        return res.status(400).json({
                            errors:{
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