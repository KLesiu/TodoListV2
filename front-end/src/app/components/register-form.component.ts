import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <form [formGroup]="applyForm" (submit)="subApp()"  class="flex flex-col justify-around  border p-10 rounded-lg h-[100%]">
      <h2 class="text-blue-600  text-2xl border-b-2 border-indigo-300">REGISTER</h2>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" formControlName="username" >
      <label for="password">Password</label>
      <input type="password" name="password" id="password" formControlName="password">
      <label for="cpassword">Repeat Password</label>
      <input type="password" name="rpassword" id="rpassword" formControlName="rpassword" >
      <button class="border rounded-md border-blue-600 px-3 mt-4 text-1xl" type="submit">Register</button>
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
export class RegisterFormComponent {
  private authService = inject(AuthService)
  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rpassword: new FormControl('')
  })

  // Run services needed to register user
  subApp(){
    this.authService.register(
      this.applyForm.value.username ?? '',
      this.applyForm.value.password ?? '',
      this.applyForm.value.rpassword ?? ''
    ).then((res)=>{
      alert(res.status)
    }).then(()=>this.applyForm.reset())
  }
  
}
