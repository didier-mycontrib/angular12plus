import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from '../data/login';
import { LoginResult } from '../data/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //SIMULATED VERSION (without real backend)

  constructor() { }

  public postLogin$(login: Login) : Observable<LoginResult>{
    console.log("LoginService.postLogin$ , login="+JSON.stringify(login))
    let loginResult : LoginResult;
     if(login.password == null || login.username ==null
         || login.password != ("pwd" + login.username))
         loginResult = new LoginResult(login.username,false,"");
     else
        loginResult=new LoginResult(login.username,true,login.roles,"a_token");
    console.log("LoginService.postLogin$ , loginResult="+JSON.stringify(loginResult))    
    return of(loginResult);
  }
}
