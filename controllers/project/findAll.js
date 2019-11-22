module.exports = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let sort = {
        created_at: 'desc'
    };
    let query = {};
    let options = {
        page,
        limit,
        sort
    }

    Projects.paginate(query, options)
        .then(projects => {
            return res.status(200).json({ status: 'success', projects: projects });
        }).catch(err => {
            return res.status(500).json({ status: 'error', projects: [], message: 'Internal Server Error', errors: e });
        });
}