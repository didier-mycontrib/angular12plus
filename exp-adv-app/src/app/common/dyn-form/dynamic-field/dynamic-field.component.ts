import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {DynamicInputComponent} from "./dynamic-input/dynamic-input.component";
import {DynamicSelectComponent} from "./dynamic-select/dynamic-select.component";
import {DynamicRadioComponent} from "./dynamic-radio/dynamic-radio.component";
import {DynamicCheckboxComponent} from "./dynamic-checkbox/dynamic-checkbox.component";
import { Field } from '../common-dyn-form/field';

@Component({
  selector: "app-field-input",
  templateUrl: "./dynamic-field.component.html",
  styleUrls: ["../common-dyn-form/dyn-form.css"],
})
export class DynamicFieldComponent implements AfterViewInit{

  @Input() field: Field = new Field(); //Field definition/structure (specific meta)

  mapDynamicComponents= new Map<string,any>(); //map of sub classes of DynamicFieldComponent

  constructor(private cd: ChangeDetectorRef) {
    this.mapDynamicComponents.set("text",DynamicInputComponent);
    this.mapDynamicComponents.set("number",DynamicInputComponent);
    this.mapDynamicComponents.set("date",DynamicInputComponent);
    this.mapDynamicComponents.set("radio",DynamicRadioComponent);
    this.mapDynamicComponents.set("checkbox",DynamicCheckboxComponent);
    this.mapDynamicComponents.set("select",DynamicSelectComponent);
  }

  
  @ViewChild('dynamicInputContainer',{ read: ViewContainerRef}) 
  dynamicInputContainer!: ViewContainerRef;
  /*
  <ng-container #dynamicInputContainer>
  </ng-container>
  */

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.mapDynamicComponents.get(this.field.type)|| DynamicInputComponent;
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);  //set @Input field in concrete subsclass
    this.cd.detectChanges();
  }


}
