import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {MongooseModule} from '@nestjs/mongoose'
import { TasksModule } from './tasks/tasks.module';

@Module({
  // Sensitive data was provided for recruitment purposes
  imports: [AuthModule, UsersModule,TasksModule,MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.jenqrab.mongodb.net/?retryWrites=true&w=majority`)],
  controllers: [AppController],
  
})
export class AppModule {}
