import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { User} from './users.model';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>){}


    async findOneUser(name:string):Promise<User | any>{
        return this.userModel.findOne({name:name}).exec()
    }
    async createUser(userData:any):Promise<any>{
        const findUser = this.findOneUser(userData.name)
        if(findUser) return 'We have a user with this name'
        const salt = await bcrypt.genSalt(10);
        
        const hashPass = await bcrypt.hash(userData.password,salt)
        const newUser = await this.userModel.create({
            name:userData.name,
            password:hashPass
        })
       await newUser.save()
       return newUser


    }



}
