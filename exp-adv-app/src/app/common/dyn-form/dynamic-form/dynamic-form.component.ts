import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Field, FieldDefinition } from "../common-dyn-form/field";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["../common-dyn-form/dyn-form.css"],
})
export class DynamicFormComponent implements OnInit {
  @Input() 
  formModel: { [key:string] : FieldDefinition}={};

  public dynamicFormGroup!: FormGroup;
  
  public fields :Field[] = [];

  @Output()
 submitValues = new EventEmitter<{values:object}>();

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.formModel)) {

      const fieldProps = new Field((<any>this.formModel)[field]);
      const validators = this.validatorsFromRules(fieldProps.rules);

      (<any>formGroupFields)[field] = new FormControl(fieldProps.value, <any>validators);
      this.fields.push(<never><any>{ ...fieldProps, fieldName: field});
    }

    return formGroupFields;
  }

  private validatorsFromRules(rules:any) : Validators[] {
    let validators : Validators[] = [];
    if (rules) {
     for(let rule in rules){
      let val = rules[rule];
      switch (rule) {
        case "required":
          if(val!= false) 
             validators.push(Validators.required);
          break;
        case "minlength":
            val=Number(val);
            if(val>0) 
               validators.push(Validators.minLength(val));
            break;
        case "min":
            val=Number(val);
            validators.push(Validators.min(val));
            break;
        case "max":
            val=Number(val);
            validators.push(Validators.max(val));
            break;
        case "pattern":
            validators.push(Validators.pattern(val));
            break;
        case "email":
            validators.push(Validators.email);
            break;
        default:
      }
     }
    }

    return validators;
  }

  onSubmit() {
    console.log("values of dynamic-form: " + JSON.stringify(this.dynamicFormGroup.value));
    this.submitValues.emit({values : this.dynamicFormGroup.value});
  }
}
