var schema = new Schema({
    name: String,
    client_id: String,
    client_secret: String,
    redirect_uri: String,
    grant_types: {
        type: [String],
        default: ['authorization_code', 'password', 'refresh_token', 'client_credentials']
    },
    scope: String,
    User: { type: Number, ref: 'Users' },
}, {
    collection: 'OAuthClient'
});
schema.plugin(autoIncrement.plugin,'OAuthClient');
module.exports = schema;