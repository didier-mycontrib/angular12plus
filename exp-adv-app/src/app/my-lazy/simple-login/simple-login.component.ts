import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login } from 'src/app/common/data/login';
import { UserSession } from '../common/model/user-session';
import { SessionEnd, TryLogin } from '../common/store/actions/session.actions';
import { SessionState } from '../common/store/states/session.state';

@Component({
  selector: 'my-lazy-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.scss']
})
export class SimpleLoginComponent implements OnInit{
  message="";

  @Select(SessionState.selectStateUserSession)
  userSession$! : Observable<UserSession>;

  constructor(private store: Store) {
  }

  ngOnInit(){
    this.userSession$.subscribe((userSession)=>{
      this.message=userSession.connected?"connected":"not connected";
      console.log("message="+this.message + " userSession="+JSON.stringify(userSession));
    })
  }

  login : Login= new Login("admin1","pwdadmin1","user,admin");

  onLogin(){
     console.log("login saisi:"+ JSON.stringify(this.login));

     this.store.dispatch(new TryLogin(this.login))
         .subscribe({
           next: (result) => { 
            console.log(" dispatchResult="+JSON.stringify(result));
            //dispatchResult = tout le nouveau state global (avec sous parties "sessionState" et "counterState")
           }
         }
         );
         //à cet endoit , appeler .subscribe() sur le resultat de store.dispatch() 
         //n'est pas indispensable
  }
  onLogout(){
    this.store.dispatch(new SessionEnd());
 }

}
