import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDef } from 'src/app/common/data/menu-def';

@Component({
  selector: 'app-main-side-nav',
  templateUrl: './main-side-nav.component.html',
  styleUrls: ['./main-side-nav.component.scss']
})
export class MainSideNavComponent implements OnInit {
  
  @Output()
  afterNav = new EventEmitter<{value:String}>();

  @Input()
  menuDefs : MenuDef[] = [
    new MenuDef("xxx","/ngr-xxx"),
    new MenuDef("yyy","/ngr-yyy")
  ];

  selectedMenuDef : MenuDef | null = null;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onAfterNav(afterNavEvent : any){
    this.selectedMenuDef=null;
    this.afterNav.emit(afterNavEvent); //forward event to parent
  }


  onSelectedMenuChange(selectedMenuChangeEvent:any): void {
        this.selectedMenuDef = selectedMenuChangeEvent.newSelectedMenuDef;
  }



}
