module.exports = (req, res) => {
    var limit = req.query.limit ? parseInt(req.query.limit) : 10,
        page = req.query.page ? parseInt(req.query.page) : 1,
        populate = {
            path: 'owner_id',
            select: '_id name avatar'
        },
        sort = {
            created_at: 'desc'
        };
    let query = {};
    let options = {
        page,
        limit,
        sort,
        populate
    }

    Tasks.paginate(query, options).then(task => {
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