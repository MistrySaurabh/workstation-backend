module.exports = (req, res) => {
    let query = {
        _id: req.params.task_id
    }

    Tasks.findOne(query).then(task => {
        return res.status(500).json({
            status: "success",
            task: task
        });
    }).catch(e => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    })
}