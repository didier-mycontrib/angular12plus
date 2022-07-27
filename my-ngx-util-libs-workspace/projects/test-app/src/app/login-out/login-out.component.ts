import { Component, OnInit } from '@angular/core';
import { UserSession , UserSessionEx, UserSessionService } from 'd2f-ngx-commons';
import { Login } from '../common/data/login';

@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.scss']
})
export class LoginOutComponent implements OnInit {

  constructor(public userSessionService : UserSessionService) { }

  userSessionEx  = new UserSessionEx(undefined);
  login  = new Login();

  ngOnInit(): void {
    this.userSessionService.bsUserSession$.subscribe(
      (userSession)=>this.userSessionEx=new UserSessionEx(userSession)
    )
    //console.log("LoginOutComponent/ngOnInit , login:"+JSON.stringify(this.login));
  }

  onLogout(){
    this.userSessionService.setUserSession(new UserSession());
    this.login  = new Login();
  }

  onLogin(){
    //v1 : without ckeck password , without server:
    this.userSessionEx  = new UserSessionEx(undefined);
    this.userSessionEx.userRolesAsString = this.login.roles;
    this.userSessionEx.userName = this.login.username;
    this.userSessionEx.authToken = "bearerTokenForConnectedUser";
    this.userSessionService.setUserSession(this.userSessionEx);
  }

}
