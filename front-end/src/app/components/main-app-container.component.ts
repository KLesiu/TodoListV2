import { Component, inject ,Input,Output} from '@angular/core';
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
import { ButtonLogoutComponent } from './button-logout.component';




@Component({
  selector: 'app-main-app-container',
  standalone: true,
  imports: [FooterComponent,ListTasksComponent,SubmitTaskComponent,ListTasksComponent,NgIf,LoadingElementTrainComponent,RegisterFormComponent,LoginFormComponent,ButtonLogoutComponent],
  template: `
    <main class="flex justify-between flex-wrap flex-col items-center min-h-[90vh] ">
        <div id="containerForComponents" *ngIf="isLogIn;else loginANDregisterForms" class=" p-20 min-h-[80vh] min-w-[40vw] flex flex-wrap flex-col items-center rounded-lg">
          
          <app-submit-task (submitText)="listState.state==='success'&&addNewTask($event,listState.results)" />
          <app-list-tasks *ngIf="listState.state==='success'" class="block mt-4 w-[70%]" [tasks]="listState.results" />
          <p *ngIf="listState.state==='error'">{{listState.error.msg}}</p>
          <p *ngIf="listState.state==='loading'">
            <app-loading-element-train  />  
          </p>
         <app-button-logout (newLogInStatus)="changeisLogInStatus($event)" />

        </div>

        <ng-template  #loginANDregisterForms>
          <div class="flex justify-around w-[40%] flex-wrap">
            <app-register-form />
            <app-login-form (newLogInStatus)="changeisLogInStatus($event)"  />
          </div>

        </ng-template>

        <app-footer />
    </main>
  `,
  styles: [
    `
#containerForComponents{
    -webkit-box-shadow: 8px 8px 17px -13px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 17px -13px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 17px -13px rgba(66, 68, 90, 1);
    border-top:1px solid grey;
    border-left:1px solid grey
    }
    `
  ]
})
export class MainAppContainerComponent {
    isLogIn:boolean=false
    listState:ComponentListState<Task>={state:'init'}
    private tasksService = inject(TasksService)

    // If localStorage has token show user tasks and login, else show forms section
    ngOnInit(){
      if(localStorage.getItem('jwt')) this.isLogIn=true
      this.listState={state:"loading"}
      this.tasksService.getAllTasks().then(res=>{
        if(Array.isArray(res)) this.listState={state:"success",results:res}
        else this.listState={state:"error",error:res}
      })
    }

   
    addNewTask(name:string,tasks:Task[]){
      if(name.length < 1) return alert('You have to name your task')
      this.listState={state:"loading"}
      
      this.useTaskServiceToAdd(name)
      
    }

    private useTaskServiceToAdd=async(name:string)=>{
       this.tasksService.add(name).then(()=>this.ngOnInit())
     
    }

    
    changeisLogInStatus(value:boolean){
      this.isLogIn=value
      this.ngOnInit()
    }

    

}
