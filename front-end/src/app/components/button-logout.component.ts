import { Component,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-logout',
  standalone: true,
  imports: [],
  template: `
    <button (click)="logOut()" class="absolute top-20 right-10 border rounded-lg p-2 text-1xl ">
      LOGOUT
    </button>
  `,
  styles: [
    `
    button:hover{
      background: rgb(87,138,214);
      background: -moz-radial-gradient(circle, rgba(87,138,214,1) 0%, rgba(119,164,187,1) 100%);
      background: -webkit-radial-gradient(circle, rgba(87,138,214,1) 0%, rgba(119,164,187,1) 100%);
      background: radial-gradient(circle, rgba(87,138,214,1) 0%, rgba(119,164,187,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#578ad6",endColorstr="#77a4bb",GradientType=1);
    }
    `
  ]
})
export class ButtonLogoutComponent {
  @Output() newLogInStatus = new EventEmitter<boolean>()

 
  logOut(){
    this.removeJwtFromLocalStorage()
    this.changeStatus(false)
  }

  
  private changeStatus(value:boolean){
    this.newLogInStatus.emit(value)
  }
  
  private removeJwtFromLocalStorage(){
    localStorage.removeItem("jwt")
  }
}
