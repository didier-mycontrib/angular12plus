import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuDef } from '../common/data/menu-def';

@Component({
  selector: 'mylayout-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {

  @Input()
  title ="my-angular-app";

  
  @Input()
  quickMenuDefs : MenuDef[] = [];

  showStatusBar = true;

  @Output()
  togglerMenu = new EventEmitter<{}>();

  onTogglerMenuClick(){
    this.togglerMenu.emit({});
    //console.log("onTogglerMenuClick()")
  }

  constructor() { }

  onStatusHelp(){
     this.showStatusBar = ! this.showStatusBar;
     if(this.showStatusBar)
         this.autoHideForSmallSize();
  }

  ngOnInit(): void {
    this.autoHideForSmallSize();
  }

  autoHideForSmallSize(){
    //console.log("window.innerWidth ="+window.innerWidth );
    if(window.innerWidth < 600){
      setTimeout(()=>{ this.showStatusBar=false;},2000);
    }
  }

}
