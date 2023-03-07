export interface FieldOptionDefinition {
    label?: string,
    value?: any 
}

export class FieldOption {
    label : string;//label/text of option
    value : any ;
    constructor(definition: FieldOptionDefinition = {}){
        this.label = definition.label || "";
        if(definition.value && definition.value!="" )
             this.value = definition.value 
        else this.value = this.label;
    }
}

export interface RuleDefinition {
    required? : boolean ;
    minlength? : number ;
    min? : number ;
    max? : number ;
    pattern? : string;
    email? : boolean;
}

export interface FieldDefinition {
    type?: string ; //"text" | "number" | "select" | "radio" | "date" | "checkbox";
    label? : string;//label before/for input
    value? : any ;
    options? : FieldOptionDefinition[];
    rules? : RuleDefinition;
    fieldName? : string //formControlName
}

export class Field{
    type: string ; //"text" | "number" | "select" | "radio" | "date" | "checkbox";
    label : string;//label before/for input
    value : any ;
    options : FieldOptionDefinition[];
    rules : {} ;
    fieldName : string; //formControlName

    constructor(definition: FieldDefinition = {}
    ){
        this.type = definition.type || "text";
        this.label = definition.label || "";
        this.value = definition.value || "";
        if(this.type == "checkbox" && this.value == "")
          this.value = false;
        this.options =  [];
        if(definition.options){
          for(let optDef of definition.options){
            //console.log("optDef=" + JSON.stringify(optDef));
            this.options.push(new FieldOption(optDef))
          }
        }
        this.rules = definition.rules || [];
        this.fieldName = definition.fieldName || "";
        if(this.fieldName=="") this.fieldName=this.label;
        if(this.label=="") this.label = this.fieldName;
    }
}