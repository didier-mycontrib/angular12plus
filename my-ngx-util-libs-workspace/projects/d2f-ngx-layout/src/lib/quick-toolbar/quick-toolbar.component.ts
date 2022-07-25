import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mylayout-quick-toolbar',
  templateUrl: './quick-toolbar.component.html',
  styleUrls: ['./quick-toolbar.component.scss']
})
export class QuickToolbarComponent implements OnInit {

  //loginLogout , home (welcome) , search , shopping (caddy_or_subscribe)  -->
  @Input()
  loginOutPath ="/ngr-login-out";

  @Input()
  homePath ="/ngr-home";

  @Input()
  searchPath =""; //or "/ngr-search";

  @Input()
  shoppingPath ="";

  @Output()
  statusHelp = new EventEmitter<{}>();

  onHome(){
    this._router.navigateByUrl(this.homePath);
  }

  onStatus(){
    this.statusHelp.emit({});
  }


  onSearch(){
    this._router.navigateByUrl(this.searchPath);
  }

  onLoginOut(){
    this._router.navigateByUrl(this.loginOutPath);
  }

  onShopping(){
    this._router.navigateByUrl(this.shoppingPath);
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
