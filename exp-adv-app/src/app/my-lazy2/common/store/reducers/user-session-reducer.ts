import { LoginResult } from "src/app/common/data/login-result";
import { UserSession } from "../../model/user-session";
import { NewValidSession, SessionAction, SessionActionTypes } from "../actions/session.actions";

const userSessionInitialState  =  new UserSession("?",false,"");

export function userSessionReducer(state = userSessionInitialState, action: SessionAction) {
    switch(action.type){
        case SessionActionTypes.SESSION_END:
                return  userSessionInitialState;
               
        case SessionActionTypes.NEW_VALID_SESSION:
            let validLogin : LoginResult  = (<NewValidSession> action).validLogin;
                return  new UserSession(validLogin.username,
                                                  true,
                                                  validLogin.roles)
        case SessionActionTypes.TRY_LOGIN:
            //pas d'inpact sur le state (simple pré-action à transformer via effect) --> as default
        default:
            return state;

    } 
}