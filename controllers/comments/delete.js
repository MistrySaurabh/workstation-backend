module.exports = (req, res) => {

    let query = {
        _id: req.params.comment_id
    }

    if (req.user.role == constants.roles.USER || req.user.role == constants.roles.GUEST) {
        query = {...query,
            user_id: req.user._id
        }
    }

    Comments.deleteOne(query).then((result) => {
        if (result.deletedCount > 0) {
            return res.status(200).json({ status: 'success', message: 'comment successfully deleted' })
        } else {
            return res.status(200).json({ status: 'error', errors: 'failed to delete comment' })
        }
    }).catch((e) => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    });
}