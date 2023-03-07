import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset,} from '../actions/counter.actions';

export const initialState = 0;
// define reducer behavior :
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
// apply reducer on state and action :
export function counterReducer(state : number | undefined, action : Action) {
  return _counterReducer(state, action);//return new state
}
