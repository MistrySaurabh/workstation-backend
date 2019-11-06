schema = new Schema({
    name: {
        type: Schema.types.Mixed,
        required: true
    },
    members: {
        type: [Schema.Types.ObjectId],
        ref: 'Users',
        default: [],
    },
    identifier: {
        type: String,
        unique: true,
        required: true
    },
    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Projects',
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
}, {
    collection: 'Teams'
})

module.exports = schema