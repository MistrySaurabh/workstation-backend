var schema = new Schema({
    authorization_code: String,
    expires: Date,
    redirect_uri:  String,
    scope:  String,
    User:  { type : Number, ref: 'Users' },
    OAuthClient: { type : Number, ref: 'OAuthClient' }
}, {
    collection: 'OAuthAuthorizationCode'
});
schema.plugin(autoIncrement.plugin,'OAuthAuthorizationCode');
module.exports = schema;