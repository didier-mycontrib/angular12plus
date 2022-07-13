import { Component, HostListener } from '@angular/core';
import { MenuDef } from './common/data/menu-def';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flex-mat-app';

  appMenuDefs : MenuDef[] = [
    new MenuDef("home","/ngr-home"),
    new MenuDef("xxxxxxxxx","/ngr-xx"),
    new MenuDef("login/logout","/ngr-loginLogout"),
    new MenuDef("mysubmenu1",null,[
      new MenuDef("home","/ngr-home"),
      new MenuDef("login/logout","/ngr-loginLogout"),
    ]),
    new MenuDef("admin",null,[
      new MenuDef("adm1","/ngr-adm1"),
      new MenuDef("adm2","/ngr-adm2"),
    ])
  ];

}
