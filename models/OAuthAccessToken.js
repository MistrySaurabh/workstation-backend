var schema = new Schema({
    access_token: String,
    expires: Date,
    scope:  String,
    User:  { type : Number, ref: 'Users' },
    OAuthClient: { type : Number, ref: 'OAuthClient' },
}, {
    collection: 'OAuthAccessToken'
});
schema.plugin(autoIncrement.plugin,'OAuthAccessToken');
module.exports = schema;