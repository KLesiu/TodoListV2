import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-auto-field-area',
  standalone: true,
  imports: [],
  template: `
    <textarea
        #textarea
        [placeholder]="placeholder"
        [value]="value"
        class="resize-none overflow-hidden focus:outline-orange-400 w-full"
        (click)="$event.stopPropagation()"
        (keyup.enter)="submitText.emit(textarea.value); textarea.value = ''"
        (input)="calcHeight(textarea)"
    >
    </textarea>
  `,
  styles: [
  ]
})
export class AutoFieldAreaComponent {
  @Input() placeholder="";
  @Input() value=""

  @Output() submitText = new EventEmitter<string>()
  protected calcHeight(textarea:HTMLTextAreaElement){
    textarea.style.height=textarea.scrollHeight+"px"
  }
}
