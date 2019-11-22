var schema = new Schema({
    title: { type: String, default: '', require: true },
    description: { type: Schema.Types.Mixed, default: {} },
    tags: { type: Array, default: [] },
    category_id: { type: Number, default: null },
    status: { type: String, default: 'open' },
    priority: { type: Number, default: 0 },
    project_id: { type: Number, reqiured: true },
    swimlane: { type: Number },
    column: { type: Number },
    position: { type: Number, default: 0 },
    owner_id: { type: Number, ref: 'Users' },
    assigned_to_id: { type: Number, ref: 'Users' },
    color_id: { type: String },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
    },
    moved: { type: Number, default: null },
}, {
    collection: 'Tasks'
});
schema.plugin(autoIncrement.plugin, 'Tasks');
schema.plugin(mongoosePaginate)
module.exports = schema;