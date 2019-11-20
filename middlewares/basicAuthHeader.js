module.exports = (req, res, next) => {
    let client_id = "admin";
    let client_secret = "secretOAuth2admin";

    let buff = new Buffer.from(`${client_id}:${client_secret}`);
    let authHeader = 'Basic ' + buff.toString('base64');
    console.log('basic auth header =', authHeader)
        //res.header('Authorization', authHeader);
    req.body.client_id = client_id;
    req.body.client_secret = client_secret;
    next();
}