import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'must provide name'],
        trim:true,
        maxlength: [20,'name can not be more than 20 char']
    },
    complete:{
        type:Boolean,
        default:false
    }
})

export const Task = mongoose.model('Task',TaskSchema)