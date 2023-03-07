export class UserSession{
    constructor(public username:string="?",
                public connected:boolean=false,
                public roles:string=""){}
}