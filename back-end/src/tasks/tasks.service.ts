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
        tasks:Array<Task | null>[],
    },id:string,body:{
        name:string
    }){
        const searchUser: Model<User> = await this.userModel.findById(user._id)
        const allTasks = await searchUser['tasks']
        
      
        const updatedTasks = allTasks.map((ele:Task)=>{
          
           
            if(`${ele._id}`=== id) ele.name=body.name
            return ele

        })
        
        const updatedUser = await searchUser.updateOne({tasks:updatedTasks})
        await this.taskModel.findByIdAndUpdate(id,{"name":body.name})
        return updatedUser
      
      
    }
    async deleteTask(user:{
        name:string,
        _id:string,
        tasks:Array<Task | null>[],
    },id:string,body:{
        name:string
    }){
        const searchUser: Model<User> = await this.userModel.findById(user._id)
        const allTasks = await searchUser['tasks']
        const updatedTasks = allTasks.filter((ele)=>{
            if(`${ele._id}`!== id) return ele
        })
        
        const updatedUser = await searchUser.updateOne({tasks:updatedTasks})
        await this.taskModel.findByIdAndRemove(id)
        return updatedUser
        
    }
    async changeDone(user:{
        name:string,
        _id:string,
        tasks:Array<Task | null>[],
    },id:string,body:{
        done:string
    }){
        const searchUser: Model<User> = await this.userModel.findById(user._id)
        const allTasks = await searchUser['tasks']
        const updatedTasks = allTasks.map((ele:Task)=>{
          
           
            if(`${ele._id}`=== id) ele.done=!ele.done
            return ele

        })
        
        const updatedUser = await searchUser.updateOne({tasks:updatedTasks})
        await this.taskModel.findByIdAndUpdate(id,{"done":JSON.parse(body.done) })
        return updatedUser

    }

}
