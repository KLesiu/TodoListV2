import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="mt-20">
      <p >Created&Designed by 
        <a class="text-blue-700" href="https://github.com/KLesiu" target="_blank"> KLesiu</a> 
      </p>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent {

}
