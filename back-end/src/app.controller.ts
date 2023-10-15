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
    return this.authService.register(req.body)
  }

  @Post('/login')
 login(@Request() req){
    return this.authService.login(req.body)
  
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  getTasksFromUser(@Request() req){
  return this.taskService.getTasks(req.user)
}

  @UseGuards(JwtAuthGuard)
  @Post('')
  postNewTask(@Request() req){
    return this.taskService.postTask(req.user,req.body)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  updateTask(@Request() req){
    return this.taskService.updateTask(req.user,req.params.id,req.body)
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteTask(@Request() req){
    return this.taskService.deleteTask(req.user,req.params.id,req.body)
  }
  @UseGuards(JwtAuthGuard)
  @Patch('/:id/update')
  changeDone(@Request() req){
    return this.taskService.changeDone(req.user,req.params.id,req.body)
  }

}
