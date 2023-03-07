import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'] ,
  encapsulation: ViewEncapsulation.ShadowDom 
})
export class MyButtonComponent {
  @Input() prefix= "MyButton (toogle) -"
  @Input() active = false;
  @Output() change = new EventEmitter<{value:boolean}>();

  toggle(): void {
    this.active = !this.active;
    this.change.emit({value:this.active});
  }
}
