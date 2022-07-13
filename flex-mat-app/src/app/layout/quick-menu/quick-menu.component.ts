import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDef } from 'src/app/common/data/menu-def';


@Component({
  selector: 'app-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrls: ['./quick-menu.component.scss']
})
export class QuickMenuComponent implements OnInit {

  @Input()
  menuDefs : MenuDef[] = [
    new MenuDef("home","/ngr-home"),
    new MenuDef("login/logout","/ngr-loginLogout")
  ];

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  onNavigate(path:string | null): void {
    if(path !=null)
        this._router.navigateByUrl(path);
  }

}
