import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import {MongooseModule} from '@nestjs/mongoose'
import { TaskSchema } from "./tasks.model";
import { UserSchema } from "src/users/users.model";


@Module({
    imports:[MongooseModule.forFeature([{name: 'Task',schema: TaskSchema}]),MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
    providers:[TasksService],
    exports:[TasksService]
})
export class TasksModule{}