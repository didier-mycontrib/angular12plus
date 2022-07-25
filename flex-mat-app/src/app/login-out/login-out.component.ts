import { Component, OnInit } from '@angular/core';
import { UserSession , UserSessionService } from 'd2f-ngx-commons';
import { Login } from '../common/data/login';

@Component({
  selector: 'app-login-out',
  templateUrl: './login-out.component.html',
  styleUrls: ['./login-out.component.scss']
})
export class LoginOutComponent implements OnInit {

  constructor(public userSessionService : UserSessionService) { }

  userSession  = new UserSession();
  login  = new Login();

  ngOnInit(): void {
    this.userSessionService.bsUserSession$.subscribe(
      (userSession)=>this.userSession=userSession
    )
    //console.log("LoginOutComponent/ngOnInit , login:"+JSON.stringify(this.login));
  }

  onLogout(){
    this.userSessionService.setUserSession(new UserSession());
    this.login  = new Login();
  }

  onLogin(){
    //v1 : without ckeck password , without server:
    this.userSession  = new UserSession();
    this.userSession.userRolesAsString = this.login.roles;
    this.userSession.userName = this.login.username;
    this.userSession.authToken = "bearerTokenForConnectedUser";
    this.userSessionService.setUserSession(this.userSession);
  }

}
