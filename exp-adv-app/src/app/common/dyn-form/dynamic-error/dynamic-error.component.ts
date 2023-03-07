import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

/*
DynamicErrorComponent pour simplement afficher temporairement
un petit message d'erreur explicatif
*/


@Component({
  selector: "app-dynamic-error",
  templateUrl: "./dynamic-error.component.html",
  styleUrls: ["../common-dyn-form/dyn-form.css"],
})
export class DynamicErrorComponent implements OnInit {
  formName!: FormGroup;

  @Input() 
  fieldName: string="?";

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }

  setCssClasses(){
    {
      
    }
  }

  errorMessage(){
    let errMsg = "error";
    let c = this.formName.controls[this.fieldName];
    if(c.errors && c.errors['required'])
      errMsg = this.fieldName + " is required";
    else if(c.errors && c.errors['minlength'])
      errMsg = "not enough characters, minlength=" + c.errors['minlength']['requiredLength'];
    else if(c.errors && c.errors['min'])
      errMsg = this.fieldName + " should be >= "+ c.errors['min']['min'];
    else if(c.errors && c.errors['max'])
      errMsg = this.fieldName + " should be <= "+ c.errors['max']['max'];
    else if(c.errors && c.errors['email'])
      errMsg = "not a valid email with @";
    else if(c.errors && c.errors['pattern'])
      errMsg = "pattern is not match: " + c.errors['pattern']['requiredPattern'];
    return errMsg;
  }
}
