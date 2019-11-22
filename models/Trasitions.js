var schema = new Schema({
    user_id: { type: Number, ref: 'Users' },
    project_id: { type: Number, ref: 'Projects' },
    task_id: { type: Number, ref: 'Tasks' },
    source_column: { type: Number },
    destination_column: { type: Number },
    date_time: {
        type: Date,
        default: Date.now
    },
    time_spent: { type: Number, default: 0 }
}, {
    collection: 'Transitions'
});
schema.plugin(autoIncrement.plugin, 'Transitions');
module.exports = schema;