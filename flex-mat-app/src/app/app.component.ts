import { Component, HostListener } from '@angular/core';
import { MenuDef } from 'd2f-ngx-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flex-mat-app';

  legalFooterInnerHtml ="this app legal footer"

  appMenuDefs : MenuDef[] = [
    new MenuDef("home","/ngr-home"),
    new MenuDef("public ...",null,[
      new MenuDef("demo","/ngr-demo"),
      new MenuDef("basic","/ngr-basic"),
    ]),
    new MenuDef("login-out","/ngr-login-out"),
    new MenuDef("admin ...",null,[
      new MenuDef("admin xx","/ngr-admin-xx"),
      new MenuDef("admin yy","/ngr-admin-yy"),
    ])
  ];

  quickMenuDefs : MenuDef[] = [
      new MenuDef("demo","/ngr-demo"),
      new MenuDef("basic","/ngr-basic"),
  ];

}
