import { Component } from '@angular/core';
import { FooterComponent } from './footer.component';


@Component({
  selector: 'app-main-app-container',
  standalone: true,
  imports: [FooterComponent],
  template: `
    <main class="flex justify-center flex-wrap flex-col items-center ">
        
        <app-footer />
    </main>
  `,
  styles: [
  ]
})
export class MainAppContainerComponent {

}
