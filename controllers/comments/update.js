module.exports = (req, res) => {
    let filter = {
        _id: req.body.comment_id
    }
    let update = {
        body: req.body.body,
        updated_at: new Date()
    }

    Comments.findOneAndUpdate(filter, update, {
        new: true
    }).then(comment => {
        return res.status(200).json({
            status: "success",
            message: "Comment Updated",
            comment: comment
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: err
        });
    })

}