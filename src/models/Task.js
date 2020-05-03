const {Schema , model} = require("mongoose");


var taskSchema  = new Schema({
    name : String ,
    date : {
        type : Date,
        default: Date.now()
    },
    description: String ,
    user : {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    shared : {
        type: [Schema.Types.ObjectId],
        ref: 'SharedTask',
        required : true
    }
});

module.exports = module("Task", taskSchema)