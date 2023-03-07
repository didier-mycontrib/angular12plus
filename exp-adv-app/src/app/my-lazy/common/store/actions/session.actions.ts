
import { Login } from "../../../../common/data/login";

export class TryLogin  {
    static readonly type: string = '[Session Before] TryLogin';
    constructor(public login: Login) {}
  }

export class SessionEnd  {
    static readonly type: string = '[Session Exist] End';
    constructor() {}
  }  
