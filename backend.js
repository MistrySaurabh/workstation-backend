global.express = require('express')
global.app = express()
global.dotenv = require('dotenv')
dotenv.config()
global.bodyParser = require('body-parser');
global.cookieParser = require('cookie-parser');
global.OAuth2Server = require('oauth2-server');
global.requireTree = require('require-tree')
global.cors = require('cors')
global.mongoose = require('mongoose')
global.Schema = mongoose.Schema;
global.nodemailer = require('nodemailer');
global.Joi = require('@hapi/joi')
global.autoIncrement = require('mongoose-auto-increment');
global.bcrypt = require('bcrypt-nodejs');
global.crypto = require('crypto');
global.gravatar = require('gravatar');
global.moment = require('moment');
global._ = require('lodash');
global.ejs = require('ejs')
global.fs = require('fs')
app.set('view engine', 'ejs');
ejs.delimiter = '?';
require('events').EventEmitter.prototype._maxListeners = 100;



global.winston = require('winston');
global.winstonRotator = require('winston-daily-rotate-file');


global.logger = new winston.createLogger({
    transports: [new winston.transports.Console()]
});


global.errorLogger = logger;
errorLogger.add(new winston.transports.DailyRotateFile({
    name: 'error-file',
    level: 'error',
    filename: './logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '14d',
    prepend: true
}));



global.rootdir = __dirname

var mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

autoIncrement.initialize(mongoose);
mongoose.connect('mongodb://localhost:27017/workstation_backend', mongooseOptions, function(err) {
    if (err) {
        console.error('System could not connect to mongo server')
        process.exit()
    } else {
        console.log('System connected to mongo server')
    }
});



app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ parameterLimit: 100000, limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: '50mb' }));

// 'validators'
let folders = ['models', 'helpers', 'mailer', 'validators', 'OAuth2', 'middlewares', 'controllers', 'routes']
for (let i of folders) {
    global[i] = requireTree(rootdir + '/' + i);
}
for (var i in models) {
    global[i] = mongoose.model(i, models[i])
}
global.Request = OAuth2Server.Request;
global.Response = OAuth2Server.Response;
global.oauth = new OAuth2Server({
    debug: true,
    accessTokenLifetime: 60 * 60,
    allowBearerTokensInQueryString: true,
    model: OAuth2.OAuthModel,
    grants: ['authorization_code', 'password', 'refresh_token', 'client_credentials']
});



app.get('/seed', (req, res) => {
    let password = "asdf1234ASDF$$$$";
    helpers.hash.getHash(password, (err, hash) => {
        console.log('hash', hash)
        let user = new Users({ name: "Admin", email: "admin@admin.com", role: "admin", password: hash });
        user.save((err, user) => {
            console.log('err', err)
            console.log('user', user);
            if (user) {
                let client = new OAuthClient({
                    name: "OAuth Admin",
                    client_id: "admin",
                    client_secret: "secretOAuth2admin",
                    redirect_uri: "",
                    scope: "profile",
                    User: user._id
                });
                client.save((err, client) => {
                    return res.json({ "status": "success", "message": "All Done" });
                })
            }
        });
    });
});


app.use('/api/auth', routes.api.auth);
app.use('/api/comments', OAuth2.authenticate, routes.api.comment);
app.use('/api/notifications', OAuth2.authenticate, routes.api.notifications);

app.use(middlewares.notFound404);
app.use(middlewares.globalErrorHandler);
app.listen(4000);