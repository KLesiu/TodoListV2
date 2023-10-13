import { Task } from "../types/task.type";
import { ListFetchingError } from "../types/list-fetch-error.type";
import { Injectable } from "@angular/core";
import { wait } from "../helpers/wait";


@Injectable({
    providedIn:'root'
})
export class TasksService{
    private URL = "http://localhost:3000"
    async getAllTasks(){
        await wait()
        return fetch(`${this.URL}`).then<Task[] | ListFetchingError>(res=>{
            if(res.ok) return res.json()
            return {
        status:res.status,msg:res.statusText}
        })

    }
    async add(name:string){
        await wait()
        return fetch(`${this.URL}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                createdAt: new Date().getTime(),
                name,
                done:false
            } as Task)
        }).then<Task | Error>(res=>{
            if(res.ok&&name.length > 0) return res.json()
            return new Error('Cant add task')
        })
    }
    async delete(taskId:number){
        return fetch(`${this.URL}/${taskId}`,{
            method: "DELETE",
        }).then<Error | undefined>((res)=>{
            if(res.ok) return res.json()
            return new Error('Cant delete task')
        })
    }
    async update(name:string,taskId:number){
        return fetch(`${this.URL}/${taskId}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        }).then<Task |Error>(res=>{
            if(res.ok) return res.json()
            return new Error('Cant edit your task!')
        })
    }
    async changeDone(taskId:number,done:boolean){
        return fetch(`${this.URL}/${taskId}/update`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({done})

        }).then<Task | Error>(res=>{
            if(res.ok) return res.json()
            return new Error('Cant change done status')
        })
    }
}