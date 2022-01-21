import { Injectable } from '@angular/core';
import { delay, forkJoin, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public multiRequetes$(): Observable<any>{
     return forkJoin({
      p1: of( { nom : "toto"})
         .pipe(
               delay(222) /*simuler une attente de 222ms */
          ),
      p2: of(23),
      p3 :of(124).pipe(
        delay(3333) /*simuler une attente de 3333ms */
         )
    });
  }
}
