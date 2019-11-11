module.exports = (req, res) => {
    try {
        let comment = new Comments();
        comment.save((err)=>{})
    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    }
}