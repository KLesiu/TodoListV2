import { Component,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-submit-task',
  standalone: true,
  imports: [],
  template: `

    <input #inputTask type="text" class="border-b border-b-blue-200 outline-none" (keyup.enter)="submitText.emit(inputTask.value); inputTask.value=''">
    <button class="border rounded-md border-blue-400 ml-4 px-3 mt-4 opacity-40" (click)="submitText.emit(inputTask.value);inputTask.value=''">ADD</button>

    
  `,
  styles: [
    `
      input:focus+button{
      @apply text-blue-400 opacity-100
    }
      
    `
  ]
})
export class SubmitTaskComponent {
  @Output() submitText = new EventEmitter<string>()
}
