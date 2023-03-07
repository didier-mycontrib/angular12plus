import { Injectable } from '@angular/core';
import { Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeCounterService {

  public getPeriodicTimeInfo() : Observable<any>{
   return  Observable.create((observer :Observer<number> )=> {
      const interval = setInterval(() => {
        observer.next(Date.now())
      }, 5000); //every 5000ms / 5s
    })
  }

  constructor() { }
}
