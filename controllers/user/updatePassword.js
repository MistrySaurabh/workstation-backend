module.exports = (req, res) => {
    helpers.hash.getHash(req.body.password, (err, hash) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to update password' });
        } else {
            Users.update({ _id: req.user._id }, { password: hash })
                .then(user => {
                    // TODO : logout user from other sessions
                    return res.status(200).json({ status: 'success', message: 'Password successfully updated' });
                })
                .catch(e => {
                    return res.status(500).json({
                        status: "error",
                        message: "Internal Server Error",
                        errors: e
                    });
                })
        }
    });
}