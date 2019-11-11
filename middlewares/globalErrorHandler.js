module.exports = (err, req, res, next) => {
    const error = err.message || 'Internal Server Error';
    const status = err.status || 500;
    errorLogger.error(err);
    res.status(status).json({ error: error });
}