import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserSession } from '../data/user-session';


/* user session in this angular frontEnd App */

class GenericUserSessionService{

 

  storeSessionKeyValue(key:string,value: unknown):void{
         let sValue : string ="null";
         if(typeof value == 'string') sValue = value;
         else sValue=JSON.stringify(value);
         sessionStorage.setItem(key,sValue);
    }

  retreiveSessionValue(key:string,defaultValue: any):any{
      let res :any = null;
      let sValue : string  | null = sessionStorage.getItem(key);
      if(sValue != null && sValue != "null" && sValue != "") {
        try {
          res=JSON.parse(sValue);
        }catch(ex){
          res=sValue;
        }
      }
      if(res==null){
        res=defaultValue;
      }
      return res;
 }
}

@Injectable({
  providedIn: 'root'
})
export class UserSessionService extends GenericUserSessionService {

  private _bsUserSession$ = new BehaviorSubject<UserSession>(new UserSession());
 

  public get bsUserSession$() : BehaviorSubject<UserSession>{ 
    return this._bsUserSession$
  }

  public setUserSession(userSession:UserSession){
    this.storeSessionKeyValue("userSession" ,userSession);
    this._bsUserSession$.next(userSession);
  }

  constructor() { super(); 
    let userSession = this.retreiveSessionValue("userSession",new UserSession()/*default_values*/);
    this._bsUserSession$.next(userSession);
  }
}
