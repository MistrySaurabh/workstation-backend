schema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        type: [Number],
        ref: 'Users',
        default: [],
    },
    identifier: {
        type: String,
        unique: true,
        required: true
    },
    project_id: {
        type: Number,
        ref: 'Projects',
        required: true
    },
    created_by: {
        type: Number,
        ref: 'Users'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Teams'
})

schema.plugin(autoIncrement.plugin,'Teams');
module.exports = schema