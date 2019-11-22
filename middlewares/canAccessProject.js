module.exports = (req, res, next) => {
    let project_id = req.params.project_id || req.body.project_id || req.query.project_id;
    if (project_id) {
        if (req.user.role == constants.roles.ADMIN) {
            next();
        } else {
            if (req.user.has_access_projects.indexOf(project_id) == -1) {
                return
                res.status(403).json({
                    status: "error",
                    message: "Forbidden"
                });
            } else {
                next();
            }
        }
    } else {
        return res.status(403)
            .json({
                status: "error",
                message: "Forbidden"
            });
    }
}