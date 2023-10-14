import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private jwtService:JwtService
    ){}
   
    async login(user:any): Promise<any>{
        const findUser = await this.usersService.findOneUser(user.name)
        if(!user.name) return {status:'Name is required'}
        if(!user.password) return {status: "Password is required"}
        if(!findUser) return  {status:'We havent user with that username, please register first.'}
      
        const correctPass = await bcrypt.compare(user.password,findUser.password)
        if(correctPass){
            const info = {name:user.name,sub: user._id}
            return {
                access_token:this.jwtService.sign(info)
           
            }
        }
        return  {status:'Incorrect password'}
    
           
        

    }
    async register(userData:{name:string,password:string}):Promise<any>{
        
        const user = await this.usersService.createUser(userData)
        return {user:user,status:"Registered!"}
    }
}
