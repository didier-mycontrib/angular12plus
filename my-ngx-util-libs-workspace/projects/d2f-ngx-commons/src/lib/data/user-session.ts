export class UserSession{
    constructor(
       public userId : string ="?" /* uuid or num or userName or ... */,
       public userName : string ="?" /* to display : fullName or email or userId or ... */,
       public userRoles : string[] =[],
       public authToken : string | null = null /* null is not connected */,
       public userDetails : object | null = null
    ){}

    hasRole(role:string):boolean{
        return this.userRoles.includes(role);
    }

    isConnected():boolean{
       return (this.authToken!=null);
    }

   
    sumUp():string{
      let sRes=(this.userName!="?")?this.userName:this.userId;
      sRes += (this.isConnected())?" connected" : " not connected"
      sRes += (this.userRoles.length==0)?"":" as "+this.userRoles.join(",");
      return sRes ;
    }

    get userRolesAsString():string{
      return this.userRoles.join(',');
    }


    set userRolesAsString(userRolesAsString : string){
      if(userRolesAsString==null || userRolesAsString.length ==0)
          this.userRoles=[]
      else
          this.userRoles=userRolesAsString.split(',');
    }

}