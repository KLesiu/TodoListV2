import { Component,Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../types/task.type';


@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [NgFor],
  template: `
   <ul>
      <li class="mb-2" *ngFor="let task of tasks">{{task.name}}</li>
   </ul>
  `,
  styles: [
  ]
})
export class ListTasksComponent {
  @Input()tasks:Task[]=[{
    name:"Learn Angular",
    id:0,
    createdAt: new Date().getTime(),
    done:false
  }]
}
