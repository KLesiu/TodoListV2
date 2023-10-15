import { ExtractJwt,Strategy } from "passport-jwt";
import {PassportStrategy} from '@nestjs/passport'
import { Injectable } from '@nestjs/common';
import { UsersService } from "src/users/users.service";
require('dotenv').config();


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly usersService: UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: process.env.JWT_SECRET
        })
    }

   
    async validate(info:any){
        
        const user = await this.usersService.findOneUser(info.name)
        
        return  {_id:user._id,name:user.name,tasks:user.tasks}
    }
}