import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDef } from 'src/app/common/data/menu-def';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input()
  menuDef : MenuDef =   new MenuDef("xxx","/ngr-xxx");

  @Input()
  selectedMenuDef : MenuDef | null =   null;

  selectedSubMenuDef : MenuDef | null =   null;

  @Output()
  selectedMenuChange = new EventEmitter<{newSelectedMenuDef:MenuDef}>();

  @Output()
  afterNav = new EventEmitter<{value:String}>();

 
  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  
  onNav(md:MenuDef): void {
    if(md.children==null){
      if(md.path != null) this._router.navigateByUrl(md.path);
      this.afterNav.emit({value: md.label});
    }else{
      this.onSelectMenu();
    }
  }

  onSelectMenu(): void {
    this.selectedMenuChange.emit({newSelectedMenuDef:this.menuDef});
  }

  onSelectSubMenu(smd:MenuDef): void {
    this.selectedSubMenuDef = smd;
  }

}
