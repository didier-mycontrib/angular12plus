import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { Field } from "../../common-dyn-form/field";

@Component({
  selector: "app-dynamic-radio",
  templateUrl: "./dynamic-radio.component.html",
  styleUrls: ["../../common-dyn-form/dyn-form.css"],
})
export class DynamicRadioComponent {
  @Input() 
  field: Field = new Field({ type : "radio" });
  
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = this.formgroupDirective.control;
  }
}
