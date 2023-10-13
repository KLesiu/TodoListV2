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
    async validateUser(name:string,password:string):Promise<any>{
        const user = await this.usersService.findOneUser(name);
        if (user && bcrypt.compare(password,user.password)){
            const {password, ...result} = user
            return result
        }
        return null
    }
    async login(user:any): Promise<any>{
        
        const info = {name:user.name,sub: user._id}
        return {
            access_token:this.jwtService.sign(info)
        }

    }
    async register(userData:{name:string,password:string}):Promise<any>{
        
        const user = await this.usersService.createUser(userData)
        return user
    }
}
