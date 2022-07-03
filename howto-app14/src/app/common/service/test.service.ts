import { Injectable } from '@angular/core';
import { delay, flatMap, forkJoin, mergeMap, Observable, of } from 'rxjs';

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

  public recupNombre$() : Observable<number>{
    console.log("simu recup async nombre");
      return of( 23 ).pipe(delay(2222) );
  }

  public recupDouble$(x:number) : Observable<number>{
    console.log("simu calcul async double");
    return of( 2 * x ).pipe(delay(4210) );
  }

  public recupSomme$(x:number , y:number) : Observable<number>{
    console.log("simu recup async somme");
    return of( x + y ).pipe(delay(3330) );
  }

  public multiRequetesSeq$(): Observable<any>{
    /* return this.recupNombre$()
    .pipe(mergeMap(x1 => this.recupDouble$(x1)))
    .pipe(mergeMap(x2 => this.recupSomme$(x2,10)));
    */

    return this.recupNombre$()
    .pipe(mergeMap(x1 => this.recupDouble$(x1)) ,
          mergeMap(x2 => this.recupSomme$(x2,10)));
    //équivalent de promise.then(..).then(...).then(...)
 }


}
