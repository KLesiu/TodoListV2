import { Injectable } from "@nestjs/common";
import { Task } from "./tasks.model";
import { Model } from 'mongoose'; 
import {InjectModel} from '@nestjs/mongoose'
import { User } from "src/users/users.model";


@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private readonly taskModel:Model<Task>,@InjectModel('User') private readonly userModel:Model<User>){}

    async getTasks(user:{
        name:string,
        _id:string,
        tasks:[],
    }){
        
        const userSearch: Model<User> = await this.userModel.findById(user._id)
        return userSearch["tasks"]
        
    }
    async postTask(user:{
        name:string,
        _id:string,
        tasks:[],
    },body:{
        
        done:boolean,
        name:string,
        createdAt:number
    }):Promise<String>{
        const searchUser: Model<User> = await this.userModel.findById(user._id)
        let taskData={
            name:body.name,
            done:body.done,
            createdAt:body.createdAt
        }
        const task=await this.taskModel.create(taskData)
        if(!task) return 'We couldnt create your task!'
        await searchUser.updateOne({tasks:[...searchUser['tasks'],task]})
        return 'Added!'
        


    }
    async updateTask(user:{
        name:string,
        _id:string,
        tasks:[],
    },id:string,body:{
        name:string
    }){
        
        const updatedTask = await this.taskModel.findById(id)
        
        // FIX
        const userWithArray = await this.userModel.updateOne({
            _id:user._id,
            'tasks._id':id
        },{
            $set:{'tasks.$.name':body.name}
        })
        
       
        if(!updatedTask) return 'We couldnt find your task!'
        await updatedTask.updateOne({name:body.name})
        
        return userWithArray

    }
    async deleteTask(id:string){
        
    }

}
