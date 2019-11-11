var schema=new Schema({
    project_id:{type:Number,ref:'Projects'},
    user_id:{type:Number,ref:'Users'},
    original_name:{type:String},
    formatted_name:{type:String},
    file_size:{type:Number,default:0},
    file_extension:{type:String},
    file_path:{type:String},
    created_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
},{
    collection:'Files'
});
schema.plugin(autoIncrement.plugin,'Files');
module.exports=schema;