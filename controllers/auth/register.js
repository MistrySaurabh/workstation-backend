module.exports = (req, res) => {
    try {
        Users.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({
                    errors: {
                        "email": "Email has been already taken"
                    }
                });
            } else {

                const avatar = gravatar.url(req.body.email, { s: '300', r: 'pg', d: 'identicon', f: '1' });

                const newUser = new Users({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });

                helpers.hash.getHash(newUser.password, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            return res.status(200).json({
                                status: "success",
                                message: 'Email has been sent to your registered email address , please verify your account first.'
                            })
                        })
                        .catch(err => console.log(err));
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