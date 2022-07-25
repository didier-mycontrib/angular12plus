import { Component, OnInit } from '@angular/core';
import { GenericCrudAbstractContextHelper , GenericCrudHelper , GenericCrudContext } from 'd2f-ngx-crud';
import { ObjectHelper } from 'd2f-ngx-commons';
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
