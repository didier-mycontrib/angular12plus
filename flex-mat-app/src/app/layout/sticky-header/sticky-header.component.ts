import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {

  @Input()
  title ="my-angular-app";

  @Output()
  togglerMenu = new EventEmitter<{}>();

  onTogglerMenuClick(){
    this.togglerMenu.emit({});
    //console.log("onTogglerMenuClick()")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
