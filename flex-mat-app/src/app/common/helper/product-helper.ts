import { ObjectHelper } from "src/my-common/helper/ObjectHelper";
import { Product } from "../data/product";

export class ProductHelper implements ObjectHelper<Product,String|null> {
        withAutoGeneratedId(): boolean { return true;  }
        getId(obj: Product): String | null { return obj.ref; };
        getIdKeyName(): string {return "ref"; }
        buildEmptyObject(): Product { return new Product(); };
        getEntityTypeName(): string { return "Product";  };
        essentialFieldNames(): string[] {return ["ref","label","price"]; }
}