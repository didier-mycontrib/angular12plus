import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { DecrementCounter, IncrementCounter, ResetCounter } from "../actions/counter.action";

export class CounterStateModel {
    counter!: number;
}

@State<CounterStateModel>({
    name:"counterState",
    defaults:{
        counter : 0
    }
})
@Injectable()
export class CounterState {
    constructor( /*private _as: AService*/ ) { }

    @Selector()
    static selectStateCounter(state:CounterStateModel){
        return state.counter;
    }

    @Action(IncrementCounter)
    incrementCounterOfState(ctx: StateContext<CounterStateModel>){
        ctx.setState({
            counter: ctx.getState().counter + 1
        });
    }

    @Action(DecrementCounter)
    decrementCounterOfState(ctx: StateContext<CounterStateModel>){
        const state = ctx.getState();
        const newCounter  = state.counter - 1;
        /*
        ctx.setState({
            ...state,
            counter:newCounter
        });
        //utile dans cas où le nouvel état est combiné à l'ancien
        */
        ctx.setState({
            counter:newCounter
        });
    }

    @Action(ResetCounter)
    resetCounterOfState(ctx: StateContext<CounterStateModel>, {initVal} : ResetCounter){
        ctx.setState({
            counter:initVal
        });
    }

}