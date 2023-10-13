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
    
    button:hover{
      background: rgb(220,222,226);
background: -moz-radial-gradient(circle, rgba(220,222,226,1) 0%, rgba(217,222,219,1) 100%);
background: -webkit-radial-gradient(circle, rgba(220,222,226,1) 0%, rgba(217,222,219,1) 100%);
background: radial-gradient(circle, rgba(220,222,226,1) 0%, rgba(217,222,219,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#dcdee2",endColorstr="#d9dedb",GradientType=1);
    }
    
      
    `
  ]
})
export class SubmitTaskComponent {
  @Output() submitText = new EventEmitter<string>()
}
