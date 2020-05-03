const {Schema , model } = require('mongoose');


const sharedTaskSchema = new Schema(
    {
        user : {
            type : Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        privileges : {
            type: String,
            required : true,
            default : 'READ'
        }
    }
)


module.exports = module('SharedTask', sharedTaskSchema );