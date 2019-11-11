schema = new Schema({
    body: {
        type: Schema.Types.Mixed,
        required: true
    },
    attachments: {
        type: [Number],
        ref: 'Files',
        default: [],
    },
    user_id: {
        type: Number,
        ref: 'Users',
        required: true
    },
    project_id: {
        type: Number,
        ref: 'Projects',
        required: true
    },
    task_id: {
        type: Number,
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
schema.plugin(autoIncrement.plugin,'Comments');
module.exports = schema