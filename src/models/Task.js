const {Schema , model} = require("mongoose");


var taskSchema  = new Schema({
    name : String ,
    date : {
        type : Date,
        default: Date.now()
    },
    description: String ,
    user : {
        type: ObjectId, 
        ref: 'User'
    }
});

module.exports = module("Task", taskSchema)