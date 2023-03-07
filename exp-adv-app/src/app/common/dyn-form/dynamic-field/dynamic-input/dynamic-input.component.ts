import { Component, Input } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { Field } from "../../common-dyn-form/field";

@Component({
  selector: "app-dynamic-input",
  templateUrl: "./dynamic-input.component.html",
  styleUrls: ["../../common-dyn-form/dyn-form.css"],
})
export class DynamicInputComponent {
  @Input() 
  field: Field = new Field({type : "text" });

  formName: FormGroup; //bind to a part of <form [formGroup]="formName"> in .html

  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = this.formgroupDirective.control;
  }
}
