import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McImportMaterialModule } from './common/mc-import-material.module';
import { MyTogglePanelComponent } from './my-toggle-panel/my-toggle-panel.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    McImportMaterialModule
  ],
  exports: [
    MyTogglePanelComponent
  ],
  declarations: [ 
    MyTogglePanelComponent
  ]
})
export class MyComponentsModule { }
