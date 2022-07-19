import { Component, OnInit } from '@angular/core';
import { ObjectHelper } from 'src/my-common/helper/ObjectHelper';
import { GenericCrudAbstractContextHelper } from 'src/my-crud/abstract/GenericCrudAbstractContextHelper';
import { GenericCrudHelper } from 'src/my-crud/abstract/GenericCrudHelper';
import { GenericCrudContext } from 'src/my-crud/GenericCrudContext';
import { Product } from '../common/data/product';
import { ProductHelper } from '../common/helper/product-helper';
import { ProductMemService } from '../common/service/product-mem.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit ,  GenericCrudAbstractContextHelper<Product,String|null>{

  genericCrudContext : GenericCrudContext<Product,String|null> ;
  //specific subpart for Devise or Contect or other Entity
  //this specific subpart is based on sub-sub-part "GenericContexHelper" implements by this class .

  constructor(public productService : ProductMemService) {
    this.genericCrudContext = new GenericCrudContext<Product,String|null>(this);
   }

  objectHelper(): ObjectHelper<Product, String|null> {
      return new ProductHelper();
  }

  crudHelper(): GenericCrudHelper<Product, String> | null {
    return null;
}
  

  ngOnInit(): void {
  }

}
