import { Component,Input,inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Task } from '../types/task.type';
import { TasksService } from '../services/tasks.service';
import { RemoveTaskButtonComponent } from './remove-task-button.component';

import { AutoFieldAreaComponent } from './auto-field-area.component';


@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [NgFor,NgIf,RemoveTaskButtonComponent,AutoFieldAreaComponent],
  template: `
   <ul class="mt-[5vh]" *ngIf="tasks.length>0 ;else noTasksElement">
      <li class="mb-2" *ngFor="let task of tasks">
        <div class="rounded-md shadow-md p-4 block">
          <button class="w-full" (click)="handleSingleClick(task)" (dblclick)="switchModeToEdit(task)">
          <aside class="flex justify-end">
            <app-remove-task-button (confirm)="delete(task._id)" />
          </aside>
          <section class="text-left">
            <app-auto-field-area *ngIf="editMode&&switchingTask===task._id;else previewModeTemplate"
            (keyup.escape)="editMode = false"
            (submitText)="updateTask(task._id,$event,task)"
            [value]="task.name" />
            <ng-template #previewModeTemplate>
                <span [class.line-through]="task.done">
                  {{ task.name }}
                </span>
              </ng-template>
          </section>
          </button>
           
        </div>
      </li>
      
   </ul>
   <ng-template #noTasksElement>
      <p>You dont have any tasks!</p>
   </ng-template>
  `,
  styles: [
  ]
})
export class ListTasksComponent {
  @Input()tasks:Task[]=[]
  removeMode = false
  editMode = false
  isSingleClick = true
  switchingTask = ""

  private tasksService = inject(TasksService)
  delete(taskId:string){
    this.tasksService.delete(taskId)
    const newTasks = this.tasks.filter(task=>task._id !== taskId)
    this.tasks = newTasks
   
    
  }
  updateTask(taskId:string,updateName:string,task:Task){
    this.tasksService.update(updateName,taskId)
    this.editMode=false
    task.name = updateName
  }
  

  handleSingleClick(task:Task){
    this.isSingleClick=true
    setTimeout(()=>{
      if(this.isSingleClick) return this.changeDoneStatus(task)
      
    
  })}

  switchModeToEdit(task:Task){
    this.switchingTask=task._id
    this.isSingleClick=false
    this.editMode=true
  }
  changeDoneStatus(task:Task){
    task.done = !task.done
    this.tasksService.changeDone(task._id,task.done)
  }
}
