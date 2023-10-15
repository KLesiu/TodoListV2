import { Controller, Get,Post,Request, UseGuards,Patch,Delete } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TasksService } from './tasks/tasks.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private taskService: TasksService) 
    {}

  @Post('/register')
  register(@Request() req){
    const {body}=req
    return this.authService.register(body)
  }

  @Post('/login')
  login(@Request() req){
    const {body}=req
    return this.authService.login(body)
  
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    const {user}=req
    return user
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getTasksFromUser(@Request() req){
  const {user}=req
  return this.taskService.getTasks(user)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  postNewTask(@Request() req){
    const {user,body}=req
    return this.taskService.postTask(user,body)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  updateTask(@Request() req){
    const {user,body}=req
    return this.taskService.updateTask(user,req.params.id,body)
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteTask(@Request() req){
    const {user,body}=req
    return this.taskService.deleteTask(user,req.params.id,body)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id/update')
  changeDone(@Request() req){
    const {user,body}=req
    return this.taskService.changeDone(user,req.params.id,body)
  }

}
