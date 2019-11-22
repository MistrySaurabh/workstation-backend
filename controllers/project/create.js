module.exports = (req, res) => {

    var project = new Projects({
        name: req.body.name,
        identifier: req.body.identifier,
        description: req.body.description,
        owner_id: req.user._id,
        tags: req.body.tags,
        is_public: true
    });

    console.log(project);

    project.save().then(project => {
        return res.status(200)
            .json({
                status: 'success',
                project: project,
                message: 'project Successfully Created'
            });
    }).catch(error => {
        return res.status(500).json({ status: 'error', message: 'Failed To Create Project.', errors: error });
    });
}