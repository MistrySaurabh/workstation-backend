schema = new Schema({
    body: {
        type: Schema.types.Mixed,
        required: true
    },
    attachments: {
        type: [Schema.Types.ObjectId],
        ref: 'Files',
        default: [],
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Projects',
        required: true
    },
    task_id: {
        type: Schema.Types.ObjectId,
        ref: 'Tasks',
        required: true
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
    collection: 'Comments'
})

module.exports = schema