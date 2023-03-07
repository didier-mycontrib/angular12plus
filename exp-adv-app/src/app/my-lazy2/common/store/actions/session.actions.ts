/*
//BASIC version , with just unique names :
import { createAction } from '@ngrx/store';

export const tryLogin = createAction('[Session Before] tryLogin');
export const newValidSession = createAction('[Session Valid] New');
export const sessionEnd = createAction('[Session Existing] End');
*/

import { Action } from "@ngrx/store";
import { Login } from "../../../../common/data/login";
import { LoginResult } from "../../../../common/data/login-result";

export const enum SessionActionTypes {
    TRY_LOGIN = '[Session Before] tryLogin',
    NEW_VALID_SESSION = '[Session Valid] New',
    SESSION_END = '[Session Existing] End'
  }

export class TryLogin implements Action {
    readonly type: string = SessionActionTypes.TRY_LOGIN;
    constructor(public login: Login) {}
  }

export class NewValidSession implements Action {
    readonly type: string = SessionActionTypes.NEW_VALID_SESSION;
    constructor(public validLogin: LoginResult) {}
  }

export class SessionEnd implements Action {
    readonly type: string = SessionActionTypes.SESSION_END;
    constructor() {}
  }  

export type SessionAction = TryLogin | NewValidSession | SessionEnd; 