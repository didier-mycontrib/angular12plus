import { Injectable } from '@angular/core';
import { GenericMemCrudService } from 'src/my-common/service/generic-mem-crud-service';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseMemService extends GenericMemCrudService<Devise>{

  initMap(): void {
    this.objectsMap.set("EUR",new Devise("EUR","Euro",1));
    this.objectsMap.set("USD",new Devise("USD","Dollar",1.1));
    this.objectsMap.set("GBP",new Devise("GBP","Livre",0.9));
    this.objectsMap.set("JPY",new Devise("JPY","Yen",120));
  }

  constructor() { 
    super();
    this.initMap();
  }
}