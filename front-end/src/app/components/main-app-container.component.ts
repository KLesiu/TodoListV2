import { Component, inject } from '@angular/core';
import { FooterComponent } from './footer.component';
import { ListTasksComponent } from './list-tasks.component';
import { SubmitTaskComponent } from './submit-task.component';
import { ComponentListState } from '../types/list-state.type';
import { Task } from '../types/task.type';
import { NgIf } from '@angular/common';
import { TasksService } from '../services/tasks.service';
import { LoadingElementTrainComponent } from './loading-element-train.component';
import { RegisterFormComponent } from './register-form.component';
import { LoginFormComponent } from './login-form.component';


@Component({
  selector: 'app-main-app-container',
  standalone: true,
  imports: [FooterComponent,ListTasksComponent,SubmitTaskComponent,ListTasksComponent,NgIf,LoadingElementTrainComponent,RegisterFormComponent,LoginFormComponent],
  template: `
    <main class="flex justify-between flex-wrap flex-col items-center h-[90vh] ">
        <div *ngIf="isLogIn;else loginANDregisterForms">
          <app-submit-task (submitText)="listState.state==='success'&&addNewTask($event,listState.results)" />
          <app-list-tasks *ngIf="listState.state==='success'" class="block mt-4" [tasks]="listState.results" />
          <p *ngIf="listState.state==='error'">{{listState.error.msg}}</p>
          <p *ngIf="listState.state==='loading'">
          <app-loading-element-train  />  
         </p>

        </div>
        <ng-template  #loginANDregisterForms>
          <div class="flex justify-around w-[40%] flex-wrap">
            <app-register-form />
            <app-login-form />
          </div>

        </ng-template>


        <app-footer />
    </main>
  `,
  styles: [
  ]
})
export class MainAppContainerComponent {
    isLogIn:boolean=false
    listState:ComponentListState<Task>={state:'init'}
    private tasksService = inject(TasksService)
    ngOnInit(){
      
      this.listState={state:"loading"}
      this.tasksService.getAllTasks().then(res=>{
        if(Array.isArray(res)) this.listState={state:"success",results:res}
        else this.listState={state:"error",error:res}
      })
    }
    addNewTask(name:string,tasks:Task[]){
      if(name.length < 1) return alert('You have to name your task')
      this.listState={state:"loading"}
      const useTaskServiceToAdd=async()=>{
        
        this.tasksService.add(name).then(()=>this.ngOnInit())
       
      }
      useTaskServiceToAdd()
      
    }

}
