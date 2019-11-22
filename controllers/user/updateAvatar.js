var storageAvatar = multer.diskStorage({
    destination: function(req, file, callback) { callback(null, rootdir + '/storage/avatars'); },
    filename: function(req, file, callback) { callback(null, Date.now() + path.extname(file.originalname)); }
});
var uploadAvatar = multer({ storage: storageAvatar }).single("file");

module.exports = (req, res) => {
    uploadAvatar(req, res, function(err) {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to upload avatar', errors: err });
        } else {
            Users.update({ _id: req.user._id }, { avatar: req.file.filename })
                .then(user => {
                    return res.status(200).json({ status: 'success', message: 'Avatar successfully updated' });
                }).catch(err => {
                    return res.status(500).json({ status: 'error', message: 'Internal Server Error', errors: error });
                });
        }
    });


}