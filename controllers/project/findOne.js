module.exports = (req, res) => {

    Projects.findOne({ _id: req.params.project_id }).then(project => {
        if (project) {
            return res.status(200).json({ status: 'success', project: project });
        } else {
            return res.status(404).json({ status: 'error', errors: 'Project not found', message: 'Failed to find Project' });
        }
    }).catch(e => {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    });
}