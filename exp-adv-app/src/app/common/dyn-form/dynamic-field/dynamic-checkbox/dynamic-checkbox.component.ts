import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { Field } from "../../common-dyn-form/field";

@Component({
  selector: "app-dynamic-checkbox",
  templateUrl: "./dynamic-checkbox.component.html",
  styleUrls: ["../../common-dyn-form/dyn-form.css"],
})
export class DynamicCheckboxComponent {
  @Input() 
  field: Field = new Field({type:"checkbox"});

  formName: FormGroup; //bind to a part of <form [formGroup]="formName"> in .html

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = this.formgroupDirective.control;
  }
}
