import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [AuthModule, UsersModule,TasksModule,MongooseModule.forRoot(`mongodb+srv://guest:guest123@cluster0.jenqrab.mongodb.net/TodoListV2?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
