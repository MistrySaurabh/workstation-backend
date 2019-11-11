module.exports=(req, res, next) => {
    const request = new Request(req);
    const response = new Response(res);

    oauth.authorize(request, response).then((authorizationCode) => {
        console.log(authorizationCode);
        res.status(response.status).set(response.headers).end();
    }).catch(err => next(err));
};