import { Injectable } from "@angular/core";
import { LoginService } from "src/app/common/service/login.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { NewValidSession, SessionActionTypes, SessionEnd, TryLogin } from "../actions/session.actions";
import { map,  mergeMap,  switchMap, tap } from "rxjs";

@Injectable()
export class SessionEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService) {
  }

  tryLogin$ = createEffect( () => this.actions$.pipe(
    // Listen to TRY_LOGIN action
    ofType(SessionActionTypes.TRY_LOGIN),
    // Fetch payload
    map((action: TryLogin) => action.login),
    // Call API or any other desired stuff
    mergeMap(login => this.loginService.postLogin$(login).pipe(
        //tap(result => console.log("result=" + JSON.stringify(result))),
        map(result => result.ok?(new NewValidSession(result)):(new SessionEnd()))
      )
    )
  ));

}