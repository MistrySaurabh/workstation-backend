var schema = new Schema({
    refresh_token: String,
    expires: Date,
    scope: String,
    User: { type: Number, ref: 'Users' },
    OAuthClient: { type: Number, ref: 'OAuthClient' },
}, {
    collection: 'RefreshToken'
});
schema.plugin(autoIncrement.plugin,'RefreshToken');
module.exports = schema