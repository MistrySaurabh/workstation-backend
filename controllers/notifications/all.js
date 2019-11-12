module.exports = (req, res) => {
    try {

    } catch (e) {
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
            errors: e
        });
    }
}