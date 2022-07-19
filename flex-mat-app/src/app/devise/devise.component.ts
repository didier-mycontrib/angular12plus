import { Component, OnInit } from '@angular/core';
import { GenericCrudAbstractContextHelper } from 'src/my-crud/abstract/GenericCrudAbstractContextHelper';
import { GenericCrudHelper } from 'src/my-crud/abstract/GenericCrudHelper';
import { ObjectHelper } from 'src/my-common/helper/ObjectHelper';
import { GenericCrudContext } from 'src/my-crud/GenericCrudContext';
import { Devise } from '../common/data/devise';
import { DeviseMemService } from '../common/service/devise-mem.service';
import { DeviseHelper } from '../common/helper/devise-helper';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.scss']
})
export class DeviseComponent implements OnInit ,  GenericCrudAbstractContextHelper<Devise,String>{

  genericCrudContext : GenericCrudContext<Devise,String> ;
  //specific subpart for Devise or Contect or other Entity
  //this specific subpart is based on sub-sub-part "GenericContexHelper" implements by this class .

  constructor(public deviseService : DeviseMemService) {
    this.genericCrudContext = new GenericCrudContext<Devise,String>(this);
   }

  objectHelper(): ObjectHelper<Devise, String> {
      return new DeviseHelper();
  }

  crudHelper(): GenericCrudHelper<Devise, String> | null {
    return null;
}
  
  

  ngOnInit(): void {
  }

  
}
