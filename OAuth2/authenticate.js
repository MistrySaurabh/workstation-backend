module.exports = (req, res, next) => {
    const request = new Request(req);
    const response = new Response(res);

    oauth.authenticate(request, response)
        .then((token) => {
            //console.log('token data', token)
            var token = JSON.parse(JSON.stringify(token));
            let user = token.User;
            user.password = '';
            user.access_token = token.access_token;
            user.access_token_expires = token.expires;
            Object.assign(req, { user: user });
            next();
        })
        .catch(err => next(err));
};