import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { LoginResult } from "src/app/common/data/login-result";
import { LoginService } from "src/app/common/service/login.service";
import { UserSession } from "../../model/user-session";
import { SessionEnd, TryLogin } from "../actions/session.actions";

export class SessionStateModel {
    userSession!: UserSession;
}

@State<SessionStateModel>({
    name:"sessionState",
    defaults:{
        userSession : new UserSession("?",false,"")
    }
})
@Injectable()
export class SessionState {
    constructor( private _loginService: LoginService ) { }

    @Selector()
    static selectStateUserSession(state:SessionStateModel){
        return state.userSession;
    }

    @Action(TryLogin)
    tryLoginForStateChange(ctx: StateContext<SessionStateModel>, {login}:TryLogin){
        //NB: {login}:TryLogin selon paramètre(s) du constructeur de TryLogin
        return this._loginService.postLogin$(login) //appel interne au service
               .pipe(tap((loginResult:LoginResult) => { 
                  if(loginResult.ok)
                    ctx.setState({
                         userSession :  new UserSession(loginResult.username,
                                                        true,
                                                        loginResult.roles)
                      });//end of setState()
                }));//end of tap() and end of .pipe()
        //NB: la valeur de retour est utilisée en interne par NgXs
        //ce n'est pas la valeur de retour de l'appel à store.dispatch()
        //la valeur de retour de store.dispatch() , c'est tout le nouveau store
    }

    @Action(SessionEnd)
    resetCounterOfState(ctx: StateContext<SessionStateModel>){
        ctx.setState({
            userSession : new UserSession("?",false,"")
        });
    }
}