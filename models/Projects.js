var schema = new Schema({
    name:{type:String,required:true},
    identifier:{type:String,required:true,unique:true},
    description:{type:Schema.Types.Mixed,default:''},
    owner_id:{type:Number,ref:'Users'},
    start_date:{type:Number,default:null},
    end_date:{type:Number,default:null},
    priority_default:{type:Number,default:0},
    is_public:{type:Boolean,default:true},
    deleted:{type:Boolean,default:false},
    is_active:{type:Boolean,default:true},
    access_token:{type:String,default:null},
    tags:{type:Array,default:[]},
    categories:{type:Array,default:[]},
    roles:{type:Array,default:[]},
    users:[{
        user_id:{type:Number,ref:'Users'},
        role:{type:String,default:'project-member'}
    }],
    groups:[{
        name:{type:String,default:''},
        users:[{type:Number,ref:'Users',default:[]}]
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
},{
    collection:'Projects'
});

schema.plugin(autoIncrement.plugin,'Projects');
module.exports=schema;