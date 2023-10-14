import { Component,inject,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
     <form [formGroup]="applyForm" (submit)="subForm()" class="flex flex-col justify-around  border p-10 rounded-lg h-[100%]">
      <h2 class="text-blue-600  text-2xl border-b-2 border-indigo-300">LOGIN</h2>
      <label for="username">Username</label>
      <input type="text" name="username"  formControlName="username">
      <label for="password">Password</label>
      <input type="password" name="password" formControlName="password">
      <button   type="submit" class="border rounded-md border-blue-600 px-3 mt-4 text-1xl">Login</button>
    </form>
  `,
  styles: [
    `
    label{
      @apply mt-5
    }
    input{
      @apply border-b border-b-blue-200 outline-none
    }

    `
  ]
})
export class LoginFormComponent {
 @Output() newLogInStatus = new EventEmitter<boolean>()
  private authService = inject(AuthService)
  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
   
  })
  subApp(){
    
  this.authService.login(
      this.applyForm.value.username ?? '',
      this.applyForm.value.password ?? '',
      
       ).then((res)=>{
        if(res.status==="validated"){
          return this.changeStatus(true)
        }
        alert(res.status)

        
       }).then(()=>this.applyForm.reset())
       
    
  }
  changeStatus(value:boolean){
    this.newLogInStatus.emit(value)
  }
  subForm(){
    this.subApp()
   


  }

 
}

