module.exports = (req, res) => {
    var limit = req.query.limit ? parseInt(req.query.limit) : 10,
        page = req.query.page ? parseInt(req.query.page) : 1,
        populate = {
            path: 'notifiable_id',
            select: '_id name avatar'
        },
        sort = {
            created_at: 'desc'
        };

    Notifications.paginate({}, { page, limit, populate, sort }).then(result => {
        return res.status(200).json({
            status: "success",
            result: result
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: err
        });
    });
}