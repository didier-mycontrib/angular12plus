import { GenericCrudHelper } from "./GenericCrudHelper";
import { ObjectHelper } from "../../my-common/helper/ObjectHelper";

export interface GenericCrudAbstractContextHelper<T,I> {
    objectHelper() : ObjectHelper<T,I>;
    crudHelper() : GenericCrudHelper<T,I> | null ;
}