export class LoginResult{
    constructor(public username:string="",
                public ok:boolean=false,
                public roles:string="",
                public token : string | null = null
                ){}
}