import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-toolbar',
  templateUrl: './quick-toolbar.component.html',
  styleUrls: ['./quick-toolbar.component.scss']
})
export class QuickToolbarComponent implements OnInit {

  //loginLogout , home (welcome) , search , shopping (caddy_or_subscribe)  -->
  @Input()
  loginLogoutPath ="/ngr-loginLogout";

  @Input()
  homePath ="/ngr-home";

  @Input()
  searchPath =""; //or "/ngr-search";

  @Input()
  shoppingPath ="";

  onHome(){
    this._router.navigateByUrl(this.homePath);
  }

  onSearch(){
    this._router.navigateByUrl(this.searchPath);
  }

  onLoginLogout(){
    this._router.navigateByUrl(this.loginLogoutPath);
  }

  onShopping(){
    this._router.navigateByUrl(this.shoppingPath);
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
