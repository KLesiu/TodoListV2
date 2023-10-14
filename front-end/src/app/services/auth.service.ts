import { ListFetchingError } from "../types/list-fetch-error.type";
import { Injectable } from "@angular/core";

import { User } from "../types/users.type";
import { wait } from "../helpers/wait";


@Injectable({
    providedIn:'root'
})
export class AuthService{
    private URL = "http://localhost:3000"
    async register(username:string,password:string,rpassword:string){
        if(password !== rpassword) return 'Passwords arent same'
        return fetch(`${this.URL}/register`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:username,
                password:password
            })
        }).then<User[]|ListFetchingError>(res=>{
            if(res.ok) return res.json()
            return {status:res.status,msg:res.statusText}
        })
    }
    async login(username:string,password:string){
       
        return fetch(`${this.URL}/login`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:username,
                password:password
            })
        }).then(res=>{
            if(res.ok) return res.json() 
            
            return {status:res.status,msg:res.statusText}
        }).then<any>(data=>{
            if(data.access_token){
                localStorage.setItem("jwt",data.access_token)
                
                return {status:"validated",token:data.access_token}
            }
            return {status:data.status}
            
        })
        
    }
}