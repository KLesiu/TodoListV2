import * as mongoose from 'mongoose'
import { Task } from 'src/tasks/tasks.model'

export const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'Name is required'],
        minLength: [4, 'Name should be atleast 4 characters long'],
        maxLength: [30,"Name should be less than 30 characters"]
    },
    password: {
        type:String,
        required:[true,'Password is required'],
        select:false
    },
    tasks:{
    type:Array<Task>,
    required:true
    }
})

export interface User extends mongoose.Document{
    id:string,
    name:string,
    password:string
}