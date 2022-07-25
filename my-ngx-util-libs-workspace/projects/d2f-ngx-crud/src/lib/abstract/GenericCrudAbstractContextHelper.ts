import { GenericCrudHelper } from "./GenericCrudHelper";
import { ObjectHelper } from "d2f-ngx-commons";

export interface GenericCrudAbstractContextHelper<T,I> {
    objectHelper() : ObjectHelper<T,I>;
    crudHelper() : GenericCrudHelper<T,I> | null ;
}