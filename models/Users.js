var schema = new Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    verify_token: {
        type: String,
        default: null
    },
    is_active: {
        type: Boolean,
        default: true
    },
    provider: {
        type: String,
        default: 'email'
    },
    provider_id: {
        type: String,
        default: null
    },
    reset_token: {
        type: String,
        default: null
    },
    reset_token_expires: {
        type: Number,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Users'
});
schema.plugin(autoIncrement.plugin,'Users');
module.exports = schema;