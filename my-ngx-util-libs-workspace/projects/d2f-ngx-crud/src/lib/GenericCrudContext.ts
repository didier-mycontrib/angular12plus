import { Observable, of, throwError } from 'rxjs';
import { GenericCrudService } from 'd2f-ngx-commons';
import { GenericCrudAbstractContextHelper } from './abstract/GenericCrudAbstractContextHelper';

export class GenericCrudContext<T,I>{

    public entityTypeName : string="UnknownEntityName"; //ex: "Devise" ou "Contact" ou ...
    
    constructor(public contextHelper : GenericCrudAbstractContextHelper<T,I> ){
        this.entityTypeName = contextHelper.objectHelper().getEntityTypeName();
    } 


    public tabObjects : T[]=[];

    public onGetAllObjects$(genericCrudService : GenericCrudService<T> | null) : Observable<T[]>{
        let crudHelper = this.contextHelper.crudHelper();
        if(crudHelper!=null)
            return crudHelper.onGetAllObjects$();
        else if(genericCrudService)
           return   genericCrudService.getAllObjects$(null);
           //<Observable<T[]>> <any> = temporal workaround for unknown angular library version mismatch (rxjs from d2f-ngx-commons) when npm link (no problem with npm i -s d2f-ngx-commons)
        else return throwError(()=>{err:"onGetAllObjects$ not implemented (no genericCrudService and no crudHelper)"});
    }

    public onAddObject$(obj:T , genericCrudService : GenericCrudService<T> | null) : Observable<T>{
        let crudHelper = this.contextHelper.crudHelper();
        if(crudHelper!=null)
            return crudHelper.onAddObject$(obj);
        else if(genericCrudService)
           return   genericCrudService.postEntityObject$(obj);
        else return throwError(()=>{err:"onAddObject$ not implemented (no genericCrudService and no crudHelper)"});
    }

    public onUpdateObject$(obj:T , genericCrudService : GenericCrudService<T> | null) : Observable<T>{
        let crudHelper = this.contextHelper.crudHelper();
        if(crudHelper!=null)
            return crudHelper.onUpdateObject$(obj);
        else if(genericCrudService)
           return   genericCrudService.putEntityObject$(obj);
        else return throwError(()=>{err:"onUpdateObject$ not implemented (no genericCrudService and no crudHelper)"});
    }

    public onDeleteObject$(id: I , genericCrudService : GenericCrudService<T> | null) : Observable<any>{
        let crudHelper = this.contextHelper.crudHelper();
        if(crudHelper!=null)
            return crudHelper.onDeleteObject$(id);
        else if(genericCrudService)
           return  genericCrudService.deleteEntityObjectServerSide$(id);
        else return throwError(()=>{err:"onDeleteObject$ not implemented (no genericCrudService and no crudHelper)"});
    }

   
}