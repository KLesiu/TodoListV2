import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';
import { ListTasksComponent } from './list-tasks.component';


@Component({
  selector: 'app-main-app-container',
  standalone: true,
  imports: [FooterComponent,ListTasksComponent],
  template: `
    <main class="flex justify-between flex-wrap flex-col items-center h-[90vh] ">
        <app-list-tasks />
        <app-footer />
    </main>
  `,
  styles: [
  ]
})
export class MainAppContainerComponent {

}
