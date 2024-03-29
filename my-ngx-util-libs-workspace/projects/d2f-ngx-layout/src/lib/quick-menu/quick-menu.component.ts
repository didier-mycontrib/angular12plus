import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDef } from '../common/data/menu-def';


@Component({
  selector: 'mylayout-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrls: ['./quick-menu.component.scss']
})
export class QuickMenuComponent implements OnInit {

  @Input()
  quickMenuDefs : MenuDef[] = [
    new MenuDef("home","/ngr-home"),
    new MenuDef("login/out","/ngr-login-out")
  ];

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onNavigate(path:string | null): void {
    if(path !=null)
        this._router.navigateByUrl(path);
  }

}
