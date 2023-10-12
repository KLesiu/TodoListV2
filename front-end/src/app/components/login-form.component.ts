import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule],
  template: `
     <form action="" class="flex flex-col justify-around  border p-10 rounded-lg h-[100%]">
      <h2 class="text-blue-600  text-2xl border-b-2 border-indigo-300">LOGIN</h2>
      <label for="username">Username</label>
      <input type="text" name="username" >
      <label for="password">Password</label>
      <input type="password" name="password" >
      <button class="border rounded-md border-blue-600 px-3 mt-4 text-1xl">Login</button>
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

}
