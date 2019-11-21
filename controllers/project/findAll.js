module.exports = (req, res) => {
    Projects.find({})
        .then(projects => {
            return res.status(200).json({ status: 'success', projects: projects });
        }).catch(err => {
            return res.status(500).json({ status: 'error', projects: [], message: 'Internal Server Error', errors: e });
        });
}