import * as mongoose from 'mongoose'

export const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],

    },
    done:{
        type:Boolean,
        required:true
    },
    createdAt:{
        type:Number,
        required:[true,'Date is required']
    }
})

export interface Task extends mongoose.Document{
    id:string,
    name:string,
    done:boolean,
    createdAt:number
}