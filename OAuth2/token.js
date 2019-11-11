module.exports = (req, res, callback) => {
    const request = new Request(req);
    const response = new Response(res);
    oauth.token(request, response)
        .then((token) => {
            callback(null, token);
        }).catch(err => {
            callback(err, null);
        });
};