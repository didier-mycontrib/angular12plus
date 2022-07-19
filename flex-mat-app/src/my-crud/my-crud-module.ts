import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericCrudComponent } from './generic-crud/generic-crud.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    GenericCrudComponent
  ],
  declarations: [ 
    GenericCrudComponent
  ]
})
export class MyCrudModule { }
