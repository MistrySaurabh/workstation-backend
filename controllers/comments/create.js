module.exports = (req, res) => {

    let comment = new Comments();
    comment.project_id = req.body.project_id;
    comment.task_id = req.body.task_id;
    comment.user_id = req.user._id;
    comment.body = req.body.body;

    comment.save().then(data => {
        return res.status(200).json({
            status: "success",
            message: "Comment Created",
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