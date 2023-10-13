import { Component } from '@angular/core';
import { MainAppContainerComponent } from './components/main-app-container.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainAppContainerComponent],
  template: `
      <div class="flex h-screen flex-col justify-between   ">      
        <h1 class="text-blue-600 text-center text-5xl font-black">
        {{title}}<span class="text-black"> v2</span>
        </h1>
        <app-main-app-container/>
      </div>



      `,
  styles: [],
})
export class AppComponent {
  title = 'ToDoList';
}
