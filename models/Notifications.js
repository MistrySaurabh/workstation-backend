var schema = new Schema({
    type:{type:String, required: true},
    title:{type:String, default:null},
    project_id:  { type : Number, ref: 'Projects' },
    task_id: { type : Number, ref: 'Tasks' },
    notifiable_id:  { type : Number, ref: 'Users' },
    data:{type:Schema.Types.Mixed,default:{}},
    read_at: {
        type: Date,
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
    collection: 'Notifications'
});
schema.plugin(autoIncrement.plugin,'Notifications');
module.exports = schema;