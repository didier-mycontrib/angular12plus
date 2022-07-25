import { HttpErrorResponse } from "@angular/common/http";

export function messageFromError(err : HttpErrorResponse , myMsg /*: string*/ = ""){
    let message="";
    if (err.error instanceof Error) {
      console.log("Client-side error occured." + JSON.stringify(err));
      message = myMsg;
      } else {
      console.log("Server-side error occured : " + JSON.stringify(err));
      let detailErrMsg = (err.error && err.error.message)?":"+err.error.message:"";
      message = myMsg + " (status="+ err.status + ":" + err.statusText + ") " + detailErrMsg ; 
      }
    return message;
  }

  export function cloneObjectWithoutMethod(obj:any):any{
    return JSON.parse(JSON.stringify(obj));
  }

  export function copyObjectProperties(source:object, target : object){
    let arrayOfPropKeys = Reflect.ownKeys(source);
    for(let key of arrayOfPropKeys){
     Reflect.set(target, key, Reflect.get(source,key));
    }
   }

   export function objectWithMethodsOfProto(objectWithoutMethods : object, protoWithMethods : object ):any{
    //!!! NB: protoWithMethods is modified here (should be as new created instance)!!!
    copyObjectProperties(objectWithoutMethods ,protoWithMethods);
    return protoWithMethods; //modified with good data values
   }