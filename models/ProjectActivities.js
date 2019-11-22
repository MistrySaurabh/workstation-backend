var schema = new Schema({
    event_name: { type: String, default: '', required: true },
    creator_id: { type: Number, ref: 'Users' },
    project_id: { type: Number, ref: 'Projects' },
    task_id: { type: Number, ref: 'Tasks' },
    data: { type: Schema.Types.Mixed, default: '' },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'ProjectActivities'
});

schema.plugin(autoIncrement.plugin, 'ProjectActivities');
schema.plugin(mongoosePaginate)
module.exports = schema;