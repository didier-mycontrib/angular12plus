import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DecrementCounter, IncrementCounter, ResetCounter } from '../common/store/actions/counter.action';
import { CounterState } from '../common/store/states/counter.state';

@Component({
  selector: 'app-simple-counter',
  templateUrl: './simple-counter.component.html',
  styleUrls: ['./simple-counter.component.scss']
})
export class SimpleCounterComponent {

  @Select(CounterState.selectStateCounter)
  counter$! : Observable<number>;

  constructor(private store:Store){

  }

  onDecrement(){
     this.store.dispatch(new DecrementCounter());
  }

  onIncrement(){
    this.store.dispatch(new IncrementCounter());
  }

  onReset(val:number=0){
    this.store.dispatch(new ResetCounter(val));
  }

}
