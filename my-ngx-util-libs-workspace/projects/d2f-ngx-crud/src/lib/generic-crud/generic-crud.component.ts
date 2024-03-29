import { Component, Input, OnInit } from '@angular/core';
import { GenericCrudService , messageFromError } from 'd2f-ngx-commons';
import { GenericCrudContext } from '../GenericCrudContext';

@Component({
  selector: 'generic-crud',
  templateUrl: './generic-crud.component.html',
  styleUrls: ['./generic-crud.component.scss']
})
export class GenericCrudComponent implements OnInit {

  @Input()
  public genericCrudContext : GenericCrudContext<any,any> | null = null;

  @Input()
  public genericCrudService : GenericCrudService<any> | null = null;


  cloneObject(obj:any){
    return JSON.parse(JSON.stringify(obj));
  }

  copyObjectProperties(source:object, target : object){
   let arrayOfPropKeys = Reflect.ownKeys(source);
   for(let key of arrayOfPropKeys){
    Reflect.set(target, key, Reflect.get(source,key));
   }
  }

  objectKeysArray(obj:object):any[]{
    return Reflect.ownKeys(obj);
  }

  essentialKeysArray():any[]{
    return this.genericCrudContext!.contextHelper.objectHelper().essentialFieldNames();
  }

  

  objectValuesArray(obj:object):any[]{
   let arrayOfPropKeys = Reflect.ownKeys(obj);
   let valuesArray = [];
   for(let key of arrayOfPropKeys){
    valuesArray.push(Reflect.get(obj,key));
   }
   return valuesArray;
  }

  objectEssentialValuesArray(obj:object):any[]{
    let arrayOfPropKeys = this.essentialKeysArray();
    let valuesArray = [];
    for(let key of arrayOfPropKeys){
     valuesArray.push(Reflect.get(obj,key));
    }
    return valuesArray;
   }

   isNoEditableId(attrName:string){
    if(this.idKeyName != attrName) return false;
    /* else is key attr*/
    if(this.withAutoGeneratedId)return true;
    if(this.mode=='existingOne') return true;
    return false;
   }

  //this.genericCrudContext?.tabObjects of type T[]

  idKeyName = "id"; //or "code" or "ref" or "num" or ...
  withAutoGeneratedId = false; // or true 

  selectedObject : any ;

  //[(ngModel)]="deviseTemp.code" , ....
  objectTemp : any = null;

  message /*: string*/ ="";

  mode : "newOne" | "existingOne" = "newOne";

  constructor() {
    
   }

  ngOnInit(): void {
    if(this.genericCrudContext==null)return;
    this.idKeyName = this.genericCrudContext.contextHelper.objectHelper().getIdKeyName();
    this.withAutoGeneratedId=this.genericCrudContext!.contextHelper.objectHelper().withAutoGeneratedId();
    this.genericCrudContext.onGetAllObjects$(this.genericCrudService)
    .subscribe(
      { next: (tabObjects)=>{ this.message = this.genericCrudContext?.entityTypeName + " loaded";
                              if(this.genericCrudContext)
                                 this.genericCrudContext.tabObjects = tabObjects;  } ,
       error: (err)=>{ this.message = messageFromError(err,"echec onGetAllObjects$"); }
    });
    this.objectTemp=this.genericCrudContext?.contextHelper.objectHelper().buildEmptyObject();
  }

  onNew(){
    this.mode="newOne";
    this.selectedObject=undefined;
    this.objectTemp = this.genericCrudContext?.contextHelper.objectHelper().buildEmptyObject();
  }

  onAdd(){
    this.genericCrudService?.postEntityObject$(this.objectTemp)
    .subscribe(
     { next: (savedObject)=>{ this.message = this.genericCrudContext?.entityTypeName + " added";
                              this.addClientSide(savedObject); } ,
      error: (err)=>{ this.message = messageFromError(err,"echec post"); }
   });
  }

  addClientSide(savedObject:any){
    this.genericCrudContext?.tabObjects.push(savedObject);
    this.onNew();
  }

  onDelete(){
    if(this.selectedObject){
         let id = this.genericCrudContext?.contextHelper.objectHelper().getId(this.selectedObject);
         this.genericCrudContext?.onDeleteObject$(id,this.genericCrudService)
             .subscribe(
              { next: ()=>{ this.message = this.genericCrudContext?.entityTypeName + " deleted";
                            this.deleteClientSide(); } ,
               error: (err)=>{ this.message = messageFromError(err,"echec suppression"); }
            });
    }
  }

  deleteClientSide(){
    if(this.selectedObject){
      let indexToDelete = -1;
      this.genericCrudContext?.tabObjects.forEach((obj,index)=>{if(obj==this.selectedObject) indexToDelete=index; });
      if(indexToDelete>=0){
        this.genericCrudContext?.tabObjects.splice(indexToDelete,1);
      }
    }
    this.onNew();
  }

  onUpdate(){
    this.genericCrudContext?.onUpdateObject$(this.objectTemp,this.genericCrudService)
    .subscribe(
     { next: (updatedObject)=>{  this.message = this.genericCrudContext?.entityTypeName + " updated";
                   this.updateClientSide(updatedObject); } ,
      error: (err)=>{ this.message = messageFromError(err,"echec update (put)");}
   });
  }

  updateClientSide(updatedObject:any){
  //test imposé par typescript sur this.selectedObject potentiellement undefined
   if(this.selectedObject != undefined){
    //Rappel: this.selectedObject est ici une référence
    //qui pointe directement sur le i eme objet du tableau this.tabObjects
    //(selon ligne sélectionnée)
        this.copyObjectProperties(updatedObject, this.selectedObject);
   }
  }

  //fonction évenementielle à appeler lorsque l'on
  //va sélectionner une des lignes du tableau
  onSelectObject(o : any ){
    //NB: o:any est passé par référence (comportement de java/javascript)
    //et donc ici o et this.selectedObject référencent
    //directement un des objets du tableau this.tabObjects
      this.selectedObject = o;
      this.mode="existingOne";
      //via un clonage explicite , this.objectTemp est une copie
      //indépendante de this.selectedObject (et pas une référence sur l'objet original)
      this.objectTemp = this.cloneObject(this.selectedObject);
      let id = this.genericCrudContext?.contextHelper.objectHelper().getId(this.selectedObject);
      this.message =  id + " selected";
  }


}
