var columnsSchema = new Schema({
    title: { type: String, required: true },
    position: { type: Number, required: true },
    task_limit: { type: Number },
    description: { type: String, default: '' },
    hide_in_dashboard: { type: Boolean, default: false }
});

var swimlaneSchema = new Schema({
    name: { type: String, required: true },
    position: { type: Number, required: true },
    is_active: { type: Boolean, default: true }
})


var schema = new Schema({
    name: { type: String, required: true },
    identifier: { type: String, required: true, unique: true },
    description: { type: Schema.Types.Mixed, default: '' },
    owner_id: { type: Number, ref: 'Users' },
    start_date: { type: Number, default: null },
    end_date: { type: Number, default: null },
    priority_default: { type: Number, default: 0 },
    is_public: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    access_token: { type: String, default: null },
    tags: { type: Array, default: [] },
    categories: { type: Array, default: [] },
    columns: {
        type: [columnsSchema],
        default: [{
                title: 'New',
                position: 0,
                task_limit: 0,
                description: 'New Tasks',
                hide_in_dashboard: false
            },
            {
                title: 'Work in Progress',
                position: 1,
                task_limit: 0,
                description: 'in Progress Tasks',
                hide_in_dashboard: false
            },
            {
                title: 'Testing',
                position: 2,
                task_limit: 0,
                description: 'in Testing Tasks',
                hide_in_dashboard: false
            },
            {
                title: 'Completed',
                position: 3,
                task_limit: 0,
                description: 'Completed Tasks',
                hide_in_dashboard: false
            }
        ]
    },
    swimlanes: {
        type: [swimlaneSchema],
        default: [{
            name: 'Default',
            position: 0,
            is_active: true
        }]
    },
    users: [{
        user_id: { type: Number, ref: 'Users' },
        role: { type: String, default: 'project-member' }
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Projects'
});

schema.plugin(autoIncrement.plugin, 'Projects');
schema.plugin(mongoosePaginate)
module.exports = schema;