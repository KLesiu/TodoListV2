import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private readonly URL = "http://localhost:3000"
    
    async register(username:string,password:string,rpassword:string){
        if(!username) return {status: 'Username is required'}
        if(!password || !rpassword) return {status: "Both passwords are required"}
        if(password !== rpassword) return {status:'Passwords arent same'}
        
        return fetch(`${this.URL}/register`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:username,
                password:password
            })
        }).then<any>(res=>{
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
               return this.userLoggedIn(data)
            }

            // Not logged in
            return {status:data.status}
            
        })
        
    }

    private userLoggedIn(data:any){
        localStorage.setItem("jwt",data.access_token)
        return {status:"validated",token:data.access_token}
    }
}