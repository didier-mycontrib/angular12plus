import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login } from 'src/app/common/data/login';
import { UserSession } from '../common/model/user-session';
import { SessionEnd, TryLogin } from '../common/store/actions/session.actions';

@Component({
  selector: 'my-lazy2-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message="";

  userSession$! : Observable<UserSession>;
//constructor(private store: Store<any>) {
//constructor(private store: Store<AppState>) {
  constructor(private store: Store<{session:UserSession}>) {
    this.userSession$ = store.pipe(select('session'));
    this.userSession$.subscribe((userSession)=>{
      this.message=userSession.connected?"connected":"not connected";
      console.log("message="+this.message + " userSession="+JSON.stringify(userSession));
    })
  }

  login : Login= new Login("admin1","pwdadmin1","user,admin");

  onLogin(){
     console.log("login saisi:"+ JSON.stringify(this.login));

     //Object.assign({},this.login) for several calls . Without this : readonly error
     this.store.dispatch(new TryLogin(Object.assign({},this.login)));
  }
  onLogout(){
    this.store.dispatch(new SessionEnd());
 }

}
