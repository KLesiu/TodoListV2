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
        if(!findUser) return 'We havent user with that username, please regiser first.'
      
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
        return user
    }
}
