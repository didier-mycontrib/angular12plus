
export class IncrementCounter {
    static readonly type = '[Counter] Increment';
}

export class DecrementCounter {
    static readonly type = '[Counter] Decrement';
}

export class ResetCounter {
    static readonly type = '[Counter] Reset';
    constructor(public initVal :number =0){}
}